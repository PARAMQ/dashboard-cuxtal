<template>
  <b-modal
    v-model="activeModal"
    :full-screen="true"
    :destroy-on-hide="false"
    :can-cancel="false"
  >
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="modal-card">
      <div class="modal-card-head">
        <p class="modal-card-title">
          Nueva denuncia
        </p>
      </div>
      <div class="modal-card-body">
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit">
            <div class="divider">
              <strong>Datos generales</strong>
            </div>
            <div class="columns">
              <div class="column">
                <BInputWithValidation
                  v-model="form.code"
                  label="Número de oficio"
                  name="número de oficio"
                  rules="required"
                  normal
                />
              </div>
              <div class="column">
                <b-field label="Fecha de oficio de denuncia">
                  <b-datepicker
                    v-model="form.date"
                    placeholder="Haz click aquí para seleccionar fecha"
                    icon="calendar-today"
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Fecha de recepción de denuncia">
                  <b-datepicker
                    v-model="form.date_reception"
                    placeholder="Haz click aquí para seleccionar fecha"
                    icon="calendar-today"
                  />
                </b-field>
              </div>
            </div>
            <div>
              <div class="columns">
                <div class="column is-9">
                  <b-field label="Dirección del predio">
                    <b-input
                      v-model="form.address"
                      name="predio"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Tenencia del predio">
                    <b-select
                      v-model="form.idtenure"
                      placeholder="Selecciona una opción"
                    >
                      <option
                        v-for="option in tenures"
                        :key="option.idtenure"
                        :value="option.idtenure"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <b-field horizontal label="Denuncia presentada ante">
                <b-select
                  v-model="form.iddepto"
                  placeholder="Seleccione una opción"
                >
                  <option
                    v-for="option in dependences"
                    :key="option.idcoordination"
                    :value="option.idcoordination"
                  >
                    {{ option.description }}
                  </option>
                </b-select>
              </b-field>
              <b-field horizontal label="Nivel de gobierno">
                <b-select
                  v-model="form.idgov_level"
                  placeholder="Seleccione una opción"
                >
                  <option
                    v-for="option in govLevels"
                    :key="option.idgov_level"
                    :value="option.idgov_level"
                  >
                    {{ option.description }}
                  </option>
                </b-select>
              </b-field>
              <b-field horizontal label="Ilícito ambiental denunciado">
                <b-select
                  v-model="form.idilicit_denounced"
                  placeholder="Seleccione una opción"
                >
                  <option
                    v-for="option in ilicits"
                    :key="option.idilicit_denounced"
                    :value="option.idilicit_denounced"
                  >
                    {{ option.description }}
                  </option>
                </b-select>
              </b-field>
            </div>
            <div class="divider">
              <strong>Vegetación</strong>
            </div>
            <div>
              <b-field label="Vegetación afectada">
                <b-taginput
                  v-model="form.complaint_va"
                  :data="filterVegetable"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterVegetableFun"
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
            <!--
          <div class="divider">
            <strong>Alcances</strong>
          </div>
          -->
            <div class="divider">
              <strong>Zonas</strong>
            </div>
            <div>
              <b-field horizontal label="Zonas de vigilancia">
                <b-taginput
                  v-model="form.idoperative_zone"
                  :data="filteredOpZone"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterOpZone"
                >
                  <template v-slot="props">
                    <strong>{{ props.option.description }}</strong>
                  </template>
                  <template #empty>
                    Sin resultados
                  </template>
                </b-taginput>
              </b-field>
              <b-field horizontal label="Zonificación PM">
                <b-taginput
                  v-model="form.idzoning"
                  :data="filteredLegalZones"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterLegalZone"
                >
                  <template v-slot="props">
                    <strong>{{ props.option.description }}</strong>
                  </template>
                  <template #empty>
                    Sin resultados
                  </template>
                </b-taginput>
              </b-field>
              <b-field horizontal label="Subzoninifcación PM">
                <b-taginput
                  v-model="form.idsubzoning"
                  :data="filteredSubZones"
                  field="description"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterSubzone"
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
                    :center.sync="center"
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
              <strong>Seguimiento</strong>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <b-field horizontal label="Oficio de respuesta">
                    <b-input
                      v-model="form.description"
                      name="oficio de respuesta"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field horizontal label="Fecha de respuesta">
                    <b-datepicker
                      v-model="form.response_date"
                      placeholder="Seleccione una fecha"
                      icon="calendar-today"
                      editable
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field horizontal label="Respuesta">
                    <b-select
                      v-model="form.response"
                      placeholder="Seleccione una opción"
                    >
                      <option
                        v-for="option in responses"
                        :key="option.idresponse"
                        :value="option.idresponse"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="divider">
              <strong>Documentos</strong>
            </div>
            <div class="columns has-text-centered">
              <div class="column is-flex is-justify-content-center">
                <b-field label="Oficio de denuncia">
                  <b-field
                    class="file is-primary"
                    :class="{ 'has-name': !!fileDenuncia }"
                  >
                    <b-upload
                      v-model="fileDenuncia"
                      class="file-label"
                      rounded
                    >
                      <span class="file-cta">
                        <b-icon class="file-icon" icon="upload" />
                        <span class="file-label">{{
                          fileDenuncia.name || 'Subir archivo'
                        }}</span>
                      </span>
                    </b-upload>
                  </b-field>
                </b-field>
              </div>
              <div class="column is-flex is-justify-content-center">
                <b-field label="Oficio de respuesta">
                  <b-field
                    class="file is-primary"
                    :class="{ 'has-name': !!fileRespuesta }"
                  >
                    <b-upload
                      v-model="fileRespuesta"
                      class="file-label"
                      rounded
                    >
                      <span class="file-cta">
                        <b-icon class="file-icon" icon="upload" />
                        <span class="file-label">{{
                          fileRespuesta.name || 'Subir archivo'
                        }}</span>
                      </span>
                    </b-upload>
                  </b-field>
                </b-field>
              </div>
              <div class="column is-flex is-justify-content-center">
                <b-field label="Conclusión de trámite">
                  <b-field
                    class="file is-primary"
                    :class="{ 'has-name': !!fileTramite }"
                  >
                    <b-upload
                      v-model="fileTramite"
                      class="file-label"
                      rounded
                    >
                      <span class="file-cta">
                        <b-icon class="file-icon" icon="upload" />
                        <span class="file-label">{{
                          fileTramite.name || 'Subir archivo'
                        }}</span>
                      </span>
                    </b-upload>
                  </b-field>
                </b-field>
              </div>
            </div>
            <ButtonGroup
              :handle-submit="handleSubmit"
              saving
              @save="createOrUpdate"
              @cancel="close"
            />
          </form>
        </ValidationObserver>
      </div>
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
  name: 'NewIncident',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isLoading: false,
      form: {},
      tenenciaPredio: [
        {
          id: 1,
          description: 'Privado'
        },
        {
          id: 2,
          description: 'Publico'
        }
      ],
      fileRespuesta: {},
      fileTramite: {},
      fileDenuncia: {},
      vegetation: [],
      filterVegetable: [],
      dependences: [],
      legalZones: [],
      subZones: [],
      opZones: [],
      filteredOpZone: [],
      filteredLegalZones: [],
      filteredSubZones: [],
      ilicits: [],
      govLevels: [],
      tenures: [],
      responses: [],
      formCoord: {},
      isSwitched: true,
      temporalPoint: [224190.791, 2311022.379],
      ViewPoint: [-89.60984537598705, 20.85610769792424],
      pointsMap: [[-89.60984537598705, 20.85610769792424]],
      points: [],
      idPoints: [],
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
  watch: {
    activeModal (newVal, oldVal) {
      if (newVal) {
        this.$buefy.snackbar.open('Recuerda subir los documentos en PDF.')
      }
    }
  },
  mounted () {
    this.getVegetation()
    this.getDependences()
    this.getLegalZones()
    this.getSubZones()
    this.getOpZones()
    this.getTenures()
    this.getGovLevels()
    this.getIlicitsDenounced()
    this.getResponses()
    this.getUser()
  },
  methods: {
    close () {
      this.form = {}
      this.fileDenuncia = {}
      this.fileRespuesta = {}
      this.fileTramite = {}
      this.$emit('close')
    },
    async getUser () {
      try {
        const res = await this.$store.dispatch('modules/users/getData')
        this.form.iduser = res.idusers
      } catch (error) {
        // console.log(error)
      }
    },
    async createOrUpdate () {
      try {
        this.isLoading = true
        this.form.complaint_coordinates = this.points
        const temporalVa = this.form.complaint_va
        delete this.form.complaint_va
        const res = await this.$store.dispatch(
          'modules/complaint/createOrUpdateComplaint',
          this.form
        )
        if (temporalVa && temporalVa.length > 0) {
          this.form.complaint_va = temporalVa.map((x) => {
            const temporal = {
              idva: x.idva,
              idcomplaint: res
            }
            return temporal
          })
          this.form.idcomplaint = res
          await this.$store.dispatch(
            'modules/complaint/createOrUpdateComplaint',
            this.form
          )
        }
        if (
          this.fileDenuncia.name ||
          this.fileRespuesta.name ||
          this.fileTramite.name
        ) {
          await this.uploadFiles(this.form.code, res)
        }
        this.form = {}
        this.fileDenuncia = {}
        this.fileRespuesta = {}
        this.fileTramite = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Denuncia guardada!',
          type: 'is-success'
        })
        this.$emit('save')
      } catch (error) {
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        // console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async uploadFiles (code, id) {
      try {
        const formData = new FormData()
        formData.append('idcomplaint', id)
        if (this.fileDenuncia.name) {
          const temporalName = 'oficioDenuncia_' + code + '_' + this.fileDenuncia.name
          const temporalDenuncia = new File([this.fileDenuncia], temporalName, { type: this.fileDenuncia.type })
          formData.append('complaint_doc', temporalDenuncia)
          this.fileDenuncia = {}
        }
        if (this.fileRespuesta.name) {
          const temporalName = 'oficioRespuesta_' + code + '_' + this.fileRespuesta.name
          const temporalRespuesta = new File([this.fileRespuesta], temporalName, { type: this.fileRespuesta.type })
          formData.append('response_doc', temporalRespuesta)
          this.fileRespuesta = {}
        }
        if (this.fileTramite.name) {
          const temporalName = 'oficioTramite_' + code + '_' + this.fileTramite.name
          const temporalTramite = new File([this.fileTramite], temporalName, { type: this.fileTramite.type })
          formData.append('tramit_conlusion', temporalTramite)
          this.fileTramite = {}
        }
        await this.$store.dispatch(
          'modules/complaint/updateFilesComplaint',
          formData
        )
      } catch (error) {
        // console.log(error)
      }
    },
    async getVegetation () {
      try {
        this.vegetation = await this.$store.dispatch(
          'modules/vegetation/getVegetations'
        )
        // // console.log(this.vegetation)
        this.filterVegetable = this.vegetation
      } catch (error) {
        // console.log(error)
      }
    },
    async getDependences () {
      try {
        this.dependences = await this.$store.dispatch(
          'modules/coordinations/getCoordinations'
        )
        // // console.log(this.dependences)
      } catch (error) {
        // console.log(error)
      }
    },
    async getResponses () {
      try {
        this.responses = await this.$store.dispatch(
          'modules/response/getResponses'
        )
      } catch (error) {
        // console.log(error)
      }
    },
    async getTenures () {
      try {
        this.tenures = await this.$store.dispatch('modules/tenure/getTenures')
      } catch (error) {
        // console.log(error)
      }
    },
    async getGovLevels () {
      try {
        this.govLevels = await this.$store.dispatch(
          'modules/gobLevel/getGobLevels'
        )
      } catch (error) {
        // console.log(error)
      }
    },
    async getIlicitsDenounced () {
      try {
        this.ilicits = await this.$store.dispatch(
          'modules/ilicitDenounced/getIlicitDenounceds'
        )
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
        this.filteredOpZone = this.opZones
      } catch (error) {
        // console.log(error)
      }
    },
    filterVegetableFun (text) {
      this.filterVegetable = this.vegetation.filter((option) => {
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
      this.filteredOpZone = this.opZones.filter((option) => {
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
    filterLegalZone (text) {
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
    filterSubzone (text) {
      this.filteredSubZone = this.subZones.filter((option) => {
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
    addPoint () {
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
      this.ViewPoint = this.convertCoordinatesToUtm(this.temporalPoint)
    }
  }
}
</script>

<style></style>
