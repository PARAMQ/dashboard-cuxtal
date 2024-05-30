<template>
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
      <section class="m-2 has-text-centered">
        <b-field label="Buscar opinión técnica por folio">
          <b-autocomplete
            placeholder="Ejemplo: 1234"
            :data="techOpFilter"
            :clearable="clearable"
            @typing="filterTechOp"
            @select="(option) => viewTechOp(option)"
          >
            <template slot-scope="props">
              <div class="media">
                <div class="media-content">
                  <h1>{{ props.option.folium }}</h1>
                </div>
              </div>
            </template>
          </b-autocomplete>
        </b-field>
      </section>
      <section class="m-2 has-text-centered">
        <b-button @click="openModalFilter = true">Filtrar por mes y año</b-button>
        <month-picker-filter
          :is-open="openModalFilter"
          @close="openModalFilter = false"
          @getData="getDataFilter"
        />
      </section>
      <div class="columns m-2 binnalces">
        <div v-if="data.length > 0" class="column">
          <div v-for="technicalOp in techOpFilter" :key="technicalOp.idtechnical_opinion">
            <div class="card">
              <div class="card-header">
                <div class="level m-1 full-w">
                  <div class="level-left">
                    <div class="level-item">
                      <p>Folio: {{ technicalOp.folium }}</p>
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
                    <!--
                    <div class="level-item">
                      <b-button
                        type="is-success is-light"
                        icon-right="pencil"
                        @click="editTechOp(technicalOp)"
                      />
                    </div>
                    -->
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
              <div class="card-content" @click="viewInMap(technicalOp.list_coordinates)">
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
          <vl-style>
            <vl-style-circle :radius="5">
              <vl-style-fill color="red" />
              <vl-style-stroke color="red" />
            </vl-style-circle>
          </vl-style>
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
    <edit-opinion
      :active-modal="activeEditModal"
      :object-tech="techOpSelect"
      @close="updateView"
      @update="updateView"
    />
  </div>
</template>

<script>
import data from '../../assets/cuxtalPoligono.json'
// eslint-disable-next-line
const utm = require('utm')

export default {
  name: 'TechnicalOp',
  data () {
    return {
      openModalFilter: false,
      isLoadingData: false,
      activeModal: false,
      data: [],
      techOpFilter: [],
      viewOp: false,
      temporalPoints: [],
      activeViewModal: false,
      activeEditModal: false,
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
        const temporal = this.data.map((x) => {
          x.application_date = new Date(x.application_date)
          return x
        })
        temporal.sort((a, b) => b.application_date - a.application_date)
        this.techOpFilter = temporal
        this.isLoadingData = false
      } catch (error) {
        // // console.log(error)
      } finally {
        this.isLoadingData = false
      }
    },
    async getDataFilter (month, year) {
      try {
        this.isLoadingData = true
        this.data = await this.$store.dispatch('modules/technicalOp/getTechnicalOps')
        const temporal = this.data.filter((x) => {
          x.application_date = new Date(x.application_date)
          if (x.application_date.getFullYear() === year && x.application_date.getMonth() === month) {
            return x
          }
        })
        if (temporal.length > 0) {
          temporal.sort((a, b) => b.application_date - a.application_date)
          this.techOpFilter = temporal
        } else {
          this.techOpFilter = temporal
        }
        this.openModalFilter = false
        this.isLoadingData = false
      } catch (error) {
        // // console.log(error)
      } finally {
        this.isLoadingData = false
      }
    },
    async getOp (id) {
      try {
        const res = await this.$store.dispatch('modules/technicalOp/getInfoTechnicalOp', id)
        return res
      } catch (error) {
        // console.log(error)
      }
    },
    filterTechOp (text) {
      if (text && text.length > 0) {
        this.techOpFilter = this.data.filter((x) => {
          if (x.folium.toUpperCase().includes(text.toUpperCase())) {
            // console.log(x)
            return x
          }
        })
      } else {
        this.techOpFilter = this.data
      }
    },
    updateView () {
      this.activeModal = false
      this.activeViewModal = false
      this.activeEditModal = false
      this.zoom = 12
      this.center = [-89.60984537598705, 20.85610769792424]
      this.rotation = 0
      this.techOpSelect = {}
      this.getData()
    },
    viewTechOp (object) {
      this.techOpSelect = object
      this.activeViewModal = true
    },
    editTechOp (object) {
      this.techOpSelect = object
      this.activeEditModal = true
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
        // // console.log(error)
      }
    },
    // Visualizar una bitácora en el mapa
    viewInMap (coords) {
      this.viewOp = false
      this.temporalPoints = [[-89.60984537598705, 20.85610769792424]]
      // const techOp = await this.getOp(option)
      const points = []
      if (coords && coords.length > 0) {
        const temporalPoints = coords
        temporalPoints.forEach((object) => {
          const point = [object.x, object.y]
          const pointConvert = this.convertCoordinatesToUtm(point)
          points.push(pointConvert)
        })
        this.temporalPoints = points
        // console.log(this.temporalPoints)
        this.viewOp = true
        // console.log(this.viewOp)
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
      // // console.log(coords)
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
