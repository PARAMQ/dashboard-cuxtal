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
          Opinión técnica {{ form.folium }}
        </p>
      </div>
      <div class="modal-card-body">
        <form>
          <div class="divider">
            <strong>Datos generales del solicitante</strong>
          </div>
          <div class="columns">
            <div class="column is-4">
              <BInputWithValidation
                v-model="form.individual"
                label="Nombre de la persona física"
                name="persona física"
                normal
                disabled
              />
            </div>
            <div class="column is-flex is-justify-content-center">
              <b-field label="Nombre de la persona moral">
                <b-tag size="is-medium">
                  {{
                    form.legal_entity ? form.legal_entity : 'Dato no asignado'
                  }}
                </b-tag>
              </b-field>
            </div>
            <div
              v-if="form.idlegal_entity"
              class="column is-flex is-justify-content-center"
            >
              <b-field label="Tipo de persona moral">
                <b-tag size="is-medium">
                  {{
                    form.type_legal_entity
                      ? form.type_legal_entity
                      : 'Dato no asignado'
                  }}
                </b-tag>
              </b-field>
            </div>
          </div>
          <div>
            <div class="columns">
              <div class="column">
                <BInputWithValidation
                  v-model="form.holder_name"
                  label="Nombre del titular/representante de la persona moral"
                  name="titular/representante de la persona moral"
                  normal
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            <div class="columns">
              <div class="column">
                <BInputWithValidation
                  v-model="form.folium"
                  label="Número de oficio"
                  name="número de oficio"
                  normal
                  disabled
                />
              </div>
              <div class="column">
                <b-field label="Medio de solicitud">
                  <b-tag size="is-medium">
                    {{
                      form.application_method
                        ? form.application_method
                        : 'Dato no asignado'
                    }}
                  </b-tag>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Fecha de solicitud">
                  <b-datepicker
                    v-model="form.application_date"
                    placeholder="Selecciona una fecha"
                    icon="calendar-today"
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Fecha de recepción de solicitud">
                  <b-datepicker
                    v-model="form.reception_date"
                    placeholder="Selecciona una fecha"
                    icon="calendar-today"
                  />
                </b-field>
              </div>
            </div>
          </div>
          <div class="divider">
            <strong>Información extra</strong>
          </div>
          <div class="columns">
            <div class="column is-9">
              <BInputWithValidation
                v-model="form.applicant_name"
                label="Nombre del promovente"
                name="nombre del promovente"
                normal
                disabled
              />
            </div>
            <div class="column">
              <b-field label="Tipo de promovente">
                <b-tag size="is-medium">
                  {{
                    form.applicant_type ? form.applicant_type : 'Dato no asignado'
                  }}
                </b-tag>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field label="Motivo de la solicitud">
                <b-tag size="is-medium">
                  {{
                    form.request_motive ? form.request_motive : 'Dato no asignado'
                  }}
                </b-tag>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Descripción del motivo">
                <b-tag size="is-medium">
                  {{
                    form.motive_description
                      ? form.motive_description
                      : 'Dato no asignado'
                  }}
                </b-tag>
              </b-field>
            </div>
            <div class="column">
              <BInputWithValidation
                v-model="form.surface_affected"
                label="Superficie solicitada(Ha)"
                name="superficie solicitada(Ha)"
                normal
                disabled
              />
            </div>
          </div>
          <div class="columns">
            <div class="column is-9">
              <BInputWithValidation
                v-model="form.address"
                label="Dirección del predio"
                name="dirección del predio"
                normal
                disabled
              />
            </div>
            <div class="column">
              <b-field label="Tenencia del predio">
                <b-tag size="is-medium">
                  {{
                    form.tenure ? form.tenure : 'Dato no asignado'
                  }}
                </b-tag>
              </b-field>
            </div>
          </div>
          <div class="divider">
            <strong>Tablajes</strong>
          </div>
          <div>
            <b-field label="tablajes">
              <b-taginput
                v-model="form.list_techop_cadastral_record"
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
            <b-field label="Vegetación">
              <b-taginput
                v-model="form.list_va"
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
                    v-model="formCoord.x"
                    step="0.000000000000000001"
                    :controls="false"
                  />
                </b-field>
                <b-field :label="isSwitched ? 'Latitud' : 'Coordenada Y'">
                  <b-numberinput
                    v-model="formCoord.y"
                    step="0.000000000000000001"
                    :controls="false"
                  />
                </b-field>
              </div>
              <div class="container m-3 has-text-centered">
                <b-button type="is-success is-light" @click="updatePoint">
                  Actualizar coordenada
                </b-button>
                <b-button type="is-info is-light" @click="viewPoint">
                  Ver punto
                </b-button>
              </div>
              <div
                v-for="pointCoord in form.list_coordinates"
                :key="pointCoord.idtech_op_coordinates"
                class="container m-4"
              >
                <div class="control">
                  <b-tag
                    type="is-primary"
                    attached
                    aria-close-label="Close tag"
                    closable
                    @close="deletePoint"
                    @click="editPoint(pointCoord)"
                  >
                    {{ pointCoord.description }}
                  </b-tag>
                </div>
              </div>
              <!--
              <h1>Tablajes seleccionados (haz click sobre uno de ellos para visualizarlo en el mapa)</h1>
              <div class="level">
                <div
                  class="level-item m-3"
                  v-for="tablaje in form.list_techop_cadastral_record"
                  :key="tablaje.description"
                >
                  <div class="control">
                    <b-tag
                      :type="selectVectorId ? (selectVectorId === tablaje.idcadastral_record ? 'is-primary' : 'is-light') : 'is-light'"
                      attached
                      aria-close-label="Close tag"
                      @click="viewVector(tablaje)"
                    >
                      {{ tablaje.name }}
                    </b-tag>
                  </div>
                </div>
              </div-->
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

                <vl-feature v-if="viewCoords">
                  <vl-geom-multi-point :coordinates="pointsMap" />
                  <vl-style>
                    <vl-style-circle :radius="5">
                      <vl-style-fill color="red" />
                      <vl-style-stroke color="red" />
                    </vl-style-circle>
                  </vl-style>
                </vl-feature>

                <vl-feature v-if="activeViewEdit">
                  <vl-geom-point :coordinates="ViewPoint" />
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

                <vl-layer-vector v-if="viewVectors">
                  <vl-source-vector :features.sync="vector" />
                  <vl-style-box>
                    <vl-style-stroke color="red" :width="3" />
                    <vl-style-fill color="rgba(255,255,255,1)" />
                  </vl-style-box>
                </vl-layer-vector>
              </vl-map>
            </div>
          </div>
          <div class="divider">
            <strong>Respuesta</strong>
          </div>
          <div>
            <div class="columns">
              <div class="column">
                <b-field label="Respuesta">
                  <b-tag size="is-medium">
                    {{
                      form.response_op ? form.response_op : 'Dato no asignado'
                    }}
                  </b-tag>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Fecha de respuesta">
                  <b-datepicker
                    v-model="form.response_date"
                    placeholder="Selecciona una fecha"
                    icon="calendar-today"
                  />
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <BInputWithValidation
                  v-model="form.other"
                  label="Otro"
                  name="otro"
                  normal
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="divider">
            <strong>Documentos</strong>
          </div>
          <div class="columns has-text-centered">
            <div class="column is-flex is-justify-content-center">
              <b-field label="Oficio/escrito de solicitud">
                <b-button
                  v-if="form.request_doc"
                  @click="downloadFile(form.request_doc, 'oficio.pdf')"
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
                  @click="downloadFile(form.response_doc, 'respuesta.pdf')"
                >
                  Descargar archivo
                </b-button>
                <b-tag v-else>
                  Sin archivo
                </b-tag>
              </b-field>
            </div>
          </div>
          <br>
        </form>
        <div class="container m-2 has-text-centered">
          <b-button @click="close">
            <strong>Cerrar</strong>
          </b-button>
        </div>
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
  name: 'ViewOpinion',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    },
    objectTech: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  data () {
    return {
      isLoading: false,
      catastralRecord: [],
      form: {},
      viewVectors: false,
      vector: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: []
          }
        }
      ],
      tenenciaPredio: [],
      dependences: [],
      fileOficio: {},
      fileRespuesta: {},
      vegetation: [],
      filterVegetable: [],
      legalEntity: [],
      typeLegalEntity: [],
      appMethod: [],
      appType: [],
      requestMotive: [],
      motiveDescription: [],
      responseOp: [],
      tenure: [],
      isSwitched: true,
      formCoord: {},
      temporalPoint: [224190.791, 2311022.379],
      ViewPoint: [-89.60984537598705, 20.85610769792424],
      activeViewEdit: false,
      pointsMap: [[-89.60984537598705, 20.85610769792424]],
      viewCoords: false,
      points: [],
      idPoints: [],
      zoom: 12,
      center: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      tablaje: [],
      filterTablaje: [],
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
        this.getTechOp(this.objectTech)
      }
    }
  },
  mounted () {
    this.getVegetation()
    // this.getDependences()
    this.getLegalEntity()
    this.getTypeLegalEntity()
    this.getAppMethod()
    this.getAppType()
    this.getRequestMotive()
    this.getMotiveDescription()
    this.getTenure()
    this.getResponseOp()
    this.getTablaje()
  },
  methods: {
    async getTablaje () {
      try {
        this.tablaje = []
        const res = await this.$store.dispatch('modules/tablaje/getTablajes')
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
          option.name.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    close () {
      this.form = {}
      this.pointsMap = false
      this.viewCoords = false
      this.vector = [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: []
          }
        }
      ]
      this.viewVectors = false
      this.$emit('close')
    },
    viewVector (object) {
      if (object.coordinates) {
        this.selectVectorId = object.idcadastral_record
        this.vector = [
          {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [JSON.parse(object.coordinates)]
            }
          }
        ]
        this.selectVector = true
      }
      console.log(object)
    },
    async getTechOp (object) {
      try {
        const res = await this.$store.dispatch(
          'modules/technicalOp/getInfoTechnicalOp',
          object.idtechnical_opinion
        )
        res.application_date = res.application_date
          ? new Date(res.application_date)
          : null
        res.response_date = res.response_date
          ? new Date(res.response_date)
          : null
        res.reception_date = res.reception_date
          ? new Date(res.reception_date)
          : null
        if (res.list_coordinates && res.list_coordinates.length > 0) {
          this.viewCoords = false
          const temporalCoords = res.list_coordinates.map((x) => {
            const point = [x.x, x.y]
            const convertPoint = this.convertCoordinatesToUtm(point)
            return convertPoint
          })
          this.pointsMap = temporalCoords
          this.viewCoords = true
        }
        if (
          this.objectTech.list_techop_cadastral_record &&
          this.objectTech.list_techop_cadastral_record.length > 0
        ) {
          const temporal = this.objectTech.list_techop_cadastral_record.map(
            (object) => {
              const cadastral = this.tablaje.find(
                (x) => x.idcadastral_record === object.idcadastral_record
              )
              return cadastral
            }
          )
          const tablajesConPoligono = temporal.filter(x => x.coordinates !== null)
          if (tablajesConPoligono.length > 0) {
            const temporalCoords = tablajesConPoligono.map(x => JSON.parse(x.coordinates))
            this.vector[0].geometry.coordinates = temporalCoords
            this.viewVectors = true
          } else {
            this.$buefy.toast.open({
              duration: 6000,
              message: 'Este registro contiene tablajes que no tienen polígonos registrados en el sistema',
              type: 'is-warning'
            })
          }
          res.list_techop_cadastral_record = temporal
        }
        const type = this.typeLegalEntity.find(
          (x) => x.idtype_legal_entity === res.idtype_legal_entity
        )
        res.type_legal_entity = type ? type.description : null
        this.form = res
        // // console.log(res)
      } catch (error) {}
    },
    // Crear opinión técnica
    async createOrUpdate () {
      try {
        this.isLoading = true
        // console.log(this.form)
        const id = await this.$store.dispatch(
          'modules/technicalOp/createOrUpdateTechnicalOp',
          this.form
        )
        if (this.points && this.points.length > 0) {
          this.form.idtechnical_opinion = id
          const temporalPoints = this.points.map((x) => {
            x.idtech_op_coordinates = id
            return x
          })
          this.form.list_coordinates = temporalPoints
          await this.$store.dispatch(
            'modules/technicalOp/createOrUpdateTechnicalOp',
            this.form
          )
        }
        if (this.fileOficio.name || this.fileRespuesta.name) {
          await this.uploadFiles(id)
        }
        this.form = {}
        this.points = []
        this.fileOficio = {}
        this.fileRespuesta = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Guardado!',
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
    async uploadFiles (id) {
      const formData = new FormData()
      formData.append('idtechnical_opinion', id)
      // console.log(this.fileOficio)
      if (this.fileOficio.name) {
        formData.append('request_doc', this.fileOficio)
      }
      if (this.fileRespuesta.name) {
        formData.append('response_doc', this.fileRespuesta)
      }
      try {
        await this.$store.dispatch('modules/technicalOp/uploadFiles', formData)
      } catch (error) {
        // // console.log(error)
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
    // Obtener catálogos
    async getVegetation () {
      try {
        this.vegetation = await this.$store.dispatch(
          'modules/vegetation/getVegetations'
        )
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
    async getLegalEntity () {
      try {
        this.legalEntity = await this.$store.dispatch(
          'modules/legalEntity/getLegalEntitys'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getTypeLegalEntity () {
      try {
        this.typeLegalEntity = await this.$store.dispatch(
          'modules/legalEntity/getTypeLegalEntitys'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getAppMethod () {
      try {
        this.appMethod = await this.$store.dispatch(
          'modules/apMethod/getApplicationMethods'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getAppType () {
      try {
        this.appType = await this.$store.dispatch(
          'modules/apType/getApplicantTypes'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getRequestMotive () {
      try {
        this.requestMotive = await this.$store.dispatch(
          'modules/requestMotive/getRequestMotives'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getMotiveDescription () {
      try {
        this.motiveDescription = await this.$store.dispatch(
          'modules/motiveDescription/getMotiveDescriptions'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getTenure () {
      try {
        this.tenure = await this.$store.dispatch('modules/tenure/getTenures')
      } catch (error) {
        // // console.log(error)
      }
    },
    async getResponseOp () {
      try {
        this.responseOp = await this.$store.dispatch(
          'modules/responseOp/getResponseOps'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    // Coordenadas
    addPoint () {
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
          description: '',
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
      this.activeViewEdit = false
      this.ViewPoint = this.convertCoordinatesToUtm([this.formCoord.x, this.formCoord.y])
      this.activeViewEdit = true
    },
    editPoint (point) {
      this.activeViewEdit = false
      this.ViewPoint = this.convertCoordinatesToUtm([point.x, point.y])
      this.formCoord = point
      this.activeViewEdit = true
    },
    async updatePoint () {
      this.activeViewEdit = false
      this.isLoading = true
      const tempCoords = this.form.list_coordinates
      this.form.list_coordinates = tempCoords.map((x) => {
        if (x.idtech_op_coordinates === this.form.idtech_op_coordinates) {
          return this.form
        } else {
          return x
        }
      })
      try {
        await this.$store.dispatch(
          'modules/technicalOp/createOrUpdateTechnicalOp',
          this.form
        )
        this.getTechOp(this.objectTech)
        this.isLoading = false
      } catch (error) {
        // console.log(error)
      }
    }
  }
}
</script>

<style></style>
