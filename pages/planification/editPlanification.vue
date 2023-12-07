<template>
  <!--
  <section class="hero is-cuxtal">
    <div v-if="!hasEdit" class="cont">
      <div class="card is-principal m-2">
        <div class="card-header">
          <div class="card-header-title">
            <p class="subtitle">
              Recorrido del <strong>{{ plan.start_date }}</strong> al <strong>{{ plan.end_date }}</strong>
            </p>
          </div>
        </div>
        <div class="card-content">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <b-select v-model="plan.estatus">
                  <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </b-select>
              </div>
              <div class="level-item">
                <b-button
                  size="is-small"
                  type="is-success is-light"
                  icon-right="content-save"
                  @click="updateStatus"
                />
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-button @click="isActive = true">
                  Nueva bitácora
                </b-button>
              </div>
              <div class="level-item">
                <b-button type="is-danger" @click="deletePlan">
                  Eliminar recorrido
                </b-button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p class="subtitle">
                      Bitácoras
                    </p>
                  </div>
                </div>
                <div class="card-content scroll">
                  <div
                    v-for="(binnacle, index) in plan.binnacles"
                    :key="binnacle.idbinnacle"
                    class="container"
                  >
                    <div class="card" @click="viewBinnacle(binnacle, index)">
                      <div class="card-content">
                        <p><strong>Folio:</strong> {{ binnacle.number }}</p>
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
                    <div class="level-right m-1">
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
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="file-word"
                          @click="getWord"
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
                      <strong>Estado actual de la bitácora:</strong> {{ binaccleSelect.status | statusBinnacle }}
                    </p>
                    <p>
                      <strong>Fecha:</strong> {{ binaccleSelect.date }}
                    </p>
                    <p>
                      <strong>Hora de inicio:</strong> {{ binaccleSelect.hour_init | getTime }}
                    </p>
                    <p>
                      <strong>Hora de finalización</strong> {{ binaccleSelect.hour_end | getTime }}
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
                          <b-tag
                            type="is-info"
                          >
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
                        <b-carousel-item v-for="item in binaccleSelect.list_image " :key="item.idimage">
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
                <p>Selecciona una bitácora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <new-binnacle
      :active-modal="isActive"
      :plannification="idPlanification"
      :is-extraordinary="false"
      @save="refresh"
      @close="refresh"
    />
    <edit-binnacle
      :active-modal="isActiveEdit"
      :binnacle-object="binaccleSelect"
      :is-extraordinary="false"
      @save="refresh"
      @close="refresh"
    />
  </section>
  -->
  <div class="container">
    <div class="section">
      <div class="columns">
        <div class="column">
          <strong>Fecha de inicio: </strong>{{ plan.start_date | shortDate }}
          <br>
          <strong>Fecha de finalización: </strong>{{ plan.end_date | shortDate }}
        </div>
        <div class="column">
          <strong>Estado del recorrido: </strong> {{ plan.estatus && plan.estatus === 'process' ? 'En proceso' : (plan.estatus && plan.estatus === 'finally' ? 'Finalizado' : (plan.estatus && plan.estatus === 'active' ? 'Por comenzar' : 'Sin estado' ) ) }}
        </div>
        <div class="column">
          <nav class="level">
            <div class="level-left">
              <div>
                <b-label label="Cambiar estado del recorrido">
                  <b-select v-model="plan.estatus">
                    <option
                      v-for="option in options"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </b-select>
                </b-label>
              </div>
              <div>
                <b-button
                  size="is-small"
                  type="is-success is-light"
                  icon-right="content-save"
                  @click="updateStatus"
                />
              </div>
            </div>
            <div class="level-right"></div>
          </nav>
        </div>
        <div class="column">
          <b-button
            label="Nueva bitácora"
            type="is-light"
            @click="activeModal = true"
          />
        </div>
      </div>
    </div>
    <div id="map" class="columns">
      <b-loading
        v-model="isLoadingBinnacles"
        :is-full-page="true"
        :can-cancel="false"
      />
      <div class="column is-4">
        <div class="columns m-2">
          <div class="column">
            <div v-for="bitacora in plan.binnacles" :key="bitacora.idbinnacle">
              <div class="card">
                <div class="card-header">
                  <div class="level m-1 full-w">
                    <div class="level-left">
                      <div class="level-item">
                        <p>{{ bitacora.number }}</p>
                      </div>
                      <div class="level-item">
                        <b-tooltip
                          v-if="bitacora.status === 'revisado'"
                          label="Revisado"
                          position="is-left"
                        >
                          <b-icon
                            icon="check-circle"
                            size="is-small"
                            type="is-success"
                          />
                        </b-tooltip>
                        <b-tooltip
                          v-else-if="bitacora.status === 'en-revision'"
                          label="En revisión"
                          position="is-left"
                        >
                          <b-icon
                            icon="clock"
                            size="is-small"
                            type="is-warning"
                          />
                        </b-tooltip>
                        <b-tooltip
                          v-else-if="bitacora.status === 'por-revisar'"
                          label="Por revisar"
                          position="is-left"
                        >
                          <b-icon icon="clock" size="is-small" type="is-light" />
                        </b-tooltip>
                        <b-tooltip v-else label="Sin estado" position="is-left">
                          <b-icon icon="alert" size="is-small" type="is-danger" />
                        </b-tooltip>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <b-button
                          type="is-info is-light"
                          icon-right="eye-outline"
                          @click="viewBinnalceObject(bitacora)"
                        />
                      </div>
                      <!--
                      <div class="level-item">
                        <b-button
                          type="is-link is-light"
                          icon-right="pencil"
                          @click="editBinnacle(bitacora)"
                        />
                      </div>
                      -->
                      <div class="level-item">
                        <b-button
                          type="is-danger is-light"
                          icon-right="delete-empty-outline"
                          @click="deleteBinnacle(bitacora.idbinnacle)"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          type="is-success is-light"
                          icon-right="file-word"
                          @click="getWord(bitacora.idbinnacle, bitacora.number)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content" @click="viewInMap(bitacora.idbinnacle)">
                  <p>
                    <strong>Fecha: </strong>
                    {{
                      bitacora.date ? bitacora.date : 'No hay fecha registrada'
                    }}
                  </p>
                  <br>
                  <p>
                    <strong>Relatoría: </strong>
                    {{
                      bitacora.rapporteur
                        ? bitacora.rapporteur
                        : 'No hay relatoría'
                    }}
                  </p>
                </div>
                <div class="m-2">
                  <p class="has-text-grey">
                    {{ bitacora.isextraordinary ? 'Bitácora extraordinaria' : 'Bitácora relacionada a un recorrido programado' }}
                  </p>
                </div>
              </div>
            </div>
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
          <vl-feature
            v-if="viewBinnacle"
          >
            <vl-geom-multi-point :coordinates="temporalPoints" />
          </vl-feature>
          <vl-layer-vector>
            <vl-source-vector :features.sync="features" />
          </vl-layer-vector>
        </vl-map>
      </div>
    </div>

    <view-binnacle
      :active-modal="activeViewModal"
      :binnacle-object="binnacleSelect"
      :disable-form="true"
      @close="refresh"
    />

    <new-binnacle
      :active-modal="activeModal"
      :plannification="idPlanification"
      :is-extraordinary="false"
      @close="refresh"
      @save="refresh"
    />

    <b-notification
      v-model="downloadFile"
      type="is-info is-light"
      :closable="false"
    >
      Descargando bitácora
    </b-notification>
  </div>
</template>

<script>
import data from '../../assets/cuxtalPoligono.json'
// eslint-disable-next-line
const utm = require('utm')

export default {
  name: 'EditPlanification',
  data () {
    return {
      idPlanification: this.$route.query.id,
      isLoadingBinnacles: false,
      downloadFile: false,
      activeViewModal: false,
      activeModal: false,
      plan: {},
      hasEdit: false,
      indexBinnacle: 0,
      idBinnacle: '',
      binnacleSelect: {},
      viewBinnacle: false,
      zoom: 12,
      center: [-89.60984537598705, 20.85610769792424],
      temporalPoints: [[-89.60984537598705, 20.85610769792424]],
      rotation: 0,
      geolocPosition: undefined,
      arrayCoordinates: [],
      options: [
        {
          label: 'En proceso',
          value: 'process'
        },
        {
          label: 'Finalizado',
          value: 'finally'
        },
        {
          label: 'Por comenzar',
          value: 'active'
        }
      ],
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
  created () {},
  mounted () {
    this.getPlan()
  },
  methods: {
    async getPlan () {
      try {
        this.isLoadingBinnacles = true
        const res = await this.$store.dispatch(
          'modules/plans/readPlan',
          this.idPlanification
        )
        this.plan = res
        this.isLoadingBinnacles = false
      } catch (error) {
        this.isLoadingBinnacles = false
        // console.log(error)
      } finally {
        this.isLoadingBinnacles = false
      }
    },
    refresh () {
      this.activeModal = false
      this.activeViewModal = false
      this.binnacleSelect = {}
      this.plan = {}
      this.getPlan()
    },
    editBinnacle () {
    },
    async deleteBinnacle (binnacle) {
      try {
        const data = {
          idbinnacle: binnacle
        }
        await this.$store.dispatch('modules/binnacles/deleteBinnacle', data)
        this.$buefy.notification.open({
          message: 'Bitácora eliminada',
          duration: 2500,
          position: 'is-bottom-right',
          type: 'is-success',
          hasIcon: true
        })
        this.getPlan()
      } catch (error) {
        // console.log(error)
      }
    },
    viewBinnalceObject (binnacle) {
      this.activeViewModal = true
      this.binnacleSelect = binnacle
    },
    // Obtener archivo Word
    async getWord (binnacle, name) {
      try {
        this.isLoadingBinnacles = true
        this.downloadFile = true
        const res = await this.$store.dispatch('modules/binnacles/getWordBinnacle', binnacle)
        // Ensure the response is an ArrayBuffer
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
        const blobURL = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        const secondPart = name.substring((name.length - 4), name.length)
        const firstPart = name.substring(0, (name.length - 4))
        const filename = 'bitácora_' + firstPart + '-' + secondPart + '.docx'
        link.href = blobURL
        link.setAttribute('download', filename)

        // Trigger the download
        link.click()

        // Clean up
        window.URL.revokeObjectURL(blobURL)
        this.isLoadingBinnacles = false
        this.downloadFile = false
      } catch (error) {
        this.downloadFile = false
        // console.log(error)
      } finally {
        this.downloadFile = false
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
        this.getPlan()
      } catch (error) {
        // console.log(error)
      }
    },
    // Obtener la información por bitácora
    async getBinnacle (idBinnacle) {
      try {
        const res = await this.$store.dispatch('modules/binnacles/getBinnacle', idBinnacle)
        return res
      } catch (error) {
        // console.log(error)
      }
    },
    // Visualizar una bitácora en el mapa
    async viewInMap (option) {
      this.viewBinnacle = false
      this.temporalPoints = [[-89.60984537598705, 20.85610769792424]]
      const binnacle = await this.getBinnacle(option)
      binnacle.points = []
      const temporalPoints = binnacle.coordinates_binnacle
      temporalPoints.forEach((object) => {
        const point = [object.x, object.y]
        const pointConvert = this.convertCoordinatesToUtm(point)
        binnacle.points.push(pointConvert)
        // console.log(pointConvert)
      })
      if (binnacle.points.length > 0) {
        this.temporalPoints = binnacle.points
        this.viewBinnacle = true
      } else {
        this.$buefy.notification.open({
          message: 'La bitácora no contiene coordenadas.',
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
    },
    async deletePlan () {
      try {
        // // console.log(this.plan)
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
