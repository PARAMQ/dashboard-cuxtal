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
                <b-field label="Bitácora">
                  <b-autocomplete
                    :data="filterBinnacles"
                    icon="magnify"
                    clearable
                    field="number"
                    open-on-focus
                    @typing="filterBinnacle"
                    @select="selectBinnacle"
                  >
                    <template #empty>
                      No hay resultados
                    </template>
                  </b-autocomplete>
                </b-field>
                <b-tooltip
                  label="Si vinculas una bitácora, usará las zonas operativas, zonificación y subzonificación PM registrado en el."
                  position="is-right"
                >
                  <b-icon icon="help" size="is-small" />
                </b-tooltip>
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
              <strong>Tablajes</strong>
            </div>
            <div>
              <b-field label="tablajes">
                <b-taginput
                  v-model="form.list_complaint_cadastral_record"
                  :data="filterTablaje"
                  field="name"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterTablajeFun"
                >
                  <template v-slot="props">
                    <strong>{{ props.option.name }}</strong>
                  </template>
                  <template #empty>
                    Sin resultados
                  </template>
                </b-taginput>
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
                  field="cientificName"
                  autocomplete
                  :open-on-focus="true"
                  @typing="filterVegetableFun"
                >
                  <template v-slot="props">
                    <strong>{{
                      props.option.description
                        ? props.option.description
                        : 'sin nombre'
                    }}/{{
                      props.option.cientificName
                        ? props.option.cientificName
                        : 'sin nombre'
                    }}</strong>
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
                  v-model="form.list_complaint_operative_zone"
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
                <b-select v-model="legalZone" placeholder="Seleccciona una opción" @input="selectOption">
                  <option
                    v-for="option in legalZones"
                    :key="option.idzoning"
                    :value="option.idzoning"
                  >
                    {{ option.description }}
                  </option>
                </b-select>
              </b-field>
              <b-field horizontal label="Subzoninifcación PM">
                <b-taginput
                  v-model="form.list_subzoning_complaint"
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
              <b-tooltip
                label="La zonificación se obtiene de las subzonificaciones."
                position="is-right"
              >
                <b-icon icon="help" size="is-small" />
              </b-tooltip>
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
                    <b-input v-model="formCoord.description" />
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
                  :key="pointCoord.description"
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
                      {{ pointCoord.description }}
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

                  <vl-feature v-if="activeViewPoint">
                    <vl-geom-point :coordinates="ViewPoint" />
                    <vl-style>
                      <vl-style-circle :radius="5">
                        <vl-style-fill color="red" />
                        <vl-style-stroke color="red" />
                      </vl-style-circle>
                    </vl-style>
                  </vl-feature>

                  <vl-feature v-if="points.length > 0">
                    <vl-geom-multi-point :coordinates="pointsMap" />
                    <vl-style>
                      <vl-style-circle :radius="5">
                        <vl-style-fill color="green" />
                        <vl-style-stroke color="green" />
                      </vl-style-circle>
                    </vl-style>
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
                    <b-upload v-model="fileDenuncia" class="file-label" rounded>
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
                    <b-upload v-model="fileTramite" class="file-label" rounded>
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
      tablaje: [],
      filterTablaje: [],
      activeViewPoint: false,
      fileRespuesta: {},
      fileTramite: {},
      fileDenuncia: {},
      vegetation: [],
      filterVegetable: [],
      dependences: [],
      legalZones: [],
      legalZone: {},
      subZones: [],
      opZones: [],
      filteredOpZone: [],
      filteredLegalZones: [],
      filteredSubZones: [],
      binnacles: [],
      filterBinnacles: [],
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
        // console.log(this.form)
        this.$buefy.snackbar.open('Recuerda subir los documentos en PDF.')
      }
    }
  },
  mounted () {
    this.getBinnacles()
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
    this.getTablaje()
  },
  methods: {
    async getTablaje () {
      try {
        this.tablaje = []
        const res = await this.$store.dispatch(
          'modules/tablaje/getTablajes'
        )
        this.tablaje = res
        this.filterTablaje = res
      } catch (error) {
        // // console.log(error)
      }
    },
    filterTablajeFun (text) {
      this.filterTablaje = this.tablaje.filter((option) => {
        if (
          option.name &&
          option.name
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    close () {
      this.form = {}
      this.fileDenuncia = {}
      this.fileRespuesta = {}
      this.fileTramite = {}
      this.activeViewPoint = false
      this.pointsMap = [[-89.60984537598705, 20.85610769792424]]
      this.points = []
      this.$emit('close')
    },
    async getUser () {
      try {
        const res = await this.$store.dispatch('modules/users/getData')
        this.form.iduser = res.idusers
      } catch (error) {
        // // console.log(error)
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
          const res2 = await this.$store.dispatch(
            'modules/complaint/getInfoComplaint',
            res
          )
          // console.log(res2)
          res2.complaint_va = temporalVa.map((x) => {
            const temporal = {
              idva: x.idva,
              idcomplaint: res
            }
            return temporal
          })
          res2.idcomplaint = res
          await this.$store.dispatch(
            'modules/complaint/createOrUpdateComplaint',
            res2
          )
          // console.log(resfinal)
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
        this.activeViewPoint = false
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
        // // console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async uploadFiles (code, id) {
      try {
        const formData = new FormData()
        formData.append('idcomplaint', id)
        if (this.fileDenuncia.name) {
          const temporalName =
            'oficioDenuncia_' + code + '_' + this.fileDenuncia.name
          const temporalDenuncia = new File([this.fileDenuncia], temporalName, {
            type: this.fileDenuncia.type
          })
          formData.append('complaint_doc', temporalDenuncia)
          this.fileDenuncia = {}
        }
        if (this.fileRespuesta.name) {
          const temporalName =
            'oficioRespuesta_' + code + '_' + this.fileRespuesta.name
          const temporalRespuesta = new File(
            [this.fileRespuesta],
            temporalName,
            { type: this.fileRespuesta.type }
          )
          formData.append('response_doc', temporalRespuesta)
          this.fileRespuesta = {}
        }
        if (this.fileTramite.name) {
          const temporalName =
            'oficioTramite_' + code + '_' + this.fileTramite.name
          const temporalTramite = new File([this.fileTramite], temporalName, {
            type: this.fileTramite.type
          })
          formData.append('tramit_conlusion', temporalTramite)
          this.fileTramite = {}
        }
        await this.$store.dispatch(
          'modules/complaint/updateFilesComplaint',
          formData
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getVegetation () {
      try {
        this.vegetation = await this.$store.dispatch(
          'modules/vegetation/getVegetations'
        )
        // // // console.log(this.vegetation)
        this.filterVegetable = this.vegetation
      } catch (error) {
        // // console.log(error)
      }
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
    },
    async getResponses () {
      try {
        this.responses = await this.$store.dispatch(
          'modules/response/getResponses'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getTenures () {
      try {
        this.tenures = await this.$store.dispatch('modules/tenure/getTenures')
      } catch (error) {
        // // console.log(error)
      }
    },
    async getGovLevels () {
      try {
        this.govLevels = await this.$store.dispatch(
          'modules/gobLevel/getGobLevels'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getIlicitsDenounced () {
      try {
        this.ilicits = await this.$store.dispatch(
          'modules/ilicitDenounced/getIlicitDenounceds'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getLegalZones () {
      try {
        this.legalZones = await this.$store.dispatch('modules/zones/getZones')
        this.filteredLegalZones = this.legalZones
      } catch (error) {
        // // console.log(error)
      }
    },
    async getSubZones () {
      try {
        this.subZones = await this.$store.dispatch('modules/zones/getSubZones')
        this.filteredSubZones = this.subZones
      } catch (error) {
        // // console.log(error)
      }
    },
    async getOpZones () {
      try {
        this.opZones = await this.$store.dispatch(
          'modules/operativeZones/getZones'
        )
        this.filteredOpZone = this.opZones
      } catch (error) {
        // // console.log(error)
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
      this.activeViewPoint = false
      if (this.formCoord.description && this.formCoord.description !== '') {
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
      this.activeViewPoint = false
      this.ViewPoint = this.convertCoordinatesToUtm(this.temporalPoint)
      this.activeViewPoint = true
    },
    // bitácoras
    async getBinnacles () {
      try {
        const res = await this.$store.dispatch('modules/binnacles/getBinnacles')
        this.binnacles = res
        this.filterBinnacles = res
      } catch (error) {
        // console.log(error)
      }
    },
    filterBinnacle (text) {
      this.filterBinnacles = this.binnacles.filter((option) => {
        if (
          option.number &&
          option.number.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    selectOption (legalZone) {
      // console.log(legalZone)
      // console.log(this.subZones)
      this.filteredSubZones = this.subZones.filter((option) => {
        if (
          option.idzoning &&
          option.idzoning === legalZone) {
          return option
        }
      })
      // console.log(this.filteredSubZones)
    },
    selectBinnacle (option) {
      if (option) {
        // console.log(option)
        this.form.idbinnacle = option.idbinnacle
        if (option.list_operative_zones) {
          this.form.list_complaint_operative_zone =
            option.list_operative_zones.map((x) => {
              delete x.idbinnacle
              delete x.idoperative_zones_binnacle
              return x
            })
        }
        if (option.list_subzones) {
          this.form.list_subzoning_complaint = option.list_subzones.map((x) => {
            delete x.idbinnacle
            delete x.idsubzoning_binnacle
            return x
          })
        }
        if (option.list_vegetable_affected) {
          this.form.complaint_va = option.list_vegetable_affected.map((x) => {
            delete x.idbinnacle
            delete x.idva_binnacle
            delete x.ischecked
            return x
          })
        }
        if (option.coordinates_binnacle) {
          this.points = []
          option.coordinates_binnacle.forEach((point) => {
            // console.log(point)
            if (this.points.length === 0) {
              point.description = point.name
              delete point.idbinnacle
              delete point.idcoordinates
              const temporalPoint = this.convertCoordinatesToUtm([
                point.x,
                point.y
              ])
              this.pointsMap = [temporalPoint]
              this.points.push(point)
            } else if (
              !option.coordinates_binnacle.find(
                (x) => x.x === point.x && x.y === point.y
              )
            ) {
              point.description = point.name
              delete point.idbinnacle
              delete point.idcoordinates
              const temporalPoint = this.convertCoordinatesToUtm([
                point.x,
                point.y
              ])
              this.pointsMap.push(temporalPoint)
              this.points.push(point)
            }
          })
          // console.log(this.points)
        }
        // console.log(this.form)
      }
    }
  }
}
</script>

<style></style>
