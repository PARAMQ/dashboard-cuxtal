<template>
  <section class="hero is-cuxtal">
    <div class="container mt-4">
      <div class="card p-2">
        <div class="card-content">
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="coordenada in coordenadas"
                    :key="coordenada.idcoordinates"
                    class="container"
                  >
                    <div class="card" @click="viewCoordinate(coordenada)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon
                                  icon="map-marker"
                                  custom-size="default"
                                />
                                {{ coordenada.name }}
                              </p>
                              <div class="divider" />
                              <p>{{ coordenada.x }} - {{ coordenada.y }}</p>
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
                v-if="selectCoordinate && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ coordenada.idcoordinates }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="columns">
                    <div class="column">
                      <vl-map data-projection="EPSG:4326" style="height: 400px">
                        <vl-view
                          :zoom.sync="zoom"
                          :center.sync="center"
                          :rotation.sync="rotation"
                        />

                        <vl-layer-tile>
                          <vl-source-osm />
                        </vl-layer-tile>

                        <vl-feature>
                          <vl-geom-point
                            :coordinates="coordinates"
                          />
                        </vl-feature>
                      </vl-map>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else-if="selectCoordinate && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          ID: {{ coordinate.idcoordinates }}
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
                      <b-field horizontal label="Nombre">
                        <b-input
                          v-model="coordinate.name"
                          name="Nombre de la zona"
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
                  <div class="container">
                    <h1 class="is-size-3">
                      Selecciona un punto
                    </h1>
                    <p class="is-size-5">
                      Haz click sobre un punto de la lista y lo verás en el mapa.
                    </p>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <vl-map data-projection="EPSG:4326" style="height: 400px">
                        <vl-view
                          :zoom.sync="zoom"
                          :center.sync="center"
                          :rotation.sync="rotation"
                        />

                        <vl-layer-tile>
                          <vl-source-osm />
                        </vl-layer-tile>

                        <vl-feature>
                          <vl-geom-point
                            :coordinates="coordinates"
                          />
                        </vl-feature>
                      </vl-map>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-zone
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'Coordinates',
  data () {
    return {
      selectCoordinate: false,
      isActive: false,
      coordenadas: [],
      coordinate: {},
      hasEdit: false,
      zoom: 13,
      center: [-89.6095127687108, 20.867135753904403],
      coordinates: [-89.6095127687108, 20.867135753904403],
      rotation: 0
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.getData()
  },
  methods: {
    viewCoordinate (coordinate) {
      this.coordinate = coordinate
      this.selectCoordinate = true
    },
    cancelEdit () {
      this.coordinate = {}
      this.selectCoordinate = false
      this.hasEdit = false
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/coordinates/createOrUpdateZone',
          this.zone
        )
        this.zone = {}
        this.selectCoordinate = false
        this.hasEdit = false
        this.$buefy.toast.open({
          message: 'Zona guardada!',
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
    deleteZone (zone) {
      this.$swal({
        title: '¿Deseas borrar esta zona?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch('modules/coordinates/deleteZone', zone)
            this.getData()
            this.zone = {}
            this.selectCoordinate = false
            this.$buefy.toast.open({
              message: 'Zona eliminada!',
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
        this.coordenadas = []
        const res = await this.$store.dispatch(
          'modules/coordinates/getCoordinates'
        )
        this.coordenadas = res
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
