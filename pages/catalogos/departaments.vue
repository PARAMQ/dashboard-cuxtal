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
                  Nueva coordinación
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="departamento in departamentos"
                    :key="departamento.iddepto"
                    class="container"
                  >
                    <div class="card" @click="viewDepartament(departamento)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon icon="account" custom-size="default" />
                                {{ departamento.description }}
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
                v-if="selectDepartament && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ departament.iddepto }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="editDepartament"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteDepartament(departament)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <p class="is-size-2">
                    Descripción:
                  </p>
                  <p class="is-size-3">
                    {{ departament.description }}
                  </p>
                </div>
              </div>
              <div
                v-else-if="selectDepartament && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ departament.iddepto }}
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
                          v-model="departament.description"
                          name="Nº identificación"
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
                    Selecciona una coordinación
                  </h1>
                  <p class="is-size-5">
                    Si deseas ver la información de una coordinación haz click
                    sobre su tarjeta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-depto
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'Departaments',
  data () {
    return {
      selectDepartament: false,
      isActive: false,
      departamentos: [],
      departament: {},
      hasEdit: false,
      params: {
        _t: Date.now()
      }
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.getData()
  },
  methods: {
    viewDepartament (departament) {
      this.departament = departament
      this.selectDepartament = true
    },
    cancelEdit () {
      this.departament = {}
      this.selectDepartament = false
      this.hasEdit = false
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/deptos/createOrUpdateDepto',
          this.departament
        )
        this.departament = {}
        this.selectDepartament = false
        this.hasEdit = false
        this.$buefy.toast.open({
          message: 'Departamento guardado!',
          type: 'is-success'
        })
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        // // console.log(error)
      }
    },
    deleteDepartament (departament) {
      this.$swal({
        title: '¿Deseas borrar este departamento?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch(
              'modules/deptos/deleteDepto',
              departament
            )
            this.getData()
            this.departament = {}
            this.selectDepartament = false
            this.$buefy.toast.open({
              message: '¡Departamento eliminado!',
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
    editDepartament () {
      this.hasEdit = true
    },
    updateView () {
      this.isActive = false
      this.getData()
    },
    async getData () {
      try {
        this.departamentos = []
        const res = await this.$store.dispatch(
          'modules/deptos/getDeptos',
          this.params
        )
        this.departamentos = res
      } catch (error) {
        // // console.log(error)
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
