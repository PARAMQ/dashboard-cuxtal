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
                  Nueva subzonificación PM
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="(subzona, index) in subzonas"
                    :key="subzona.idsubzoning"
                    class="container"
                  >
                    <div class="card" @click="viewSubZone(subzona, index)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon icon="account" custom-size="default" />
                                {{ subzona.description }}
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
                v-if="selectSub && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ subzone.index }}
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
                          @click="deleteSubZone(subzone)"
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
                    {{ subzone.description }}
                  </p>
                  <br>
                  <p class="is-size-2">
                    Zonificación PM relacionada:
                  </p>
                  <p class="is-size-3">
                    {{ subzone.legalZone ? subzone.legalZone.description : 'No tiene relacionado una zona legal' }}
                  </p>
                </div>
              </div>
              <div
                v-else-if="selectSub && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ subzone.idsubzoning }}
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
                          v-model="subzone.description"
                          name="Descripcion de la subzona"
                          type="text"
                          required
                        />
                      </b-field>
                      <b-field horizontal label="Zona legal relacionada">
                        <b-autocomplete
                          v-model="text"
                          :data="options"
                          icon="magnify"
                          clearable
                          field="description"
                          @typing="filteredDataArray"
                          @select="(option) => subzone.idzoning = option ? option.idzoning : null"
                        >
                          <template #empty>
                            No hay resultados
                          </template>
                        </b-autocomplete>
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
                    sobre su tarjeta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-sub-zone
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'SubZone',
  data () {
    return {
      text: '',
      legalZones: [],
      options: [],
      selectSub: false,
      isActive: false,
      subzonas: [],
      subzone: {},
      hasEdit: false,
      params: {
        _t: Date.now()
      }
    }
  },
  mounted () {
    this.getData()
    this.getZones()
  },
  methods: {
    async viewSubZone (subzone, index) {
      // // console.log(subzone)
      this.subzone = {}
      const temporal = subzone
      temporal.legalZone = await this.getLegalZone(subzone.idzoning)
      temporal.index = Number(index) + 1
      this.subzone = temporal
      this.selectSub = true
    },
    cancelEdit () {
      this.subzone = {}
      this.selectSub = false
      this.hasEdit = false
    },
    async getLegalZone (id) {
      try {
        const res = await this.$store.dispatch('modules/zones/getInfoZone', id)
        return res
      } catch (error) {
        // // console.log(error)
      }
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/zones/createOrUpdateSubZone',
          this.subzone
        )
        this.subzone = {}
        this.selectSub = false
        this.hasEdit = false
        this.$buefy.toast.open({
          message: 'Subzona guardada!',
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
    deleteSubZone (subzone) {
      this.$swal({
        title: '¿Deseas borrar esta vegetación?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch(
              'modules/zones/deleteSubZone',
              subzone
            )
            this.getData()
            this.subzone = {}
            this.selectSub = false
            this.$buefy.toast.open({
              message: 'Subzona eliminada!',
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
        this.subzonas = []
        const res = await this.$store.dispatch(
          'modules/zones/getSubZones'
        )
        // // console.log(res)
        this.subzonas = res
      } catch (error) {
        // // console.log(error)
      }
    },
    async getZones () {
      try {
        const res = await this.$store.dispatch('modules/zones/getZones')
        this.legalZones = res
        // // // console.log(this.legalZones)
      } catch (error) {
        // // console.log(error)
      }
    },
    filteredDataArray () {
      // // // console.log(this.text)
      this.options = this.legalZones.filter((option) => {
        return option.description.toString().toLowerCase().includes(this.text.toLowerCase())
      })
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
