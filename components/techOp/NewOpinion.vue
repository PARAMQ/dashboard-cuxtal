<template>
  <b-modal v-model="activeModal" :full-screen="true" :destroy-on-hide="false" :can-cancel="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="modal-card">
      <div class="modal-card-head">
        <p class="modal-card-title">
          Nueva opinión técnica
        </p>
      </div>
      <div class="modal-card-body">
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit">
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
                />
              </div>
              <div>
              </div>
              <div v-if="!isParticular" class="column is-flex is-justify-content-center">
                <b-field label="Nombre de la persona moral">
                  <b-select
                    v-model="form.idlegal_entity"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in legalEntity"
                      :key="option.idlegal_entity"
                      :value="option.idlegal_entity"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              <!---
              <div class="column is-flex is-justify-content-center">
                <b-field label="Tipo de persona moral">
                  <b-select
                    v-model="form.idtype_legal_entity"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in typeLegalEntity"
                      :key="option.idtype_legal_entity"
                      :value="option.idtype_legal_entity"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              -->
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <BInputWithValidation
                    v-model="form.holder_name"
                    label="Nombre del titular/representante de la persona moral"
                    name="titular/representante de la persona moral"
                    rules="required"
                    normal
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
                    rules="required"
                    normal
                  />
                </div>
                <div class="column">
                  <b-field label="Medio de solicitud">
                    <b-select
                      v-model="form.idapplication_method"
                      placeholder="Seleccione una opción"
                    >
                      <option
                        v-for="option in appMethod"
                        :key="option.idapplication_method"
                        :value="option.idapplication_method"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
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
                  rules="required"
                  normal
                />
              </div>
              <div class="column">
                <b-field label="Tipo de promovente">
                  <b-select
                    v-model="form.idapplicant_type"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in appType"
                      :key="option.idapplicant_type"
                      :value="option.idapplicant_type"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Motivo de la solicitud">
                  <b-select
                    v-model="form.idrequest_motive"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in requestMotive"
                      :key="option.idrequest_motive"
                      :value="option.idrequest_motive"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Descripción del motivo">
                  <b-select
                    v-model="form.idmotive_description"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in motiveDescription"
                      :key="option.idmotive_description"
                      :value="option.idmotive_description"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <BInputWithValidation
                  v-model="form.surface_affected"
                  label="Superficie solicitada(Ha)"
                  name="superficie solicitada(Ha)"
                  normal
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
                />
              </div>
              <div class="column">
                <b-field label="Tenencia del predio">
                  <b-select
                    v-model="form.idtenure"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in tenure"
                      :key="option.idtenure"
                      :value="option.idtenure"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
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

                  <vl-feature>
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
                        <vl-style-fill color="blue" />
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
              <strong>Respuesta</strong>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <b-field label="Respuesta">
                    <b-select
                      v-model="form.idresponse_op"
                      placeholder="Seleccione una opción"
                    >
                      <option
                        v-for="option in responseOp"
                        :key="option.idresponse_op"
                        :value="option.idresponse_op"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
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
                  <b-field
                    class="file is-primary"
                    :class="{ 'has-name': !!fileOficio }"
                  >
                    <b-upload v-model="fileOficio" class="file-label" rounded>
                      <span class="file-cta">
                        <b-icon class="file-icon" icon="upload" />
                        <span class="file-label">{{
                          fileOficio.name || 'Subir archivo'
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
            </div>
            <br>
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
  name: 'NewOpinion',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isParticular: false,
      isLoading: false,
      form: {},
      tenenciaPredio: [],
      dependences: [],
      fileOficio: {},
      fileRespuesta: {},
      vegetation: [],
      tablaje: [],
      filterTablaje: [],
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
    // this.getDependences()
    this.getTablaje()
    this.getLegalEntity()
    this.getTypeLegalEntity()
    this.getAppMethod()
    this.getAppType()
    this.getRequestMotive()
    this.getMotiveDescription()
    this.getTenure()
    this.getResponseOp()
  },
  methods: {
    close () {
      this.form = {}
      this.$emit('close')
    },
    // Crear opinión técnica
    async createOrUpdate () {
      try {
        this.isLoading = true
        console.log(this.form)
        this.form.list_coordinates = this.points ? this.points : null
        const id = await this.$store.dispatch('modules/technicalOp/createOrUpdateTechnicalOp', this.form)
        /*
        if (this.points && this.points.length > 0) {
          /*
          this.form.idtechnical_opinion = id
          const temporalPoints = this.points.map((x) => {
            x.idtech_op_coordinates = String(id)
            return x
          })
          this.form.list_coordinates = this.points
          await this.$store.dispatch('modules/technicalOp/createOrUpdateTechnicalOp', this.form)
        }
        */
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
        // console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async uploadFiles (id) {
      const formData = new FormData()
      formData.append('idtechnical_opinion', id)
      console.log(this.fileOficio)
      if (this.fileOficio.name) {
        formData.append('request_doc', this.fileOficio)
      }
      if (this.fileRespuesta.name) {
        formData.append('response_doc', this.fileRespuesta)
      }
      try {
        await this.$store.dispatch('modules/technicalOp/uploadFiles', formData)
      } catch (error) {
        // console.log(error)
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
        // console.log(error)
      }
    },
    async getDependences () {
      try {
        this.dependences = await this.$store.dispatch('modules/coordinations/getCoordinations')
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
    async getLegalEntity () {
      try {
        this.legalEntity = await this.$store.dispatch('modules/legalEntity/getLegalEntitys')
      } catch (error) {
        // console.log(error)
      }
    },
    async getTypeLegalEntity () {
      try {
        this.typeLegalEntity = await this.$store.dispatch('modules/legalEntity/getTypeLegalEntitys')
      } catch (error) {
        // console.log(error)
      }
    },
    async getAppMethod () {
      try {
        this.appMethod = await this.$store.dispatch('modules/apMethod/getApplicationMethods')
      } catch (error) {
        // console.log(error)
      }
    },
    async getAppType () {
      try {
        this.appType = await this.$store.dispatch('modules/apType/getApplicantTypes')
      } catch (error) {
        // console.log(error)
      }
    },
    async getRequestMotive () {
      try {
        this.requestMotive = await this.$store.dispatch('modules/requestMotive/getRequestMotives')
      } catch (error) {
        // console.log(error)
      }
    },
    async getMotiveDescription () {
      try {
        this.motiveDescription = await this.$store.dispatch('modules/motiveDescription/getMotiveDescriptions')
      } catch (error) {
        // console.log(error)
      }
    },
    async getTenure () {
      try {
        this.tenure = await this.$store.dispatch('modules/tenure/getTenures')
      } catch (error) {
        // console.log(error)
      }
    },
    async getResponseOp () {
      try {
        this.responseOp = await this.$store.dispatch('modules/responseOp/getResponseOps')
      } catch (error) {
        // console.log(error)
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
    async getTablaje () {
      try {
        this.tablaje = []
        const res = await this.$store.dispatch(
          'modules/tablaje/getTablajes'
        )
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
          option.name
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase())
        ) {
          return option
        }
      })
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
