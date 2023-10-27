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
          Nueva bitácora {{ isExtraordinary ? ' - Extraordinaria' : '' }}
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
                <b-field label="Estado actual de la bitácora">
                  <b-select
                    v-model="form.status"
                    placeholder="Selecciona una opción"
                  >
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
              <div class="column">
                <!---
                <b-field label="Responsable de la bitácora">
                </b-fied>
                -->
              </div>
            </div>
            <div class="divider">
              <strong>Relatoría</strong>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Escriba aquí la relatoría">
                  <b-input v-model="form.rapporteur" type="textarea" />
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
                  <b-field label="Vehículos">
                    <b-taginput
                      v-model="form.list_vehicle"
                      :data="filteredVehicles"
                      field="number"
                      autocomplete
                      :open-on-focus="true"
                      @typing="filterVehicles"
                      @remove="deleteVehicles"
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
                      :open-on-focus="true"
                      @typing="filterData"
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
                  <b-field label="Persona que realizó el recorrido">
                    <b-autocomplete
                      v-model="participant"
                      :data="options"
                      icon="magnify"
                      clearable
                      field="name"
                      @typing="filterPersonRecorrido"
                      @select="selectParticipant"
                    >
                      <template #empty>
                        No hay resultados
                      </template>
                    </b-autocomplete>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="divider">
              <strong>Zonas y vegetación</strong>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Zonas de vigilancia">
                  <b-taginput
                    v-model="form.list_operative_zones"
                    :data="filteredOpZones"
                    autocomplete
                    field="description"
                    :open-on-focus="true"
                    @typing="filterOpZone"
                  >
                    <template #empty>
                      Sin resultados
                    </template>
                  </b-taginput>
                </b-field>
              </div>
            </div>
            <!--
            <div class="columns">
              <div class="column">
                <b-field label="Zonificación PM">
                  <b-taginput
                    v-model="form.legal_zones"
                    :data="filteredLegalZones"
                    field="description"
                    autocomplete
                    :open-on-focus="true"
                    @typing="filterZones"
                  >
                    <template #empty>
                      Sin resultados
                    </template>
                  </b-taginput>
                </b-field>
              </div>
            </div>
            -->
            <div class="columns">
              <div class="column">
                <b-field label="Subzonas">
                  <b-taginput
                    v-model="form.list_subzoning"
                    :data="filteredSubZones"
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
            <div class="columns">
              <div class="column">
                <b-field label="Vegetación">
                  <b-taginput
                    v-model="form.list_vegetable_affected"
                    :data="filteredVegetation"
                    field="description"
                    autocomplete
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
              <div v-if="imageUrl" class="column is-6">
                <b-image
                  :src="imageUrl"
                  alt="The Buefy Logo"
                  ratio="601by235"
                />
              </div>
              <div class="column is-6 has-text-centered">
                <h1><strong>Selecciona una imágen.</strong></h1>
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
            <b-button
              type="is-success"
              :disabled="buttonDisabled"
              @click="createOrUpdateBinnacle"
            >
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
import KML from 'ol/format/KML'
export default {
  name: 'NewBinnacleOldVersion',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    },
    idPlan: {
      default: '',
      type: String
    },
    idBinnacle: {
      default: null,
      type: Number
    },
    isExtraordinary: {
      default: false,
      type: Boolean
    },
    type: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      form: {
        status: 'sin-revisar',
        date: new Date(),
        hour_init: new Date()
      },
      isLoading: false,
      filteredParticipants: [],
      filteredVehicles: [],
      filteredVegetation: [],
      filteredLegalZones: [],
      filteredOpZones: [],
      filteredSubZones: [],
      participants: [],
      options: [],
      participant: '',
      vehicles: [],
      vegetation: [],
      legalZones: [],
      subZones: [],
      opZones: [],
      list_vegetable_affected: [],
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
      pointsMap: [[-89.60984537598705, 20.85610769792424]],
      temporalFiles: [],
      typeBinnacle: null,
      temporalFile: null,
      buttonDisabled: false,
      imageUrl: null
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
    if (!this.isExtraordinary) {
      this.getPlan()
    } else {
      this.form.isextraordinary = true
      this.form.type = this.type
    }
    this.getVehicles()
    this.getParticipants()
    this.getVeg()
    this.getLegalZones()
    this.getSubZones()
    this.getOpZones()
    this.filteredParticipants = this.participants
  },
  methods: {
    kmlFormatFactory () {
      return new KML()
    },
    async getPlan () {
      try {
        const res = await this.$store.dispatch(
          'modules/plans/readPlan',
          this.idPlan
        )
        this.plan = res
        this.binnacles = res.binnacles ? res.binnacles : []
      } catch (error) {
        // console.log(error)
      }
    },
    async createOrUpdateBinnacle () {
      this.isLoading = true
      this.buttonDisabled = true
      const temporalForm = JSON.parse(JSON.stringify(this.form))
      await this.createOrUpdate(temporalForm)
      /*
      if (temporalForm.status === 'revisado') {
        this.$swal.fire({
          title: '¿Qué tipo de bitácora es?',
          text: 'Selecciona una opción',
          showDenyButton: true,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: 'Opinión técnica',
          denyButtonText: 'Denuncia',
          cancelButtonText: 'Programada'
        }).then(async (result) => {
          // console.log(result)
          if (result.isConfirmed) {
            // eslint-disable-next-line no-unused-expressions
            temporalForm.type = 'techOp'
            await this.createOrUpdate(temporalForm)
            // // console.log('Opinion tecnica')
            this.isLoading = false
            this.buttonDisabled = false
            // this.$router.push('/tracking/technicalOp/')
          } else if (result.isDenied) {
            temporalForm.type = 'complaint'
            await this.createOrUpdate(temporalForm)
            // // console.log('Denuncia')
            this.isLoading = false
            this.buttonDisabled = false
            // this.$router.push('/tracking/complaint/')
          } else if (result.isDismissed) {
            temporalForm.type = 'programmed'
            await this.createOrUpdate(temporalForm)
            // // console.log('programada')
            this.isLoading = false
            this.buttonDisabled = false
            // this.$router.push('/tracking/programmed/')
          }
        })
      } else {
        await this.createOrUpdate(temporalForm)
        this.isLoading = false
        this.buttonDisabled = false
        this.$emit('update')
      }
      */
    },
    async createOrUpdate (temporalForm) {
      console.log(JSON.stringify(temporalForm))
      try {
        let binnacle
        let idBinnacle
        if (this.idBinnacle) {
          idBinnacle = this.idBinnacle
          await this.updateBinnacle(temporalForm)
          binnacle = await this.getBinnacle(idBinnacle)
        } else {
          idBinnacle = await this.$store.dispatch(
            'modules/binnacles/createOrUpdateBinnacle',
            temporalForm
          )
          binnacle = await this.getBinnacle(idBinnacle)
        }
        if (this.list_vegetable_affected.length > 0) {
          binnacle.list_vegetable_affected = this.list_vegetable_affected.map(
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
              description: 'evidencia ' + (index + 1),
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
        this.x = []
        this.idPoints = []
        this.points = []
        this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
        this.$buefy.toast.open({
          message: '¡Bitácora guardada!',
          type: 'is-success'
        })
        this.buttonDisabled = false
        this.isLoading = false
        this.$emit('update')
      } catch (error) {
        // console.log(error)
      } finally {
        this.buttonDisabled = false
        this.isLoading = false
      }
    },
    readFile () {
      this.temporalFile = this.$refs.file.files[0]
    },
    closeModal () {
      this.form = {}
      this.temporalFiles = []
      this.files = []
      this.points = []
      this.$emit('close')
    },
    selectParticipant (option) {
      (option) ? this.form.idparticipant = option.idparticipants : this.form.idparticipant = null
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
        this.filteredVehicles = this.vehicles
      } catch (error) {
        // console.log(error)
      }
    },
    async getVeg () {
      try {
        const res = await this.$store.dispatch(
          'modules/vegetation/getVegetations'
        )
        this.vegetation = res
      } catch (error) {
        // console.log(error)
      }
    },
    async getLegalZones () {
      try {
        this.legalZones = await this.$store.dispatch('modules/zones/getZones')
        this.filteredLegalZones = this.legalZones
      } catch (error) {
        // console.log(error)
      }
    },
    async getSubZones () {
      try {
        this.subZones = await this.$store.dispatch('modules/zones/getSubZones')
        this.filteredSubZones = this.subZones
      } catch (error) {
        // console.log(error)
      }
    },
    async getOpZones () {
      try {
        this.opZones = await this.$store.dispatch(
          'modules/operativeZones/getZones'
        )
        this.filteredOpZones = this.opZones
      } catch (error) {
        // console.log(error)
      }
    },
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.options = res
        this.participants = res
        this.filteredParticipants = res
      } catch (error) {
        // console.log(error)
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
      if (this.formCoord.name && this.formCoord.name !== '') {
        if (this.points.length === 0) {
          const temporalPoints = [[this.point[0], this.point[1]]]
          this.pointsMap = temporalPoints
        } else {
          this.pointsMap.push([this.point[0], this.point[1]])
        }
        this.formCoord.x = this.point[0]
        this.formCoord.y = this.point[1]
        this.points.push(this.formCoord)
        this.formCoord = {
          name: '',
          x: 0,
          y: 0
        }
        this.point = [-89.60984537598705, 20.85610769792424]
      } else {
        this.$buefy.toast.open({
          duration: 4000,
          message: 'Es necesario asignar un nombre a las coordenadas',
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    },
    async getBinnacle (id) {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacle',
          id
        )
        return res
      } catch (error) {
        // console.log(error)
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
      this.pointsMap.splice(index, 1)
    },
    removeParticipant (index) {
      this.form.participants.splice(index, 1)
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
        // console.log(error)
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
    },
    filterVegetation (text) {
      this.filteredVegetation = this.vegetation.filter((option) => {
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
    filterPart (text) {
      this.filteredVegetation = this.vegetation.filter((option) => {
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
    filterZones (text) {
      this.filteredLegalZones = this.legalZones.filter((option) => {
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
    filterSubZones (text) {
      this.filteredSubZones = this.subZones.filter((option) => {
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
    filterOpZone (text) {
      this.filteredOpZones = this.opZones.filter((option) => {
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
    filterPersonRecorrido () {
      // console.log(this.participant)
      this.options = this.participants.filter((option) => {
        return option.name
          .toString()
          .toLowerCase()
          .includes(this.participant.toLowerCase())
      })
    },
    deleteVehicles (object) {
      console.log(object)
    }
  }
}
</script>
