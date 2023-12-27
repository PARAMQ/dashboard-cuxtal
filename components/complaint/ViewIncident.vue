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
          Visualizar Denuncia
        </p>
      </div>
      <div class="modal-card-body">
        <form @submit.prevent="handleSubmit">
          <div class="divider">
            <strong>Datos generales</strong>
          </div>
          <div class="columns">
            <div class="column">
              <b-field label="Número de oficio">
                <p>{{ form.code }}</p>
              </b-field>
            </div>
            <div class="column">
              <p v-if="form.binnacle">
                <strong>Bitácora relacionada</strong>: {{ form.binnacle }}
              </p>
              <p v-else>
                No hay relación con alguna bitácora
              </p>
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
                  <p>{{ form.address }}</p>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Tenencia del predio">
                  <b-tag size="is-medium">
                    {{
                      form.idtenure
                        ? form.tenure.description
                        : 'Sin tenencia de predio'
                    }}
                  </b-tag>
                </b-field>
              </div>
            </div>
            <b-field horizontal label="Denuncia presentada ante">
              <b-tag size="is-medium">
                {{
                  form.iddepto
                    ? form.depto.description
                    : 'Sin dependencia seleccionada'
                }}
              </b-tag>
            </b-field>
            <b-field horizontal label="Nivel de gobierno">
              <b-tag size="is-medium">
                {{
                  form.idgov_level
                    ? form.level.description
                    : 'Sin dependencia seleccionada'
                }}
              </b-tag>
            </b-field>
            <b-field horizontal label="Ilícito ambiental denunciado">
              <b-tag size="is-medium">
                {{
                  form.idilicit_denounced
                    ? form.ilicit.description
                    : 'Sin dependencia seleccionada'
                }}
              </b-tag>
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
                :closable="false"
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
                field="description"
                autocomplete
                :open-on-focus="true"
                :closable="false"
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
                :closable="false"
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
                v-model="form.zoning"
                :data="filteredLegalZones"
                field="description"
                autocomplete
                :open-on-focus="true"
                :closable="false"
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
                v-model="form.list_subzoning_complaint"
                :data="filteredSubZones"
                field="description"
                autocomplete
                :open-on-focus="true"
                :closable="false"
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

                <vl-feature v-if="activePoints">
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
          <div class="divider">
            <strong>Seguimiento</strong>
          </div>
          <div>
            <div class="columns">
              <div class="column">
                <b-field horizontal label="Oficio de respuesta">
                  <b-input
                    v-model="form.description"
                    name="nivel"
                    type="text"
                    required
                    disabled
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
                <b-button
                  v-if="form.complaint_doc"
                  @click="downloadFile(form.complaint_doc, 'denuncia')"
                >
                  Descargar archivo
                </b-button>
                <b-tag v-else>
                  Sin archivo
                </b-tag>
              </b-field>
            </div>
            <div class="column is-flex is-justify-content-center">
              <b-field label="Oficio de respuesta">
                <b-button
                  v-if="form.response_doc"
                  @click="downloadFile(form.response_doc, 'respuesta')"
                >
                  Descargar archivo
                </b-button>
                <b-tag v-else>
                  Sin archivo
                </b-tag>
              </b-field>
            </div>
            <div class="column is-flex is-justify-content-center">
              <b-field label="Conclusión de trámite">
                <b-button
                  v-if="form.tramit_conclusion"
                  @click="downloadFile(form.tramit_conclusion, 'tramite')"
                >
                  Descargar archivo
                </b-button>
                <b-tag v-else>
                  Sin archivo
                </b-tag>
              </b-field>
            </div>
          </div>
          <div class="container m-2 has-text-centered">
            <b-button @click="close">
              <strong>Cerrar</strong>
            </b-button>
          </div>
        </form>
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
    },
    incidentObject: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
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
      tablaje: [],
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
      activePoints: false,
      zoom: 12,
      filterTablaje: [],
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
        // this.$buefy.snackbar.open('Recuerda subir los documentos en PDF.')
        this.getIncident(this.incidentObject)
      }
    }
  },
  mounted () {
    this.getTablaje()
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
      this.activePoints = false
      this.pointsMap = []
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
    async getIncident (object) {
      try {
        this.isLoading = true
        const res = await this.$store.dispatch(
          'modules/complaint/getInfoComplaint',
          object.idcomplaint
        )
        res.date = res.date ? new Date(res.date) : null
        res.date_reception = res.date_reception
          ? new Date(res.date_reception)
          : null
        res.response_date = res.response_date
          ? new Date(res.response_date)
          : null
        res.tenure = res.idtenure
          ? this.tenures.find((x) => x.idtenure === res.idtenure)
          : null
        res.depto = res.iddepto
          ? this.dependences.find((x) => x.idcoordination === res.iddepto)
          : null
        res.level = res.idgov_level
          ? this.govLevels.find((x) => x.idgov_level === res.idgov_level)
          : null
        res.ilicit = res.idilicit_denounced
          ? this.ilicits.find(
            (x) => x.idilicit_denounced === res.idilicit_denounced
          )
          : null
        if (
          res.list_subzoning_complaint &&
          res.list_subzoning_complaint.length > 0
        ) {
          res.zoning = []
          console.log(this.legalZones)
          this.legalZones.forEach((zone) => {
            console.log(zone)
            const result = res.list_subzoning_complaint.find(
              (x) => x.idzoning === zone.idzoning
            )
            if (result) {
              res.zoning.push(zone)
            }
          })
        }
        if (
          res.list_complaint_cadastral_record &&
          res.list_complaint_cadastral_record.length > 0
        ) {
          const temporal = res.list_complaint_cadastral_record.map((object) => {
            const cadastral = this.tablaje.find(
              (x) => x.idcadastral_record === object.idcadastral_record
            )
            return cadastral
          })
          res.list_complaint_cadastral_record = temporal
        }
        if (res.complaint_coordinates && res.complaint_coordinates.length > 0) {
          this.pointsMap = res.complaint_coordinates.map((x) => {
            const point = this.convertCoordinatesToUtm([x.x, x.y])
            return point
          })
          if (res.idbinnacle) {
            const binnacle = await this.$store.dispatch(
              'modules/binnacles/getBinnacle',
              res.idbinnacle
            )
            res.binnacle = binnacle.number
          }
          console.log(this.pointsMap)
          this.activePoints = true
        }
        // this.viewPoints(object.idcomplaint)
        this.form = res
        console.log(this.form)
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },
    async getTablaje () {
      try {
        this.tablaje = []
        const res = await this.$store.dispatch('modules/tablaje/getTablajes')
        this.tablaje = res
        this.filterTablaje = res
      } catch (error) {
        // console.log(error)
      }
    },

    filterTablajeFun (text) {
      this.filterTablaje = this.tablaje.filter((option) => {
        if (
          option.name &&
          option.name.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
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
        // console.log(error)
      }
    },
    async downloadFile (urlFile, type) {
      try {
        const response = await fetch(urlFile) // Reemplaza 'URL_DEL_ARCHIVO' con la URL real del archivo que deseas descargar.
        const blob = await response.blob()

        // Crea un objeto URL para el blob y crea un enlace temporal para la descarga.
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = type // Especifica el nombre del archivo que se descargará.
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error al descargar el archivo:', error)
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
    async viewPoints (option) {
      this.viewComplaint = false
      this.temporalPoints = [[-89.60984537598705, 20.85610769792424]]
      const complaint = await this.getComplaint(option)
      complaint.points = []
      if (
        complaint.complaint_coordinates &&
        complaint.complaint_coordinates.length > 0
      ) {
        const temporalPoints = complaint.complaint_coordinates
        temporalPoints.forEach((object) => {
          const point = [object.x, object.y]
          const pointConvert = this.convertCoordinatesToUtm(point)
          complaint.points.push(pointConvert)
        })
        this.temporalPoints = complaint.points
        this.viewComplaint = true
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
