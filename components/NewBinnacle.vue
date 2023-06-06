<template>
  <b-modal v-model="activeModal" :can-cancel="false" :destroy-on-hide="false">
    <div class="card">
      <b-loading
        v-model="isLoading"
        :is-full-page="false"
        :can-cancel="false"
      />
      <div class="card-header">
        <p class="card-header-title">
          Nueva bitácora
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <div class="divider">
              <strong>Estado de la bítacora</strong>
            </div>
            <div class="columns">
              <div class="column">
                <section>
                  <b-radio
                    v-model="typeBinnacle"
                    native-value="tech_op"
                  >
                    Opinión técnica
                  </b-radio>
                  <b-radio
                    v-model="typeBinnacle"
                    native-value="rapporteur"
                  >
                    Denuncia
                  </b-radio>
                  <b-radio
                    v-model="typeBinnacle"
                    native-value="programmed"
                  >
                    Recorrido programado
                  </b-radio>
                </section>
                <section>
                  <b-input
                    v-if="typeBinnacle === 'tech_op'"
                    v-model="form.tech_op"
                  />
                  <b-input
                    v-else-if="typeBinnacle === 'rapporteur'"
                    v-model="form.rapporteur"
                  />
                  <b-datepicker
                    v-else-if="typeBinnacle === 'programmed'"
                    v-model="form.programmed"
                    placeholder="Escoje una fecha"
                  />
                </section>
              </div>
              <div class="column">
                <b-field label="Estado actual de la bitácora">
                  <b-select v-model="form.estatus" placeholder="Selecciona una opción">
                    <option value="sin-revisar">
                      Sin revisar
                    </option>
                    <option value="en-revision">
                      En revisión
                    </option>
                    <option value="revisado">
                      Revisado
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
            <div class="divider">
              <strong>Datos generales</strong>
            </div>
            <div class="columns has-text-centered">
              <div class="column">
                <b-field label="Fecha">
                  <b-datepicker v-model="form.date" inline />
                </b-field>
              </div>
              <div class="column">
                <div class="container m-2">
                  <div class="columns">
                    <div class="column">
                      <b-field label="Hora de inicio">
                        <b-timepicker v-model="form.hour_init" inline />
                      </b-field>
                    </div>
                    <div class="column">
                      <b-field label="Hora de finalización">
                        <b-timepicker v-model="form.hour_end" inline />
                      </b-field>
                    </div>
                  </div>
                </div>
                <br>
                <div class="container m-2">
                  <b-field label="Vehículo">
                    <b-taginput
                      v-model="form.vehicles"
                      :data="filteredVehicles"
                      field="number"
                      autocomplete
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
                      :data="filteredParticipants"
                      field="name"
                      autocomplete
                      @typing="filterData"
                    >
                      <template v-slot="props">
                        <strong>{{ props.option.name }}
                          {{ props.option.lastname }}</strong>
                      </template>
                      <template #empty>
                        Sin resultados
                      </template>
                    </b-taginput>
                  </b-field>
                </div>
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
                  <b-field label="Coordenada X">
                    <b-numberinput
                      v-model="point[0]"
                      step="0.000000000000000001"
                      :controls="false"
                    />
                  </b-field>
                  <b-field label="Coordenada Y">
                    <b-numberinput
                      v-model="point[1]"
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
                    :center.sync="point"
                    :rotation.sync="rotation"
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
              <div class="column is-6">
                <b-image
                  :src="imageUrl"
                  alt="The Buefy Logo"
                  ratio="601by235"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <b-button :disabled="buttonDisabled" @click="closeModal">
              Cancelar
            </b-button>
          </div>
          <div class="card-footer-item">
            <b-button type="is-success" :disabled="buttonDisabled" @click="create">
              Guardar
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NewBinnacle',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    },
    idPlan: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      form: {
        estatus: 'sin-revisar',
        date: new Date(),
        hour_init: new Date()
      },
      isLoading: false,
      filteredParticipants: [],
      filteredVehicles: [],
      participants: [],
      vehicles: [],
      plan: {},
      binnacles: [],
      zoom: 12,
      center: [0, 0],
      point: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      files: [],
      formCoord: {},
      points: [],
      idPoints: [],
      idEvidences: [],
      temporalFiles: [],
      typeBinnacle: null,
      temporalFile: null,
      buttonDisabled: false,
      imageUrl: require('@/assets/cuxtal/RC_V.png')
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {},
  mounted () {
    this.center = this.point ? this.point : [0, 0]
    this.form.idusers = this.user.idusers
    this.form.idplanification = this.idPlan
    this.getPlan()
    this.getVehicles()
    this.getParticipants()
    this.filteredParticipants = this.participants
  },
  methods: {
    async getPlan () {
      try {
        const res = await this.$store.dispatch(
          'modules/plans/readPlan',
          this.idPlan
        )
        this.plan = res
        this.binnacles = res.binnacles ? res.binnacles : []
      } catch (error) {
        console.log(error)
      }
    },
    async create () {
      this.isLoading = true
      this.buttonDisabled = true
      const temporalForm = JSON.parse(JSON.stringify(this.form))
      console.log(temporalForm)
      try {
        console.log(temporalForm)
        this.binnacles.push(temporalForm)
        this.plan.binnacles = this.binnacles
        await this.$store.dispatch(
          'modules/plans/createOrUpdatePlan',
          this.plan
        )
        await this.getPlan()
        const binnacles = this.plan.binnacles
        const binnacleCreated = binnacles.pop()
        if (this.points.length > 0) {
          this.points.map((point) => {
            const coord = point
            coord.idbinnacle = binnacleCreated.idbinnacle
            return coord
          })
          await this.createPoints(this.points, binnacleCreated.idbinnacle)
          binnacleCreated.list_coordinates = this.idPoints
          await this.updateBinnacle(binnacleCreated)
        }
        if (this.files.length > 0) {
          const formData = new FormData()
          this.files.map((file) => {
            formData.append('binnacle_photo[]', file)
          })
          this.files.forEach((files, index) => {
            this.temporalFiles.push({
              description: 'evidencia ' + (index + 1),
              idbinnacle: binnacleCreated.idbinnacle,
              position: index + 1
            })
          })
          binnacleCreated.list_image = this.temporalFiles
          const positionsRelation = await this.updateBinnacle(binnacleCreated)
          this.temporalFiles.forEach((x, index) => {
            formData.append('idimages[' + index + ']', positionsRelation[index])
          })
          await this.uploadEvidences(formData)
        }
        this.form = {}
        this.temporalFiles = []
        this.files = []
        this.points = []
        this.$buefy.toast.open({
          message: '¡Bitácora guardada!',
          type: 'is-success'
        })
        this.buttonDisabled = false
        this.isLoading = false
        this.$emit('update')
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    readFile () {
      this.temporalFile = this.$refs.file.files[0]
      console.log(this.temporalFile)
    },
    closeModal () {
      this.form = {}
      this.temporalFiles = []
      this.files = []
      this.points = []
      this.$emit('close')
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
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
      }
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
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
      } catch (error) {
        console.log(error)
      }
    },
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.participants = res
      } catch (error) {
        console.log(error)
      }
    },
    filterData (text) {
      this.filteredParticipants = this.participants.filter((option) => {
        if (
          option.name &&
          option.name.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    addPoint () {
      if (
        this.point[0] !== -89.60984537598705 &&
        this.point[1] !== 20.85610769792424 &&
        this.formCoord.name !== ''
      ) {
        this.formCoord.x = this.point[0]
        this.formCoord.y = this.point[1]
        this.points.push(this.formCoord)
        this.formCoord = {
          name: '',
          x: 0,
          y: 0
        }
        this.point = [-89.60984537598705, 20.85610769792424]
      }
    },
    viewPoint (point) {
      this.formCoord.name = point.name
      this.point[0] = point.x
      this.point[1] = point.y
      this.center = this.point
    },
    deletePoint (index) {
      this.points.splice(index, 1)
    },
    viewIamge (image) {
      this.imageUrl = URL.createObjectURL(image)
    },
    deleteDropFile (index) {
      this.files.splice(index, 1)
    },
    async createCoord () {
      this.formCoord.x = this.point[0]
      this.formCoord.y = this.point[1]
      try {
        await this.$store.dispatch(
          '/modules/coordinates/createOrUpdateCoordinate',
          this.formCoord
        )
      } catch (error) {
        console.log(error)
      }
    },
    filterVehicles (text) {
      this.filteredVehicles = this.vehicles.filter((option) => {
        if (
          (option.plates &&
            option.plates
              .toString()
              .toLowerCase()
              .includes(text.toLowerCase())) ||
          (option.number &&
            option.number.toString().toLowerCase().includes(text.toLowerCase()))
        ) {
          return option
        }
      })
    }
  }
}
</script>
