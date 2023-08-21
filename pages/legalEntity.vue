<template>
  <section class="hero is-cuxtal">
    <div class="container mt-4">
      <div class="card p-2">
        <div class="card-content">
          <nav class="level">
            <div class="level-left" />
            <div class="level-right">
              <p class="level-item">
                <b-button type="is-primary" outlined @click="isActive = true">
                  Nueva entidad legal
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="veg in vegetacion"
                    :key="veg.idlegal_entity"
                    class="container"
                  >
                    <div class="card" @click="viewVeg(veg)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon icon="office-building" custom-size="default" />
                                {{ veg.description }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="column is-8 is-flex is-justify-content-center has-text-centered"
            >
              <div
                v-if="selectVeg && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ vegetation.idlegal_entity }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="edit"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteVeg(vegetation)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div>
                    <p class="is-size-2">
                      Descripción:
                    </p>
                    <p class="is-size-3">
                      {{ vegetation.description }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                v-else-if="selectVeg && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level full-w">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ vegetation.idlegal_entity }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-light"
                          icon-right="keyboard-return"
                          @click="cancelEdit"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-success is-light"
                          icon-right="content-save"
                          @click="saveEdit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="content">
                    <form @submit.prevent="submit">
                      <b-field horizontal label="Descripción breve">
                        <b-input
                          v-model="vegetation.description"
                          name="Descripción"
                          type="text"
                          required
                        />
                      </b-field>
                    </form>
                  </div>
                </div>
              </div>
              <div v-else class="card">
                <div class="card-content">
                  <h1 class="is-size-3">
                    Selecciona un registro
                  </h1>
                  <p class="is-size-5">
                    Si deseas ver la información de un registro haz click
                    sobre su tarjeta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-legal-entity
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'LegalEntity',
  data () {
    return {
      selectVeg: false,
      isActive: false,
      vegetacion: [],
      vegetation: {},
      hasEdit: false,
      params: {
        _t: Date.now()
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    viewVeg (vegetation) {
      this.vegetation = vegetation
      this.selectVeg = true
    },
    cancelEdit () {
      this.vegetation = {}
      this.selectVeg = false
      this.hasEdit = false
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/legalEntity/createOrUpdateLegalEntity',
          this.vegetation
        )
        this.vegetation = {}
        this.selectVeg = false
        this.hasEdit = false
        this.$buefy.toast.open({
          message: 'Registro guardado!',
          type: 'is-success'
        })
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        console.log(error)
      }
    },
    deleteVeg (vegetation) {
      this.$swal({
        title: '¿Deseas borrar este registro?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch(
              'modules/legalEntity/deleteLegalEntity',
              vegetation
            )
            this.getData()
            this.vegetation = {}
            this.selectVeg = false
            this.$buefy.toast.open({
              message: 'Registro eliminado!',
              type: 'is-success'
            })
          } catch (error) {
            this.$buefy.toast.open({
              message: 'Ocurrió un error, intente más tarde',
              type: 'is-danger'
            })
          }
        }
      })
    },
    edit () {
      this.hasEdit = true
    },
    updateView () {
      this.isActive = false
      this.getData()
    },
    async getData () {
      try {
        this.vegetacion = []
        const res = await this.$store.dispatch(
          'modules/legalEntity/getLegalEntitys'
        )
        this.vegetacion = res
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.scroll {
  height: 400px;
  overflow-y: scroll;
}
.card {
  background-color: white !important;
}
.hero.is-cuxtal {
  background-color: #0403039a;
  background-image: url('assets/cuxtal/background.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-origin: content-box;
  background-position: center;
}
.modal-background {
  background-color: rgba(0, 0, 0, 0.568);
}
#slice-card {
  min-width: 200px;
}
#info-vehicle {
  min-width: 400px;
}
#info-vehicle .level {
  width: 100%;
}
</style>
