<template>
  <div id="map" class="columns">
    <b-loading v-model="isLoadingBinnacles" :is-full-page="true" :can-cancel="false" />
    <div class="column is-4">
      <section class="m-2 has-text-centered">
        <b-tooltip
          label="Crea una nueva bitácora sin la necesidad de un recorrido"
          position="is-right"
        >
          <b-button label="Nueva bitácora extraordinaria" type="is-light" />
        </b-tooltip>
      </section>
      <div class="columns m-2 binnalces">
        <div class="column">
          <div v-for="bitacora in binnacles" :key="bitacora.id">
            <div class="card">
              <div class="card-header">
                <div class="level m-1 full-w">
                  <div class="level-left">
                    <div class="level-item">
                      <p>{{ bitacora.number }}</p>
                    </div>
                  </div>
                  <div class="level-right">
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
                        v-else-if="bitacora.status === 'sin-revisar'"
                        label="En revisión"
                        position="is-left"
                      >
                        <b-icon
                          icon="clock"
                          size="is-small"
                          type="is-light"
                        />
                      </b-tooltip>
                      <b-tooltip
                        v-else
                        label="Sin estado"
                        position="is-left"
                      >
                        <b-icon
                          icon="alert"
                          size="is-small"
                          type="is-danger"
                        />
                      </b-tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-content">
                <p><strong>Fecha: </strong> {{ bitacora.date ? bitacora.date : 'No hay fecha registrada' }}</p>
                <br>
                <p><strong>Relatoría: </strong> {{ bitacora.rapporteur ? bitacora.rapporteur : 'No hay relatoría' }}</p>
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

        <vl-geoloc @update:position="geolocPosition = $event">
          <template #default="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position" />
              <vl-style-box>
                <vl-style-icon
                  src="_media/marker.png"
                  :scale="0.4"
                  :anchor="[0.5, 1]"
                />
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm />
        </vl-layer-tile>
      </vl-map>
    </div>
    <new-binnacle
      :active-modal="false"
      :id-plan="1"
      :id-binnacle="1"
      :is-extraordinary="true"
    />
  </div>
</template>

<script>
export default {
  name: 'Binnacle',
  data () {
    return {
      activeModal: false,
      isActive: false,
      isLoadingBinnacles: false,
      binnacles: [],
      dateSelect: new Date(),
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
      arrayCoordinates: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    openModal () {
      this.isActive = true
    },
    async getData () {
      try {
        this.isLoadingBinnacles = true
        this.binnacles = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        this.getCoordinates(this.binnacles)
        this.isLoadingBinnacles = false
      } catch (error) {
        console.log(error)
      }
    },
    getCoordinates (binnacles) {
      binnacles.map((x) => {
        console.log(x.coordinates_binnacle)
      })
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
