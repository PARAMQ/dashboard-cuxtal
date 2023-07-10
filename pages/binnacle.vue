<template>
  <div id="map" class="columns">
    <div class="column is-4">
      <p>Bitacoras</p>
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
      geolocPosition: undefined
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
        this.isLoadingBinnacles = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
#map {
  min-height: 75vh;
}
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
</style>
