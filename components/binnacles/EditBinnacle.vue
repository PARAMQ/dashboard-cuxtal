<template>
  <b-modal v-model="activeModal" has-modal-card :can-cancel="false" full-screen>
    <b-loading v-model="isLoading" :is-full-page="false" :can-cancel="false" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Editar bitácora
        </p>
      </header>
      <section class="modal-card-body">
        <form>
          <div class="divider">
            <strong>Estado de la bítacora</strong>
          </div>
          <div class="columns">
            <div class="column">
              <BInputWithValidation
                v-model="form.rapporteur"
                label="Relatoría"
                name="relatoría"
                label-position="on-border"
                type="textarea"
                normal
              />
            </div>
          </div>
          <div class="divider">
            <strong>Datos generales</strong>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b-field label="Fecha">
                <b-datepicker v-model="form.date" inline />
              </b-field>
            </div>
            <div
              class="column is-3 is-flex is-flex-direction-column is-justify-content-center has-text-centered"
            >
              <b-notification
                v-model="validateHours"
                aria-close-label="Close notification"
              >
                Es necesario que ingreses una hora de inicio y una hora de fin.
              </b-notification>
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
              <b-field label="Responsable">
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
                  @remove="deleteVehicle"
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
                  @remove="deleteParticipant"
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
              <b-field label="Zonas operativas">
                <b-taginput
                  v-model="form.list_operative_zones"
                  :data="opZonesFilter"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterOpZone"
                >
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
                <!--
                  <b-switch v-model="isSwitched">
                    {{ isSwitched ? 'Formato UTM' : 'Coordenadas clasicas' }}
                  </b-switch>
                  -->
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

                <vl-feature v-if="viewActive">
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
                  <b-upload v-model="files" multiple drag-drop>
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
          <div class="has-text-centered m-2" style="width: 100%">
            <b-button type="is-danger is-light" @click="close">
              <strong>Cancelar</strong>
            </b-button>
            <b-button type="is-success is-light" @click="createOrUpdate">
              <strong>Guardar</strong>
            </b-button>
          </div>
        </form>
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
  name: 'EditBinnacle',
  props: {
    binnacleObject: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    },
    activeModal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        date: new Date()
      },
      isLoading: false,
      hourInit: new Date(),
      hourEnd: new Date(),
      isSwitched: true,
      validateHours: false,
      formCoord: {},
      temporalPoint: [224190.791, 2311022.379],
      ViewPoint: [-89.60984537598705, 20.85610769792424],
      viewActive: false,
      pointsMap: [[-89.60984537598705, 20.85610769792424]],
      points: [],
      idPoints: [],
      zoom: 12,
      center: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      vehicles: [],
      vehiclesFilter: [],
      vegetation: [],
      vegetationFilter: [],
      legalZones: [],
      legalZonesFilter: [],
      subZones: [],
      subZonesFilter: [],
      opZones: [],
      opZonesFilter: [],
      participants: [],
      participantsFilter: [],
      files: [],
      vegetableAffected: [],
      temporalFiles: [],
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
  watch: {
    activeModal (newVal, oldVal) {
      if (newVal) {
        this.getOneMoment(this.binnacleObject.idbinnacle)
      }
    }
  },
  mounted () {
    this.hourEnd.setHours(this.hourEnd.getHours() + 1)
    this.center = this.point ? this.point : [0, 0]
    if (this.plannification) {
      this.form.idplanification = this.plannification
    }
    this.getUser()
    this.getVehicles()
    this.getParticipants()
    this.getVegetation()
    this.getSubZones()
    this.getOpZones()
  },
  methods: {
    // Funciones generales
    close () {
      this.form = {
        date: new Date(),
        idplanification: this.plannification
      }
      this.viewActive = false
      this.files = []
      this.vegetableAffected = []
      this.temporalPoint = [224190.791, 2311022.379]
      this.ViewPoint = [-89.60984537598705, 20.85610769792424]
      this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
      this.points = []
      this.idPoints = []
      this.vehiclesFilter = this.vehicles
      this.vegetationFilter = this.vegetation
      this.legalZonesFilter = this.legalZones
      this.subZonesFilter = this.subZones
      this.opZonesFilter = this.opZones
      this.participantsFilter = this.participants
      this.temporalFiles = []
      this.$emit('close')
    },
    // Información usuario
    async getUser () {
      try {
        const res = await this.$store.dispatch('modules/users/getData')
        this.form.iduser = res.idusers
      } catch (error) {
        // console.log(error)
      }
    },
    // Crear bitacora
    createOrUpdate () {
      console.log(this.form)
      /*
      this.isLoading = true
      this.form.hour_init = this.hourInit
      this.form.hour_end = this.hourEnd
      try {
        const idBinnacle = await this.$store.dispatch(
          'modules/binnacles/createOrUpdateBinnacle',
          this.form
        )
        const binnacle = await this.getBinnacle(idBinnacle)
        if (this.points.length > 0) {
          this.points.map((point) => {
            const coord = point
            coord.idbinnacle = idBinnacle
            return coord
          })
          await this.createPoints(this.points, idBinnacle)
          binnacle.list_coordinates = this.idPoints
          await this.updateBinnacle(binnacle)
        }
        if (this.files.length > 0) {
          const formData = new FormData()
          this.files.map((file, index) => {
            if (file.type === 'image/png') {
              const temporalName =
                'evidencia_' +
                (index + 1) +
                '_bitácora_' +
                binnacle.number +
                '.png'
              const temporalFile = new File([file], temporalName, {
                type: 'image/png'
              })
              formData.append('binnacle_photo[]', temporalFile)
            } else if (file.type === 'image/jpeg') {
              const temporalName =
                'evidencia_' +
                (index + 1) +
                '_bitácora_' +
                binnacle.number +
                '.jpg'
              const temporalFile = new File([file], temporalName, {
                type: 'image/jpeg'
              })
              formData.append('binnacle_photo[]', temporalFile)
            }
          })
          this.files.forEach((files, index) => {
            this.temporalFiles.push({
              description: 'evidencia_' + (index + 1) + '_' + binnacle.number,
              idbinnacle: idBinnacle,
              position: index + 1
            })
          })
          binnacle.list_image = this.temporalFiles
          const positionsRelation = await this.updateBinnacle(binnacle)
          this.temporalFiles.forEach((x, index) => {
            formData.append('idimages[' + index + ']', positionsRelation[index])
          })
          await this.uploadEvidences(formData)
          if (this.vegetableAffected.length > 0) {
            // console.log(this.vegetableAffected)
            binnacle.list_vegetable_affected = this.vegetableAffected.map(
              (x) => {
                x.idbinnacle = idBinnacle
                return x
              }
            )
            await this.updateBinnacle(binnacle)
          }
        }
        this.form = {
          date: new Date(),
          idplanification: this.plannification
        }
        this.viewActive = false
        this.files = []
        this.vegetableAffected = []
        this.temporalPoint = [224190.791, 2311022.379]
        this.ViewPoint = [-89.60984537598705, 20.85610769792424]
        this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
        this.points = []
        this.idPoints = []
        this.vehiclesFilter = this.vehicles
        this.vegetationFilter = this.vegetation
        this.legalZonesFilter = this.legalZones
        this.subZonesFilter = this.subZones
        this.opZones = this.opZonesFilter
        this.participantsFilter = this.participants
        this.temporalFiles = []
        this.$buefy.toast.open({
          message: '¡Bitácora guardada!',
          type: 'is-success'
        })
        this.buttonDisabled = false
        this.isLoading = false
        this.$emit('save')
      } catch (error) {
        this.isLoading = false
        // console.log(error)
      } finally {
        this.buttonDisabled = false
        this.isLoading = false
      }
      */
    },
    async getBinnacle (id) {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacle',
          id
        )
        return res
      } catch (error) {
        // // console.log(error)
      }
    },
    async getOneMoment (id) {
      try {
        this.isLoading = true
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacle',
          id
        )
        console.log(res)
        res.date = new Date(res.date)
        // res.compare_vehicles = res.list_vehicle ? JSON.parse(JSON.strigify(res.list_vehicle)) : null
        res.compare_vehicles = res.list_vehicle
        res.compare_participants = res.participants ? JSON.parse(JSON.stringify(res.participants)) : null
        // res.compare_va = res.list_vegetable_affected ? JSON.parse(JSON.stringify(res.list_vegetable_affected)) : null
        res.compare_va = res.list_vegetable_affected
        // res.compare_subzones = res.list_subzones ? JSON.parse(JSON.stringify(res.list_subzones)) : null
        res.compare_subzones = res.list_subzones
        // res.compare_opZones = res.list_operative_zones ? JSON.parse(JSON.stringify(res.list_operative_zones)) : null
        res.compare_opZones = res.list_operative_zones
        // res.compare_points = res.coordinates_binnacle ? JSON.parse(JSON.stringify(res.coordinates_binnacle)) : null
        res.compare_points = res.coordinates_binnacle
        console.log(res)
        this.hourInit = new Date(res.hour_init)
        this.hourEnd = new Date(res.hour_end)
        /*
        const participants = res.participants.map((participant) => {
          const charge = this.charges.find(x => x.idcharge === participant.idcharge)
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
        res.vegetableAffected = objetosUnicos
        const zoning = res.list_subzones.map((zone) => {
          const temporalZoning = this.zoning.find(x => x.idzoning === zone.idzoning)
          zone.zoning = temporalZoning
          return zone
        })
        res.temporalZoning = zoning
        this.viewPoints = false
        if (res.coordinates_binnacle && res.coordinates_binnacle.length > 0) {
          const temporalPoints = res.coordinates_binnacle
          temporalPoints.forEach((object) => {
            const point = [object.x, object.y]
            const pointConvert = this.convertCoordinatesToUtm(point)
            // console.log(pointConvert)
            res.points = []
            res.points.push(pointConvert)
          })
          this.pointsMap = res.points
          this.viewPoints = true
        } else {
          this.viewPoints = false
        }
        // console.log(res)
        this.isLoading = false
        /*
        res.date = new Date(res.date)
        res.hour_init = new Date(res.hour_init)
        this.hourInit = res.hour_init
        res.hour_end = new Date(res.hour_end)
        this.hourEnd = res.hour_end
        const objetoFiltrado = {}
        const objetosUnicos = res.list_vegetable_affected.filter((obj) => {
          const idva = obj.idva
          if (!objetoFiltrado[idva]) {
            objetoFiltrado[idva] = true
            return true
          }
          return false
        })
        res.list_subzoning = res.list_subzones
        this.vegetableAffected = objetosUnicos
        res.participant = this.filterParticipantId(this.binnacleObject.idparticipants)
        */
        this.isLoading = false
        this.form = res
      } catch (error) {
        // // console.log(error)
      }
    },
    // Actualizar bitacora
    async updateBinnacle (binnacle) {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/createOrUpdateBinnacle',
          binnacle
        )
        return res
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
      }
    },
    // Vehiculos
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
        this.vehiclesFilter = res
      } catch (error) {
        // console.log(error)
      }
    },
    filterVehicles (text) {
      this.vehiclesFilter = this.vehicles.filter((option) => {
        if (
          option.number &&
          option.number.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    deleteVehicle (vehicle) {
      if (this.form.list_vehicle_deleted) {
        const vehicleDelete = this.form.compare_vehicles.find(x => x.idvehicle === vehicle.idvehicle)
        if (vehicleDelete) {
          this.form.list_vehicle_deleted.push(vehicleDelete)
        }
      } else {
        const vehicleDelete = this.form.compare_vehicles.find(x => x.idvehicle === vehicle.idvehicle)
        if (vehicleDelete) {
          this.form.list_vehicle_deleted = []
          this.form.list_vehicle_deleted.push(vehicleDelete)
        }
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
        // console.log(error)
      }
    },
    selectParticipant (option) {
      option
        ? (this.form.idparticipants = option.idparticipants)
        : (this.form.idparticipants = null)
    },
    removeParticipant (index) {
      const temporalParticipant = this.form.participants[index]
      console.log(temporalParticipant)
      const participant = this.form.compare_participants.find(x => x.idparticipants === temporalParticipant.idparticipants)
      if (participant) {
        if (this.form.list_participants_deleted && this.form.list_participants_deleted.length > 0) {
          console.log(1)
          this.form.list_participants_deleted.push(participant)
        } else {
          console.log(2)
          this.form.list_participants_deleted = []
          this.form.list_participants_deleted.push(participant)
        }
      }
      this.form.participants.splice(index, 1)
    },
    filterParticipant (text) {
      this.participantsFilter = this.participants.filter((option) => {
        if (
          option.name &&
          option.name.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    deleteParticipant (participant) {
      console.log(participant)
      if (this.form.list_participants_deleted) {
        this.form.list_participants_deleted.push(participant)
      } else {
        this.form.list_participants_deleted = []
        this.form.list_participants_deleted.push(participant)
      }
    },
    // Zonas operativas
    async getOpZones () {
      try {
        const res = await this.$store.dispatch(
          'modules/operativeZones/getZones'
        )
        this.opZonesFilter = res
        this.opZones = res
      } catch (error) {
        console.log(error)
      }
    },
    filterOpZone (text) {
      this.opZonesFilter = this.opZones.filter((option) => {
        if (
          option.description &&
          option.description
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    deleteOpZone () {},
    // Subzonas
    async getSubZones () {
      try {
        const res = await this.$store.dispatch('modules/zones/getSubZones')
        this.subZones = res
        this.subZonesFilter = res
      } catch (error) {
        // console.log(error)
      }
    },
    filterSubZones (text) {
      this.subZonesFilter = this.subZones.filter((option) => {
        if (
          option.description &&
          option.description
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    deleteSubZone () {},
    // Vegetacion
    async getVegetation () {
      try {
        const res = await this.$store.dispatch(
          'modules/vegetation/getVegetations'
        )
        this.vegetation = res
        this.vegetationFilter = res
      } catch (error) {
        // console.log(error)
      }
    },
    filterVegetation (text) {
      this.vegetationFilter = this.vegetation.filter((option) => {
        if (
          option.description &&
          option.description
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    deleteVa () {},
    // Evidencia
    viewIamge (image) {
      this.imageUrl = URL.createObjectURL(image)
    },
    deleteDropFile (index) {
      this.files.splice(index, 1)
    },
    async uploadEvidences (files) {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/uploadEvidences',
          files
        )
        this.idEvidences = res
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
      }
    },
    // Coordenadas
    addPoint () {
      this.viewActive = false
      if (this.formCoord.name && this.formCoord.name !== '') {
        if (this.points.length === 0) {
          const pointConvert = this.convertCoordinatesToUtm([
            this.temporalPoint[0],
            this.temporalPoint[1]
          ])
          this.pointsMap = [pointConvert]
        } else {
          const pointConvert = this.convertCoordinatesToUtm([
            this.temporalPoint[0],
            this.temporalPoint[1]
          ])
          this.pointsMap.push(pointConvert)
        }
        this.formCoord.x = this.temporalPoint[0]
        this.formCoord.y = this.temporalPoint[1]
        this.points.push(this.formCoord)
        this.formCoord = {
          name: '',
          x: 0,
          y: 0
        }
        this.temporalPoint = [224190.791, 2311022.379]
      } else {
        this.$buefy.toast.open({
          duration: 4000,
          message: 'Es necesario asignar un nombre a las coordenadas',
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    },
    deletePoint (index) {
      if (this.pointsMap.length === 1) {
        this.points = []
        this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
      } else {
        this.points.splice(index, 1)
        this.pointsMap.splice(index, 1)
      }
    },
    createPoints (points, binnacle) {
      const coordenadas = points
      try {
        coordenadas.forEach(async (point) => {
          const res = await this.$store.dispatch(
            'modules/coordinates/createOrUpdateCoordinate',
            point
          )
          // // console.log(this.idPoints)
          this.idPoints.push({
            idcoordinates: res,
            idbinnacle: binnacle
          })
        })
      } catch (error) {
        this.$buefy.toast.open({
          message: 'No se pudieron agregar las coordenadas, intente nuevamente',
          type: 'is-danger'
        })
      }
    },
    convertCoordinatesToUtm (coords) {
      const latLng = utm.toLatLon(coords[0], coords[1], '16', 'T')
      return [latLng.longitude, latLng.latitude]
    },
    convertCoordinatesFromUtm (coords) {},
    viewPoint () {
      // console.log(this.temporalPoint)
      this.ViewPoint = this.convertCoordinatesToUtm(this.temporalPoint)
      this.viewActive = true
      // console.log(this.ViewPoint)
    }
  }
}
</script>
