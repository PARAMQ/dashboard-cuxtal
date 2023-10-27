<template>
  <b-modal v-model="activeModal" has-modal-card :can-cancel="false" full-screen>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{
            isExtraordinary ? 'Editar bitácora extraordinaria' : 'Editar bitácora'
          }}
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
                rules="required"
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
              <div>
                <b-field label="Hora de inicio">
                  <b-timepicker v-model="form.hour_init" inline />
                </b-field>
              </div>
              <br>
              <div>
                <b-field label="Hora de finalización">
                  <b-timepicker v-model="form.hour_end" inline />
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
                  v-model="form.participant"
                  :data="participantsFilter"
                  icon="magnify"
                  clearable
                  field="name"
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
              <b-field label="Subzonas">
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
              <div class="container">
                <b-field label="Descripción breve de la coordenada">
                  <b-input v-model="formCoord.name" />
                </b-field>
                <b-switch v-model="isSwitched">
                  {{ isSwitched ? 'Formato UTM' : 'Coordenadas clasicas' }}
                </b-switch>
                <b-field :label="(isSwitched ? 'Longitud' : 'Coordenada X')">
                  <b-numberinput
                    v-model="temporalPoint[0]"
                    step="0.000000000000000001"
                    :controls="false"
                  />
                </b-field>
                <b-field :label="(isSwitched ? 'Latitud' : 'Coordenada Y')">
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
                  :center.sync="temporalPoint"
                  :rotation.sync="rotation"
                />

                <vl-layer-tile>
                  <vl-source-osm />
                </vl-layer-tile>

                <vl-feature>
                  <vl-geom-multi-point :coordinates="pointsMap" />
                </vl-feature>
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
          <ButtonGroup
            saving
            @save="createOrUpdate"
            @cancel="printHelloWord"
          />
        </form>
      </section>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'NewBinnacle',
  props: {
    binnacleObject: {
      type: Object,
      default: null
    },
    activeModal: {
      type: Boolean,
      default: false
    },
    isExtraordinary: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {},
      isSwitched: false,
      formCoord: {},
      vehicles: [],
      temporalPoint: [-89.60984537598705, 20.85610769792424],
      pointsMap: [[-89.60984537598705, 20.85610769792424]],
      points: [],
      zoom: 12,
      center: [0, 0],
      rotation: 0,
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
      temporalFiles: []
    }
  },
  watch: {
    activeModal (newVal, oldVal) {
      if (newVal) {
        console.log(this.binnacleObject)
        this.getBinnacle(this.binnacleObject.idbinnacle)
        this.form = this.binnacleObject
        this.form.date = new Date(this.binnacleObject.date)
        this.form.hour_init = new Date(this.binnacleObject.hour_init)
        this.form.hour_end = new Date(this.binnacleObject.hour_end)
      }
    }
  },
  mounted () {
    this.center = this.point ? this.point : [0, 0]
    this.getVehicles()
    this.getParticipants()
    this.getVegetation()
    this.getSubZones()
  },
  methods: {
    async createOrUpdate () {
      console.log(this.form)
      try {
        const idBinnacle = await this.$store.dispatch(
          'modules/binnacles/createOrUpdateBinnacle',
          this.form
        )
        const binnacle = await this.getBinnacle(idBinnacle)
        if (this.vegetableAffected.length > 0) {
          binnacle.list_vegetable_affected = this.vegetableAffected.map(
            (x) => {
              x.idbinnacle = idBinnacle
              return x
            }
          )
          await this.updateBinnacle(binnacle)
        }
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
          this.files.map((file) => {
            formData.append('binnacle_photo[]', file)
          })
          this.files.forEach((files, index) => {
            this.temporalFiles.push({
              description: 'evidencia_' + (index + 1) + '_bitácora_' + idBinnacle,
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
        }
        this.form = {}
        this.temporalFiles = []
        this.files = []
        this.idPoints = []
        this.points = []
        this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
        this.$buefy.toast.open({
          message: '¡Bitácora guardada!',
          type: 'is-success'
        })
        this.buttonDisabled = false
        this.isLoading = false
        this.$emit('save')
      } catch (error) {
        console.log(error)
      } finally {
        this.buttonDisabled = false
        this.isLoading = false
      }
    },
    async getBinnacle (id) {
      console.log(id)
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacle',
          id
        )
        console.log(res)
        return res
      } catch (error) {
        // console.log(error)
      }
    },
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
    cancel () {
      // this.$emit('close')
    },
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
        this.vehiclesFilter = res
      } catch (error) {
        console.log(error)
      }
    },
    filterVehicles (text) {
      this.vehiclesFilter = this.vehicles.filter((option) => {
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
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        console.log(res)
        this.participants = res
        this.participantsFilter = res
      } catch (error) {
        console.log(error)
      }
    },
    selectParticipant (option) {
      (option) ? this.form.idparticipant = option.idparticipants : this.form.idparticipant = null
    },
    removeParticipant (index) {
      this.form.participants.splice(index, 1)
    },
    filterParticipant (text) {
      this.participantsFilter = this.participants.filter((option) => {
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
    async getSubZones () {
      try {
        const res = await this.$store.dispatch('modules/zones/getSubZones')
        this.subZones = res
        this.subZonesFilter = res
      } catch (error) {
        console.log(error)
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
    async getVegetation () {
      try {
        const res = await this.$store.dispatch('modules/vegetation/getVegetations')
        this.vegetation = res
        this.vegetationFilter = res
      } catch (error) {
        console.log(error)
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
    addPoint () {
      if (this.formCoord.name && this.formCoord.name !== '') {
        if (this.points.length === 0) {
          const temporalPoints = [[this.temporalPoint[0], this.temporalPoint[1]]]
          this.pointsMap = temporalPoints
        } else {
          this.pointsMap.push([this.temporalPoint[0], this.temporalPoint[1]])
        }
        this.formCoord.x = this.temporalPoint[0]
        this.formCoord.y = this.temporalPoint[1]
        this.points.push(this.formCoord)
        this.formCoord = {
          name: '',
          x: 0,
          y: 0
        }
        this.temporalPoint = [-89.60984537598705, 20.85610769792424]
      } else {
        this.$buefy.toast.open({
          duration: 4000,
          message: 'Es necesario asignar un nombre a las coordenadas',
          position: 'is-bottom',
          type: 'is-danger'
        })
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
    }
  }
}
</script>
