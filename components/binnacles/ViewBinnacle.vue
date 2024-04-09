<template>
  <b-modal v-model="activeModal" has-modal-card :can-cancel="false" full-screen>
    <b-loading v-model="isLoading" :is-full-page="false" :can-cancel="false" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ 'Bitácora ' + form.number }}
        </p>
      </header>
      <!--
      <section class="modal-card-body">
        <form>
          <div class="divider">
            <strong>Estado de la bítacora</strong>
          </div>
          <div class="columns">
            <div class="column">
              <p>
                {{ form.rapporteur ? form.rapporteur : 'No tiene relatoría' }}
              </p>
            </div>
          </div>
          <div class="divider">
            <strong>Datos generales</strong>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b-field label="Fecha">
                <b-datepicker v-model="form.date" inline :editable="false" />
                {{ form.date | shortDate }}
              </b-field>
            </div>
            <div
              class="column is-3 is-flex is-flex-direction-column is-justify-content-center has-text-centered"
            >
              <div>
                <b-field label="Hora de inicio">
                  <b-timepicker v-model="hourInit" inline />
                </b-field>
              </div>
              <br>
              <div>
                <b-field label="Hora de finalización">
                  <b-timepicker v-model="hourEnd" inline />
                </b-field>
              </div>
            </div>
            <div class="column">
              <div class="divider">
                <strong>Personal y vehiculos</strong>
              </div>
              <br>
              <b-field label="Persona que realizó el recorrido">
                <b-autocomplete
                  :data="participantsFilter"
                  icon="magnify"
                  clearable
                  field="name"
                  open-on-focus
                  @typing="filterParticipant"
                  @select="selectParticipant"
                >
                  <template #empty>
                    No hay resultados
                  </template>
                </b-autocomplete>
              </b-field>
              <b-field label="Vehículos utilizados">
                <b-taginput
                  v-model="form.list_vehicle"
                  :data="vehiclesFilter"
                  field="number"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterVehicles"
                >
                  <template v-slot="props">
                    <strong>{{ props.option.number }} -
                      {{
                        props.option.plates
                          ? props.option.plates
                          : 'sin placas reigstradas'
                      }}</strong>
                  </template>
                  <template #empty>
                    Sin resultados
                  </template>
                </b-taginput>
              </b-field>
              <b-field label="Participantes">
                <b-taginput
                  v-model="form.participants"
                  :data="participantsFilter"
                  field="name"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterParticipant"
                >
                  <template slot-scope="props">
                    <strong>{{ props.option.name }}
                      {{ props.option.lastname }}</strong>
                  </template>
                  <template #empty>
                    Sin resultados
                  </template>
                  <template #selected>
                    <b-tag
                      v-for="(tag, index) in form.participants"
                      :key="index"
                      closable
                      @close="removeParticipant(index)"
                    >
                      {{ tag.name }} {{ tag.lastname }}
                    </b-tag>
                  </template>
                </b-taginput>
              </b-field>
            </div>
          </div>
          <div class="divider">
            <strong>Vegetación y zonas</strong>
          </div>
          <div class="columns">
            <div class="column">
              <b-field label="Vegetación">
                <b-taginput
                  v-model="vegetableAffected"
                  :data="vegetationFilter"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterVegetation"
                >
                  <template v-slot="props">
                    <strong>{{ props.option.description }}</strong>
                  </template>
                  <template #empty>
                    Sin resultados
                  </template>
                </b-taginput>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Subzonificación PM">
                <b-taginput
                  v-model="form.list_subzoning"
                  :data="subZonesFilter"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterSubZones"
                >
                  <template #empty>
                    Sin resultados
                  </template>
                </b-taginput>
              </b-field>
            </div>
          </div>
          <div class="divider">
            <strong>Coordenadas</strong>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b-notification type="is-info" has-icon :closable="false">
                Ingrese las coordenadas en formato UTM.
              </b-notification>
              <div class="container">
                <b-field label="Descripción breve de la coordenada">
                  <b-input v-model="formCoord.name" />
                </b-field>
                <b-field :label="isSwitched ? 'Longitud' : 'Coordenada X'">
                  <b-numberinput
                    v-model="temporalPoint[0]"
                    step="0.000000000000000001"
                    :controls="false"
                  />
                </b-field>
                <b-field :label="isSwitched ? 'Latitud' : 'Coordenada Y'">
                  <b-numberinput
                    v-model="temporalPoint[1]"
                    step="0.000000000000000001"
                    :controls="false"
                  />
                </b-field>
              </div>
              <div class="container m-3 has-text-centered">
                <b-button type="is-success is-light" @click="addPoint">
                  Agregar coordenada
                </b-button>
                <b-button type="is-info is-light" @click="viewPoint">
                  Ver punto
                </b-button>
              </div>
              <div
                v-for="pointCoord in points"
                :key="pointCoord.name"
                class="container m-3"
              >
                <div class="control">
                  <b-tag
                    type="is-primary"
                    attached
                    aria-close-label="Close tag"
                    closable
                    @close="deletePoint"
                    @click="viewPoint(pointCoord)"
                  >
                    {{ pointCoord.name }}
                  </b-tag>
                </div>
              </div>
            </div>
            <div class="column is-8">
              <vl-map
                :load-tiles-while-animating="true"
                :load-tiles-while-interacting="true"
                data-projection="EPSG:4326"
                style="height: 400px"
              >
                <vl-view
                  :zoom.sync="zoom"
                  :center.sync="ViewPoint"
                  :rotation.sync="rotation"
                />

                <vl-layer-tile>
                  <vl-source-osm />
                </vl-layer-tile>

                <vl-feature>
                  <vl-geom-point :coordinates="ViewPoint" />
                </vl-feature>

                <vl-feature>
                  <vl-geom-multi-point :coordinates="pointsMap" />
                </vl-feature>

                <vl-layer-vector>
                  <vl-source-vector :features.sync="features" />
                </vl-layer-vector>
              </vl-map>
            </div>
          </div>
          <div class="divider">
            <strong>Evidencias</strong>
          </div>
          <div class="columns">
            <div class="column is-6">
              <section>
                <b-field>
                  <b-upload v-model="files" multiple drag-drop accept=".png">
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon icon="upload" size="is-large" />
                        </p>
                        <p>
                          Arrastra aquí tus imágenes o has click aquí para
                          subirlas.
                        </p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>
                <div v-for="(file, index) in files" :key="file" class="tags">
                  <b-tag
                    type="is-primary"
                    attached
                    aria-close-label="Borrar elemento"
                    closable
                    @close="deleteDropFile(index)"
                    @click="viewIamge(file)"
                  >
                    {{ index + 1 }} - {{ file.name }}
                  </b-tag>
                </div>
              </section>
            </div>
          </div>
          <div class="has-text-centered" style="width: 100%;">
            <b-button @click="close">Cerrar</b-button>
          </div>
        </form>
      </section>
      -->
      <section class="modal-card-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="divider">
                <strong>Estado de la bitácora</strong>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Estado de la bitácora">
                    <b-select v-model="form.status">
                      <option
                        v-for="option in estados"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="¿Fue procesado?">
                    <b-checkbox
                      v-model="form.isprocessed"
                      true-value="Si"
                      false-value="No"
                    >
                      {{ form.isprocessed }}
                    </b-checkbox>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Area (Ha)">
                    <p>
                      {{ form.ha ? form.ha : 'Hectáreas no registradas' }}
                    </p>
                  </b-field>
                </div>
                <div class="column">
                  <b-button
                    type="is-success"
                    @click="updateStatusBinnacle"
                  >
                    Guardar
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="divider">
                <strong>Relatoría</strong>
              </div>
              <div class="container">
                <p>
                  {{ form.rapporteur ? form.rapporteur : 'No tiene relatoría' }}
                </p>
              </div>
            </div>
            <div class="column">
              <div class="divider">
                <strong>Datos generales</strong>
              </div>
              <div class="container is-flex is-justify-content-center">
                <div class="columns">
                  <div class="column">
                    <b-datepicker v-model="form.date" inline />
                  </div>
                  <div class="column has-text-centered">
                    <div>
                      <b-field label="Hora de inicio">
                        <b-timepicker v-model="form.hourInit" inline />
                      </b-field>
                    </div>
                    <br>
                    <div>
                      <b-field label="Hora de finalización">
                        <b-timepicker v-model="form.hourEnd" inline />
                      </b-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="divider">
                <strong>Responsable</strong>
              </div>
              <div v-if="form.responsable" class="container">
                <p>
                  <strong>Nombre completo: </strong>{{ form.responsable.name + ' ' + form.responsable.lastname }}
                </p>
              </div>
              <div v-else class="container has-text-centered">
                <p>No se registró el responsable</p>
              </div>
            </div>
            <div class="column">
              <div class="divider">
                <strong>Participantes</strong>
              </div>
              <div v-if="form.participants.length > 0" class="container">
                <div
                  v-for="participant in form.participants"
                  :key="participant.idparticipants"
                  class="m-2"
                >
                  <b-taglist attached>
                    <b-tag type="is-light" size="is-medium">
                      {{ participant.name + ' ' + participant.lastname }}
                    </b-tag>
                    <b-tag type="is-success is-light" size="is-medium">
                      {{
                        participant.charge
                          ? participant.charge.description
                          : 'Sin cargo'
                      }}
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin participantes</p>
              </div>
            </div>
            <div class="column">
              <div class="divider">
                <strong>Vehículos</strong>
              </div>
              <div v-if="form.list_vehicle.length > 0" class="container">
                <div
                  v-for="vehicle in form.list_vehicle"
                  :key="vehicle.idvehicle"
                  class="m-2"
                >
                  <b-taglist attached>
                    <b-tag type="is-light" size="is-medium">
                      {{ vehicle.number }}
                    </b-tag>
                    <b-tag type="is-info is-light" size="is-medium">
                      {{ vehicle.plates }}
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin vehículos</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="divider">
                <strong>Vegetación</strong>
              </div>
              <div v-if="form.vegetableAffected.length > 0" class="container">
                <div
                  v-for="va in form.vegetableAffected"
                  :key="va.idva"
                  class="m-2"
                >
                  <b-taglist attached>
                    <b-tag type="is-light" size="is-medium">
                      {{ va.description }}
                    </b-tag>
                    <b-tag type="is-success is-light" size="is-medium">
                      {{
                        va.cientificName
                          ? va.cientificName
                          : 'Sin nombre científico'
                      }}
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin vegetación</p>
              </div>
            </div>
            <div class="column">
              <div class="divider">
                <strong>Zonas de vigilancia</strong>
              </div>
              <div
                v-if="form.list_operative_zones.length > 0"
                class="container"
              >
                <div
                  v-for="opZone in form.list_operative_zones"
                  :key="opZone.idoperative_zones"
                  class="m-2"
                >
                  <b-tag type="is-light" size="is-medium">
                    {{ opZone.description }}
                  </b-tag>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin zonas de vigilancia</p>
              </div>
            </div>
            <div class="column is-6">
              <div class="divider">
                <strong>Zonificación y Subzonificación PM</strong>
              </div>
              <div v-if="form.temporalZoning.length > 0" class="container">
                <div
                  v-for="subzone in form.temporalZoning"
                  :key="subzone.idsubzoning"
                  class="m-2"
                >
                  <b-taglist attached>
                    <b-tag type="is-light" size="is-medium">
                      {{ subzone.description }}
                    </b-tag>
                    <b-tag type="is-info is-light" size="is-medium">
                      {{
                        subzone.zoning
                          ? subzone.zoning.description
                          : 'Sin zoníficacion asignada'
                      }}
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin zonificación y subzonificación PM</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="divider">
                <strong>Ilícitos</strong>
              </div>
              <div v-if="form.list_incidents.length > 0" class="container">
                <div
                  v-for="va in form.list_incidents"
                  :key="va.idincidents"
                  class="m-2"
                >
                  <b-tag type="is-light" size="is-medium">
                    {{ va.description }}
                  </b-tag>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin vegetación</p>
              </div>
            </div>
            <div class="column">
              <div class="divider">
                <strong>Zonas de vigilancia</strong>
              </div>
              <div
                v-if="form.list_operative_zones.length > 0"
                class="container"
              >
                <div
                  v-for="opZone in form.list_operative_zones"
                  :key="opZone.idoperative_zones"
                  class="m-2"
                >
                  <b-tag type="is-light" size="is-medium">
                    {{ opZone.description }}
                  </b-tag>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin zonas de vigilancia</p>
              </div>
            </div>
            <div class="column is-6">
              <div class="divider">
                <strong>Zonificación y Subzonificación PM</strong>
              </div>
              <div v-if="form.temporalZoning.length > 0" class="container">
                <div
                  v-for="subzone in form.temporalZoning"
                  :key="subzone.idsubzoning"
                  class="m-2"
                >
                  <b-taglist attached>
                    <b-tag type="is-light" size="is-medium">
                      {{ subzone.description }}
                    </b-tag>
                    <b-tag type="is-info is-light" size="is-medium">
                      {{
                        subzone.zoning
                          ? subzone.zoning.description
                          : 'Sin zoníficacion asignada'
                      }}
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
              <div v-else class="container has-text-centered">
                <p>Sin zonificación y subzonificación PM</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="divider">
            <strong>Coordenadas registradas</strong>
          </div>
          <div class="columns">
            <div class="column is-2">
              <div
                v-for="pointCoord in form.coordinates_binnacle"
                :key="pointCoord.name"
                class="container m-3"
              >
                <div class="control">
                  <b-tag
                    type="is-primary"
                    attached
                    aria-close-label="Close tag"
                    closable
                    @close="deletePoint(pointCoord)"
                  >
                    {{ pointCoord.name }}
                  </b-tag>
                </div>
              </div>
            </div>
            <div class="column">
              <vl-map
                :load-tiles-while-animating="true"
                :load-tiles-while-interacting="true"
                data-projection="EPSG:4326"
                style="height: 600px"
              >
                <vl-view
                  :zoom.sync="zoom"
                  :center.sync="center"
                  :rotation.sync="rotation"
                />

                <vl-layer-tile>
                  <vl-source-osm />
                </vl-layer-tile>

                <vl-feature v-if="viewPoints">
                  <vl-geom-multi-point :coordinates="pointsMap" />
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
          </div>
        </div>
        <div v-if="form.list_image && form.list_image.length > 0">
          <div class="divider">
            <strong>Evidencias</strong>
          </div>
          <div
            v-for="(image, index) in form.list_image"
            :key="index"
            class="columns"
          >
            <div class="column is-2">
              <figure v-if="image.path" class="image is-128x128">
                <img :src="image.path">
              </figure>
            </div>
            <div class="column">
              <b-button
                type="is-danger"
                icon-right="delete"
                @click="deleteImage(image, index)"
              />
            </div>
          </div>
        </div>
        <div v-else class="container">
          <div class="divider">
            <strong>Evidencias</strong>
          </div>
          <div class="has-text-centered">
            <p>Sin evidencias</p>
          </div>
        </div>
        <div class="has-text-centered m-2" style="width: 100%">
          <b-button @click="close">
            <strong>Cerrar</strong>
          </b-button>
        </div>
      </section>
    </div>
  </b-modal>
</template>

<script>
import data from '../../assets/cuxtalPoligono.json'
// eslint-disable-next-line
const utmObj = require('utm-latlng')
// eslint-disable-next-line
const utm = require('utm')

export default {
  name: 'ViewBinnacle',
  props: {
    binnacleObject: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    },
    activeModal: {
      type: Boolean,
      default: false
    },
    isExtraordinary: {
      type: Boolean,
      default: false
    },
    disableForm: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      form: {
        date: new Date(),
        participant: null,
        participants: [],
        hourInit: new Date(),
        hourEnd: new Date(),
        temporalZoning: [],
        list_operative_zones: [],
        vegetableAffected: [],
        list_vehicle: [],
        list_incidents: []
      },
      isLoading: false,
      hourInit: new Date(),
      hourEnd: new Date(),
      isSwitched: true,
      validateHours: false,
      formCoord: {},
      temporalPoint: [224190.791, 2311022.379],
      ViewPoint: [-89.60984537598705, 20.85610769792424],
      pointsMap: [[-89.60984537598705, 20.85610769792424]],
      viewPoints: false,
      points: [],
      idPoints: [],
      zoom: 12,
      center: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      zoning: [],
      charges: [],
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: data
          }
        }
      ],
      estados: [
        {
          label: 'Revisado',
          value: 'revisado'
        },
        {
          label: 'En revisión',
          value: 'en-revision'
        },
        {
          label: 'Por revisar',
          value: 'por-revisar'
        }
      ]
    }
  },
  watch: {
    activeModal (newVal, oldVal) {
      if (newVal) {
        this.getOneMoment(this.binnacleObject.idbinnacle)
      }
    }
  },
  mounted () {
    this.getCharges()
    this.getParticipants()
    this.getZoning()
  },
  methods: {
    // Funciones generales
    close () {
      this.form = {
        date: new Date(),
        participant: null,
        participants: [],
        participantsTemp: [],
        hourInit: new Date(),
        hourEnd: new Date(),
        temporalZoning: [],
        list_operative_zones: [],
        vegetableAffected: [],
        list_vehicle: []
      }
      this.temporalPoint = [224190.791, 2311022.379]
      this.ViewPoint = [-89.60984537598705, 20.85610769792424]
      this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
      this.$emit('close')
    },
    async getOneMoment (id) {
      try {
        this.isLoading = true
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacle',
          id
        )
        // console.log(res)
        res.date = new Date(res.date)
        res.hourInit = new Date(res.hour_init)
        res.hourEnd = new Date(res.hour_end)
        const participants = res.participants.map((participant) => {
          const charge = this.charges.find(
            (x) => x.idcharge === participant.idcharge
          )
          participant.charge = charge
          return participant
        })
        res.temporalParticipants = participants
        const objetoFiltrado = {}
        const objetosUnicos = res.list_vegetable_affected.filter((obj) => {
          const idva = obj.idva
          if (!objetoFiltrado[idva]) {
            objetoFiltrado[idva] = true
            return true
          }
          return false
        })
        if (res.idparticipants) {
          res.responsable = this.participants.find(
            (x) => x.idparticipants === res.idparticipants
          )
        }
        res.vegetableAffected = objetosUnicos
        const zoning = res.list_subzones.map((zone) => {
          const temporalZoning = this.zoning.find(
            (x) => x.idzoning === zone.idzoning
          )
          zone.zoning = temporalZoning
          return zone
        })
        res.temporalZoning = zoning
        this.viewPoints = false
        if (res.coordinates_binnacle && res.coordinates_binnacle.length > 0) {
          const temporalPoints = res.coordinates_binnacle
          // console.log(temporalPoints)
          temporalPoints.forEach((object) => {
            const point = [object.x, object.y]
            const pointConvert = this.convertCoordinatesToUtm(point)
            // // console.log(pointConvert)
            res.points = []
            res.points.push(pointConvert)
          })
          this.pointsMap = res.points
          this.viewPoints = true
        } else {
          this.viewPoints = false
        }
        this.isLoading = false
        res.isprocessed =
          res.isprocessed && res.isprocessed === '1'
            ? 'Si'
            : res.isprocessed && res.isprocessed === '0'
              ? 'No'
              : 'No'
        this.form = res
        // console.log(this.form)
      } catch (error) {
        // // // console.log(error)
      }
    },
    convertCoordinatesToUtm (coords) {
      // // console.log(coords)
      const latLng = utm.toLatLon(coords[0], coords[1], '16', 'T')
      return [latLng.longitude, latLng.latitude]
    },
    // Obtener cargos
    async getCharges () {
      try {
        this.charges = await this.$store.dispatch('modules/charges/getCharges')
        // // console.log(this.charges)
      } catch (error) {
        // // console.log(error)
      }
    },
    // Obtener zonas operativas
    async getZoning () {
      try {
        this.zoning = await this.$store.dispatch('modules/zones/getZones')
      } catch (error) {
        // // console.log(error)
      }
    },
    // Participantes
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.participants = res
        this.participantsFilter = res
      } catch (error) {
        // // console.log(error)
      }
    },
    // Evidencia
    viewIamge (image) {
      this.imageUrl = URL.createObjectURL(image)
    },
    deleteImage (object, index) {
      this.$swal
        .fire({
          title: '¿Deseas eliminar esta evidencia?',
          text: 'No podrás revertir el cambio',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        })
        .then(async (result) => {
          // // // console.log(result)
          if (result.isConfirmed) {
            if (
              this.form.list_image_deleted &&
              this.list_image_deleted.length > 0
            ) {
              this.form.list_image_deleted.push(object)
              this.form.list_image.splice(index, 1)
            } else {
              this.form.list_image_deleted = []
              this.form.list_image_deleted.push(object)
              this.form.list_image.splice(index, 1)
            }
            // console.log(this.form)
            try {
              await this.$store.dispatch(
                'modules/binnacles/createOrUpdateBinnacle',
                this.form
              )
              this.getOneMoment(this.binnacleObject.idbinnacle)
              this.$buefy.toast.open({
                message: 'Imágen borrada correctamente',
                type: 'is-success'
              })
            } catch (error) {
              this.$buefy.toast.open({
                message: 'Ocurrió un error, intente nuevamente',
                type: 'is-danger'
              })
            }
            // this.$router.push('/tracking/technicalOp/')
          } else if (result.isDismissed) {
            // this.$router.push('/tracking/programmed/')
          }
        })
    },
    deletePoint (object, index) {
      this.$swal
        .fire({
          title: '¿Deseas eliminar esta coordenada?',
          text: 'No podrás revertir el cambio',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        })
        .then(async (result) => {
          // // // console.log(result)
          if (result.isConfirmed) {
            if (
              this.form.list_coordinates_deleted &&
              this.list_coordinates_deleted.length > 0
            ) {
              this.form.list_coordinates_deleted.push(object)
              // this.form.coordinates_binnacle.splice(index, 1)
            } else {
              this.form.list_coordinates_deleted = []
              this.form.list_coordinates_deleted.push(object)
              // this.form.coordinates_binnacle.splice(index, 1)
            }
            // console.log(this.form)
            try {
              await this.$store.dispatch(
                'modules/binnacles/createOrUpdateBinnacle',
                this.form
              )
              this.getOneMoment(this.binnacleObject.idbinnacle)
              this.$buefy.toast.open({
                message: 'Imágen borrada correctamente',
                type: 'is-success'
              })
            } catch (error) {
              this.$buefy.toast.open({
                message: 'Ocurrió un error, intente nuevamente',
                type: 'is-danger'
              })
            }
            // this.$router.push('/tracking/technicalOp/')
          } else if (result.isDismissed) {
            // this.$router.push('/tracking/programmed/')
          }
        })
    },
    async updateStatusBinnacle () {
      // // console.log(this.form)
      this.form.isprocessed = this.form.isprocessed === 'Si' ? 1 : 0
      // console.log(this.form)
      try {
        await this.$store.dispatch(
          'modules/binnacles/createOrUpdateBinnacle',
          this.form
        )
        this.getOneMoment(this.binnacleObject.idbinnacle)
        this.$buefy.toast.open({
          message: 'Actualizado correctamente',
          type: 'is-success'
        })
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
      }
    },
    convertCoordinatesFromUtm (coords) {},
    viewPoint () {
      // // console.log(this.temporalPoint)
      this.ViewPoint = this.convertCoordinatesToUtm(this.temporalPoint)
      // // console.log(this.ViewPoint)
    }
  }
}
</script>
