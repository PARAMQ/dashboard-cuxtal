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
                  Nueva tablaje
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="(veg, index) in tablaje"
                    :key="veg.idcadastral_record"
                    class="container"
                  >
                    <div class="card" @click="viewVeg(veg, index)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon icon="pencil" custom-size="default" />
                                {{ veg.name }}
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
                          ID: {{ vegetation.possition }}
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
                      {{ vegetation.name }}
                    </p>
                  </div>
                  <div>
                    <p class="is-size-2">
                      Polígono cargado?
                    </p>
                    <b-icon
                      v-if="vegetation.coordinates"
                      icon="check-bold"
                      size="is-large"
                      type="is-success"
                    />
                    <b-icon
                      v-else
                      icon="close-octagon"
                      size="is-large"
                      type="is-danger"
                    />
                  </div>
                  <!--
                  <div>
                    <p class="is-size-2">
                      Nombre científico:
                    </p>
                    <p class="is-size-3">
                      {{ vegetation.cientificName ? vegetation.cientificName : 'No registrado' }}
                    </p>
                  </div>
                  -->
                </div>
              </div>
              <div
                v-else-if="selectVeg && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ vegetation.idcadastral_record }}
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
                          v-model="vegetation.name"
                          name="Descripcion del tablaje"
                          type="text"
                          required
                        />
                      </b-field>
                      <b-field class="file is-primary" :class="{'has-name': !!file}">
                        <b-upload v-model="file" class="file-label">
                          <span class="file-cta">
                            <b-icon class="file-icon" icon="upload" />
                            <span class="file-label">Subir archivo (solo DBF)</span>
                          </span>
                          <span v-if="loadingGetCoordinates">
                            Procesando archivo...
                          </span>
                          <span v-if="file" class="file-name">
                            {{ file.name }}
                          </span>
                        </b-upload>
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
    <new-tablaje
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'Tablaje',
  data () {
    return {
      selectVeg: false,
      isActive: false,
      tablaje: [],
      vegetation: {},
      hasEdit: false,
      params: {
        _t: Date.now()
      },
      file: null,
      loadingGetCoordinates: false
    }
  },
  watch: {
    file (newVal, oldVal) {
      if (newVal) {
        this.getCoordinates()
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    viewVeg (vegetation, index) {
      this.vegetation = vegetation
      this.vegetation.possition = (Number(index) + 1)
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
          'modules/tablaje/createOrUpdateTablaje',
          this.vegetation
        )
        this.vegetation = {}
        this.selectVeg = false
        this.hasEdit = false
        this.$buefy.toast.open({
          message: 'Tablaje guardado!',
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
    deleteVeg (vegetation) {
      this.$swal({
        title: '¿Deseas borrar este tablaje?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch(
              'modules/tablaje/deleteTablaje',
              vegetation
            )
            this.getData()
            this.vegetation = {}
            this.selectVeg = false
            this.$buefy.toast.open({
              message: 'Tablaje eliminado!',
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
    async getCoordinates () {
      try {
        this.loadingGetCoordinates = true
        const formData = new FormData()
        formData.append('file', this.file)
        const res = await this.$axios.post('https://vectors-cuxtal-api.onrender.com/procesar_dbf', formData)
        this.vegetation.coordinates = JSON.stringify(res.data.coordinates)
        this.loadingGetCoordinates = false
      } catch (error) {
        console.log(error)
      }
    },
    async getData () {
      try {
        this.tablaje = []
        const res = await this.$store.dispatch(
          'modules/tablaje/getTablajes'
        )
        this.tablaje = res
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
