// eslint-disable-next-line vue/valid-template-root
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
          label="Nueva denuncia"
          type="is-light"
          @click="activeModal = true"
        />
      </section>
      <section class="m-2 has-text-centered">
        <b-field label="Buscar denuncia por folio">
          <b-autocomplete
            placeholder="Ejemplo:  ZSCE-RC/DEN-001/2001"
            :data="complaintFilter"
            :clearable="clearable"
            @typing="filterComplaint"
            @select="(option) => viewRegister(option)"
          >
            <template slot-scope="props">
              <div class="media">
                <div class="media-content">
                  <h1>{{ props.option.code }}</h1>
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
          <div v-for="complaint in complaintFilter" :key="complaint.idcomplaint">
            <div class="card">
              <div class="card-header">
                <div class="level m-1 full-w">
                  <div class="level-left">
                    <div class="level-item">
                      <p>Código: {{ complaint.code }}</p>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <b-button
                        type="is-info is-light"
                        icon-right="eye-outline"
                        @click="viewRegister(complaint)"
                      />
                    </div>
                    <div class="level-item">
                      <b-button
                        type="is-danger is-light"
                        icon-right="delete-empty-outline"
                        @click="deleteComplaint(complaint)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-content" @click="viewInMap(complaint.complaint_coordinates)">
                <p>
                  <strong>Denuncia presentada ante: </strong>
                  {{
                    complaint.dependence ? complaint.dependence.description : 'Sin descripción'
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

        <vl-feature v-if="activatePoints">
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
    <new-incident
      :active-modal="activeModal"
      @close="updateView"
      @save="updateView"
    />
    <view-incident
      :active-modal="activeViewModal"
      :incident-object="complaint"
      @close="updateView"
      @save="updateView"
    />
  </div>
</template>

<script>
import data from '../../assets/cuxtalPoligono.json'
// eslint-disable-next-line
const utm = require('utm')

export default {
  name: 'Complaint',
  data () {
    return {
      openModalFilter: false,
      isLoadingData: false,
      activeModal: false,
      data: [],
      complaintFilter: [],
      complaint: {},
      viewPoints: false,
      activatePoints: false,
      activeViewModal: false,
      dependences: [],
      temporalPoints: [],
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
    this.getDependences()
  },
  methods: {
    async getData () {
      try {
        this.isLoadingData = true
        this.data = await this.$store.dispatch('modules/complaint/getComplaints')
        const complaints = this.data.map((object) => {
          const dependence = this.dependences.find(x => x.idcoordination === object.iddepto)
          object.dependence = dependence
          return object
        })
        // // console.log(complaints)
        this.data = complaints
        this.complaintFilter = complaints
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
        this.data = await this.$store.dispatch('modules/complaint/getComplaints')
        const complaints = this.data.filter((object) => {
          object.date_reception = new Date(object.date_reception)
          if (object.date_reception.getFullYear() === year && object.date_reception.getMonth() === month) {
            const dependence = this.dependences.find(x => x.idcoordination === object.iddepto)
            object.dependence = dependence
            return object
          }
        })
        if (complaints.length > 0) {
          complaints.sort((a, b) => b.date_reception - a.date_reception)
          this.data = complaints
          this.complaintFilter = complaints
        } else {
          this.data = []
          this.complaintFilter = []
        }
        this.openModalFilter = false
        this.isLoadingData = false
      } catch (error) {
        // // console.log(error)
      } finally {
        this.isLoadingData = false
      }
    },
    filterComplaint (text) {
      if (text && text.length > 0) {
        this.complaintFilter = this.data.filter((x) => {
          if (x.code.toUpperCase().includes(text.toUpperCase())) {
            return x
          }
        })
      } else {
        this.complaintFilter = this.data
      }
    },
    viewRegister (object) {
      this.complaint = object
      this.activeViewModal = true
    },
    updateView () {
      this.activeModal = false
      this.activeViewModal = false
      this.complaint = {}
      this.getData()
    },
    async getComplaint (id) {
      try {
        const res = await this.$store.dispatch('modules/complaint/getInfoComplaint', id)
        return res
      } catch (error) {
        // console.log(error)
      }
    },
    async deleteComplaint (complaint) {
      try {
        await this.$store.dispatch('modules/complaint/deleteComplaint', complaint)
        this.$buefy.notification.open({
          message: 'denuncia eliminada',
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
      /*
      this.viewComplaint = false
      this.temporalPoints = [[-89.60984537598705, 20.85610769792424]]
      const complaint = await this.getComplaint(option)
      complaint.points = []
      */
      this.activatePoints = false
      this.viewPoints = false
      if (coords && coords.length > 0) {
        const temporalPoints = coords
        const points = []
        temporalPoints.forEach((object) => {
          const point = [object.x, object.y]
          const pointConvert = this.convertCoordinatesToUtm(point)
          points.push(pointConvert)
        })
        this.temporalPoints = points
        this.viewPoints = true
        this.activatePoints = true
        // console.log(this.temporalPoints)
      } else {
        this.$buefy.notification.open({
          message: 'La denuncia no contiene coordenadas.',
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
    },
    async getDependences () {
      try {
        this.dependences = await this.$store.dispatch(
          'modules/coordinations/getCoordinations'
        )
        // // // console.log(this.dependences)
      } catch (error) {
        // // console.log(error)
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
