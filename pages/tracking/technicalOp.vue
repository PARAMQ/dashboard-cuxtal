<template>
  <!--
  <section class="hero is-cuxtal">
    <div v-if="!hasEdit" class="cont">
      <div class="card is-principal m-2">
        <div class="card-header">
          <div class="card-header-title">
            <p class="subtitle">
              <strong>Opiniones técnicas</strong>
            </p>
          </div>
        </div>
        <div class="card-content">
          <div class="level">
            <div class="level-left">
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-button @click="isActiveOT = true">
                  Nueva opinión técnica
                </b-button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="(binnacle, index) in binnacles"
                    :key="binnacle.idbinnacle"
                    class="container"
                  >
                    <div class="card" @click="viewOp(binnacle, index)">
                      <div class="card-content">
                        <p><strong>Folio:</strong> {{ binnacle.folium }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-8 has-text-centered">
              <div v-if="hasSelect" class="card is-card-binnacle">
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          {{ binaccleSelect.number }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="editBinnacle"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteBinnacle"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-content">
                  <div>
                    <div class="divider">
                      <p>Datos generales</p>
                    </div>
                    <p>
                      <strong>Estado actual de la bitácora:</strong>
                      {{ binaccleSelect.status | statusBinnacle }}
                    </p>
                    <p><strong>Fecha:</strong> {{ binaccleSelect.date }}</p>
                    <p>
                      <strong>Hora de inicio:</strong>
                      {{ binaccleSelect.hour_init | getTime }}
                    </p>
                    <p>
                      <strong>Hora de finalización</strong>
                      {{ binaccleSelect.hour_end | getTime }}
                    </p>
                  </div>
                  <div class="divider">
                    <p>Vehículos</p>
                  </div>
                  <div>
                    <div
                      v-if="
                        binaccleSelect.list_vehicle &&
                          binaccleSelect.list_vehicle.length > 0
                      "
                    >
                      <p class="subtitle">
                        Vehículos:
                      </p>
                      <div
                        v-for="vehicle in binaccleSelect.list_vehicle"
                        :key="vehicle.idvehicle"
                      >
                        <b-taglist attached class="m-2">
                          <b-tag type="is-light">
                            {{ vehicle.number }}
                          </b-tag>
                          <b-tag type="is-info">
                            {{ vehicle.model }} - {{ vehicle.brand }}
                          </b-tag>
                        </b-taglist>
                      </div>
                    </div>
                    <div v-else>
                      No hay vehiculos asociados
                    </div>
                  </div>
                  <div class="divider">
                    <p>Participantes</p>
                  </div>
                  <div>
                    <div
                      v-if="
                        binaccleSelect.participants &&
                          binaccleSelect.participants.length > 0
                      "
                    >
                      <p class="subtitle">
                        Participantes:
                      </p>
                      <div
                        v-for="participant in binaccleSelect.participants"
                        :key="participant.idparticipant"
                        class="has-text-centered"
                      >
                        <p>{{ participant.name }} {{ participant.lastname }}</p>
                      </div>
                    </div>
                    <div v-else>
                      No hay participantes asociados
                    </div>
                  </div>
                  <div class="divider">
                    <p>Coordenadas</p>
                  </div>
                  <div>
                    <div v-if="binaccleSelect.coordinates_binnacle">
                      <div class="columns">
                        <div class="column is-3">
                          <div
                            v-for="coordinate in binaccleSelect.coordinates_binnacle"
                            :key="coordinate.idcoordinates"
                          >
                            <b-tag class="m-2" @click="viewPoint(coordinate)">
                              {{ coordinate.name }}
                            </b-tag>
                          </div>
                        </div>
                        <div class="column is-9">
                          <vl-map
                            :load-tiles-while-animating="true"
                            :load-tiles-while-interacting="true"
                            data-projection="EPSG:4326"
                            style="height: 400px"
                          >
                            <vl-view
                              :zoom="zoom"
                              :center.sync="point"
                              :rotation="rotation"
                            />

                            <vl-layer-tile id="osm">
                              <vl-source-osm />
                            </vl-layer-tile>

                            <vl-feature
                              id="point"
                              :properties="{ prop: 'value', prop2: 'value' }"
                            >
                              <vl-geom-point :coordinates="point" />
                            </vl-feature>
                          </vl-map>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      sd No hay coordenadas asociadas
                    </div>
                  </div>
                  <div class="divider">
                    <p>Evidencias</p>
                  </div>
                  <div>
                    <div
                      v-if="
                        binaccleSelect.list_image &&
                          binaccleSelect.list_image.length > 0
                      "
                    >
                      <b-carousel :indicator-inside="false">
                        <b-carousel-item
                          v-for="item in binaccleSelect.list_image"
                          :key="item.idimage"
                        >
                          <b-image class="image" :src="item.path" />
                        </b-carousel-item>
                        <template #indicators="props">
                          <b-image
                            class="al image"
                            :src="props.path"
                            :title="props.description"
                          />
                        </template>
                      </b-carousel>
                    </div>
                    <div v-else>
                      No hay evidencias
                    </div>
                  </div>
                </div>

              </div>
              <div v-else>
                <p>Selecciona un registro para ver su información</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-opinion
      :active-modal="isActiveOT"
      @close="isActiveOT = false"
      @create="refresh"
    />
  </section>
  -->
  <div id="map" class="columns">
    <b-loading
      v-model="isLoadingData"
      :is-full-page="true"
      :can-cancel="false"
    />
    <div class="column is-4">
      <section class="m-2 has-text-centered">
        <b-button
          label="Nueva opinión técnica"
          type="is-light"
          @click="activeModal = true"
        />
      </section>
      <div class="columns m-2 binnalces">
        <div v-if="data.length > 0" class="column">
          <div v-for="technicalOp in data" :key="technicalOp.idtechnical_opinion">
            <div class="card">
              <div class="card-header">
                <div class="level m-1 full-w">
                  <div class="level-left">
                    <div class="level-item">
                      <p>{{ technicalOp.number }}</p>
                    </div>
                    <div class="level-item">
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <b-button
                        type="is-info is-light"
                        icon-right="eye-outline"
                        @click="viewTechOp(technicalOp)"
                      />
                    </div>
                    <div class="level-item">
                      <b-button
                        type="is-danger is-light"
                        icon-right="delete-empty-outline"
                        @click="deleteOp(technicalOp)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-content" @click="viewInMap(technicalOp.idtechnical_opinion)">
                <p>
                  <strong>Motivo de solicitud: </strong>
                  {{
                    technicalOp.request_motive ? technicalOp.request_motive : 'Sin motivo de solicitud'
                  }}
                </p>
                <br>
                <p>
                  <strong>Descripción de motivo: </strong>
                  {{
                    technicalOp.motive_description ? technicalOp.motive_description : 'Sin descripción'
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="column has-text-centered">
          <p>Sin registros</p>
        </div>
      </div>
    </div>
    <div class="column is-8">
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height: 100%"
      >
        <vl-view
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"
        />

        <vl-layer-tile>
          <vl-source-osm />
        </vl-layer-tile>

        <vl-feature v-if="viewOp">
          <vl-geom-multi-point :coordinates="temporalPoints" />
        </vl-feature>

        <vl-layer-vector>
          <vl-source-vector :features.sync="features" />
        </vl-layer-vector>
      </vl-map>
    </div>
    <new-opinion
      :active-modal="activeModal"
      @close="updateView"
      @save="updateView"
    />
    <view-opinion
      :active-modal="activeViewModal"
      :object-tech="techOpSelect"
      @close="updateView"
    />
    <!--
    <new-binnacle
      :active-modal="activeModal"
      :plannification="null"
      :is-extraordinary="true"
      @close="updateView"
      @save="updateView"
    />
    <view-binnacle
      :active-modal="activeViewModal"
      :binnacle-object="binnacleSelect"
      :disable-form="true"
      @close="updateView"
    />
    <b-notification
      v-model="downloadFile"
      type="is-info is-light"
      :closable="false"
    >
      Descargando bitácora
    </b-notification>
    -->
  </div>
</template>

<script>
/*
export default {
  name: 'TechnicalOp',
  data () {
    return {
      isActiveOT: false,
      hasEdit: false,
      idBinnacle: '',
      isActiveEdit: false,
      hasSelect: false,
      binnacleSelect: {},
      vehicles: [],
      participants: [],
      filteredParticipants: [],
      binnacles: [],
      isActive: false,
      zoom: 12,
      center: [0, 0],
      point: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      options: [
        {
          label: 'Finalizado',
          value: 'success'
        },
        {
          label: 'En proceso',
          value: 'warning'
        },
        {
          label: 'Programado',
          value: 'info'
        },
        {
          label: 'Sin estado',
          value: null
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        const res = await this.$store.dispatch('modules/technicalOp/getTechnicalOps')
        this.binnacles = res
        // console.log(res)
      } catch (error) {
        // console.log(error)
      }
    },
    refresh () {
      this.isActive = false
      this.isActiveEdit = false
      this.idBinnacle = ''
      this.binnacleSelect = {}
      this.getData()
    },
    editBinnacle () {
      this.isActiveEdit = true
    },
    async deleteBinnacle () {
      try {
        if (this.plan.binnacles_deleted) {
          this.plan.binnacles_deleted.push(
            this.plan.binnacles[this.indexBinnacle]
          )
        } else {
          this.plan.binnacles_deleted = [
            this.plan.binnacles[this.indexBinnacle]
          ]
        }
        await this.$store.dispatch(
          'modules/plans/createOrUpdatePlan',
          this.plan
        )
        this.$buefy.toast.open({
          message: '¡Bitácora eliminada!',
          type: 'is-success'
        })
        this.hasSelect = false
        this.binnacleSelect = {}
        this.refresh()
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente más tarde',
          type: 'is-danger'
        })
        // console.log(error)
      }
    },
    viewOp (binnacle, index) {
      this.hasSelect = false
      this.binnacleSelect = {}
      this.hasSelect = true
      this.binaccleSelect = binnacle
      this.idBinnacle = binnacle.idbinnacle
      // console.log(this.binaccleSelect)
      this.indexBinnacle = index
    },
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
      } catch (error) {
        // console.log(error)
      }
    },
    async updateStatus () {
      try {
        await this.$store.dispatch(
          'modules/plans/createOrUpdatePlan',
          this.plan
        )
        this.$buefy.toast.open({
          message: '¡Estado actualizado!',
          type: 'is-success'
        })
      } catch (error) {
        // console.log(error)
      }
    },
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.participants = res
      } catch (error) {
        // console.log(error)
      }
    },
    filterData (text) {
      this.filteredParticipants = this.participants.filter((option) => {
        if (option.name.toString().toLowerCase().includes(text.toLowerCase())) {
          return option
        }
      })
    },
    cancelEdit () {
      this.hasEdit = false
      this.hasSelect = false
      this.refresh()
    },
    saveEdit () {
      // console.log(this.binnacleSelect)
    },
    viewPoint (point) {
      this.point = [point.x, point.y]
    },
    async deletePlan () {
      try {
        // console.log(this.plan)
        await this.$store.dispatch('modules/plans/deletePlan', this.plan)
        this.$buefy.toast.open({
          message: '¡Planificación eliminada!',
          type: 'is-success'
        })
        this.$router.push('/calendar')
      } catch (error) {
        // console.log(error)
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente más tarde',
          type: 'is-danger'
        })
      }
    }
  }
}
*/
import data from '../../assets/cuxtalPoligono.json'
// eslint-disable-next-line
const utm = require('utm')

export default {
  name: 'TechnicalOp',
  data () {
    return {
      isLoadingData: false,
      activeModal: false,
      data: [],
      viewOp: false,
      temporalPoints: [],
      activeViewModal: false,
      techOpSelect: {},
      zoom: 12,
      center: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: data
          }
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        this.isLoadingData = true
        this.data = await this.$store.dispatch('modules/technicalOp/getTechnicalOps')
        this.isLoadingData = false
      } catch (error) {
        // console.log(error)
      } finally {
        this.isLoadingData = false
      }
    },
    async getOp (id) {
      try {
        const res = await this.$store.dispatch('modules/technicalOp/getInfoTechnicalOp', id)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    updateView () {
      this.activeModal = false
      this.activeViewModal = false
      this.techOpSelect = {}
      this.getData()
    },
    viewTechOp (object) {
      this.techOpSelect = object
      this.activeViewModal = true
    },
    async deleteOp (techOp) {
      try {
        await this.$store.dispatch('modules/technicalOp/deleteTechnicalOp', techOp)
        this.$buefy.notification.open({
          message: 'Opinión técnica eliminada',
          duration: 2500,
          position: 'is-bottom-right',
          type: 'is-success',
          hasIcon: true
        })
        this.getData()
      } catch (error) {
        // console.log(error)
      }
    },
    // Visualizar una bitácora en el mapa
    async viewInMap (option) {
      this.viewTechOp = false
      this.temporalPoints = [[-89.60984537598705, 20.85610769792424]]
      const techOp = await this.getOp(option)
      techOp.points = []
      if (techOp.list_coordinates && techOp.list_coordinates.length > 0) {
        const temporalPoints = techOp.list_coordinates
        temporalPoints.forEach((object) => {
          const point = [object.x, object.y]
          const pointConvert = this.convertCoordinatesToUtm(point)
          techOp.points.push(pointConvert)
        })
        this.temporalPoints = techOp.points
        this.viewTechOp = true
      } else {
        this.$buefy.notification.open({
          message: 'La opinión técnica no contiene coordenadas.',
          duration: 2500,
          position: 'is-bottom-right',
          type: 'is-warning',
          hasIcon: true
        })
      }
    },
    convertCoordinatesToUtm (coords) {
      // console.log(coords)
      const latLng = utm.toLatLon(coords[0], coords[1], '16', 'T')
      return [latLng.longitude, latLng.latitude]
    }
  }
}
</script>

<style>
.full-w {
  width: 100% !important;
}

.binnalces {
  height: 650px;
  overflow-y: scroll;
}

#map {
  min-height: 75vh;
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
</style>
