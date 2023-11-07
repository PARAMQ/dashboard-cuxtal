<template>
  <div id="map" class="columns">
    <b-loading
      v-model="isLoadingBinnacles"
      :is-full-page="true"
      :can-cancel="false"
    />
    <div class="column is-4">
      <section class="m-2 has-text-centered">
        <b-tooltip
          label="Crea una nueva bitácora sin la necesidad de un recorrido"
          position="is-right"
        >
          <b-button
            label="Nueva bitácora extraordinaria"
            type="is-light"
            @click="activeModal = true"
          />
        </b-tooltip>
      </section>
      <div class="columns m-2 binnalces">
        <div class="column">
          <div v-for="bitacora in binnacles" :key="bitacora.idbinnacle">
            <div class="card">
              <div class="card-header">
                <div class="level m-1 full-w">
                  <div class="level-left">
                    <div class="level-item">
                      <p>{{ bitacora.number }}</p>
                    </div>
                    <!--
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
                    -->
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <b-button
                        type="is-info is-light"
                        icon-right="eye-outline"
                        @click="openBinnacle(bitacora)"
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
    <edit-binnacle
      :active-modal="activeEditModal"
      :binnacle-object="binnacleSelect"
      @close="updateView"
      @save="updateView"
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
import data from '../assets/cuxtalPoligono.json'
// eslint-disable-next-line
const utm = require('utm')

export default {
  name: 'Binnacle',
  data () {
    return {
      activeModal: false,
      activeViewModal: false,
      activeEditModal: false,
      downloadFile: false,
      idBinnacle: '',
      binnacleSelect: {},
      isActive: false,
      isLoadingBinnacles: false,
      binnacles: [],
      dateSelect: new Date(),
      zoom: 12,
      center: [-89.60984537598705, 20.85610769792424],
      viewBinnacle: false,
      temporalPoints: [[-89.60984537598705, 20.85610769792424]],
      rotation: 0,
      geolocPosition: undefined,
      arrayCoordinates: [],
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
  created () {
    this.getData()
  },
  methods: {
    // Metodos generales
    openModal () {
      this.isActive = true
    },
    updateView () {
      this.activeViewModal = false
      this.activeEditModal = false
      this.activeModal = false
      this.getData()
    },
    openBinnacle (binnacle) {
      this.binnacleSelect = binnacle
      this.activeViewModal = true
    },
    editBinnacle (binnacle) {
      this.binnacleSelect = binnacle
      this.activeEditModal = true
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
        this.getData()
      } catch (error) {
        // console.log(error)
      }
    },
    // Obtener todas las bitacoras
    async getData () {
      try {
        this.isLoadingBinnacles = true
        this.binnacles = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        // \this.getCoordinates(this.binnacles)
        this.isLoadingBinnacles = false
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
    // Obtener archivo Word
    async getWord (binnacle, name) {
      try {
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
        this.downloadFile = false
      } catch (error) {
        this.downloadFile = false
        // console.log(error)
      } finally {
        this.downloadFile = false
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
