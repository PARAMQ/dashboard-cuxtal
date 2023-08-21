<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false" :can-cancel="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nueva opinión técnica
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <div class="divider">
              <strong>Datos generales del solicitante</strong>
            </div>
            <div class="columns">
              <div class="column is-6">
                <b-field label="Nombre de la persona física">
                  <b-input
                    v-model="form.individual"
                    name="persona física"
                    type="text"
                    required
                  />
                </b-field>
              </div>
              <div class="column is-flex is-justify-content-center">
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
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <b-field
                    label="Nombre del titular/representante de la persona moral"
                  >
                    <b-input
                      v-model="form.holder_name"
                      name="titular/representante de la persona moral"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
              </div>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <b-field label="Número de oficio">
                    <b-input
                      v-model="form.folium"
                      name="predio"
                      type="text"
                      required
                    />
                  </b-field>
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
                <b-field label="Nombre del promovente">
                  <b-input
                    v-model="form.applicant_name"
                    name="Nombre"
                    type="text"
                    required
                  />
                </b-field>
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
                <b-field label="Superficie solicitada(Ha)">
                  <b-input
                    v-model="form.surface_affected"
                    name="predio"
                    type="text"
                    required
                  />
                </b-field>
              </div>
            </div>
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
              <strong>Vegetación</strong>
            </div>
            <div>
              <b-field label="Vegetación">
                <b-taginput
                  v-model="form.vegetable"
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
                <div class="container">
                  <b-field label="Descripción breve de la coordenada">
                    <b-input v-model="coordinate.name" />
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
                  v-for="point in points"
                  :key="point.name"
                  class="container m-3"
                >
                  <div class="control">
                    <b-tag
                      type="is-primary"
                      attached
                      aria-close-label="Close tag"
                      closable
                      @close="deletePoint"
                      @click="viewPoint(point)"
                    >
                      {{ point.name }}
                    </b-tag>
                  </div>
                </div>
              </div>
              <div class="column is-8">
                <!--
                <GmapMap
                  :center="{ lat: 10, lng: 10 }"
                  :zoom="7"
                  style="width: 100%; height: 300px"
                >
                  <google-kml-layer
                    v-for="l in kmlLayers"
                    :key="l.id"
                    :url="l.url"
                    :clickable="true"
                    :preserve-viewport="true"
                  />
                </GmapMap>
                -->
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
                    <vl-geom-point :coordinates="point" />
                    <vl-style>
                      <vl-style-circle :radius="5">
                        <vl-style-fill color="red" />
                        <vl-style-stroke color="red" />
                      </vl-style-circle>
                    </vl-style>
                  </vl-feature>

                  <vl-feature>
                    <vl-geom-multi-point v-if="pointsMap.length > 0" :coordinates="pointsMap" />
                  </vl-feature>
                </vl-map>
              </div>
            </div>
            <div class="divider">
              <strong>Respuesta</strong>
            </div>
            <div>
              <div class="columns">
                <!--
                <div class="column">
                  <b-field label="Oficio de respuesta">
                    <b-input
                      v-model="form.other"
                      name="nivel"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                -->
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
                  <b-field label="Otro">
                    <b-input
                      v-model="form.other"
                      name="nivel"
                      type="text"
                      required
                    />
                  </b-field>
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
          </form>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <b-button @click="$emit('close')">
              Cancelar
            </b-button>
          </div>
          <div class="card-footer-item">
            <b-button type="is-success" @click="createIncident">
              Guardar
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'NewOT',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      kmlLayers: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml'
        }
      ],
      isLoading: false,
      form: {},
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
      zoom: 12,
      center: [0, 0],
      point: [-89.60984537598705, 20.85610769792424],
      coordinate: {
        name: '',
        x: 0,
        y: 0
      },
      pointsMap: [],
      points: []
    }
  },
  mounted () {
    // this.getVegetation()
    // this.getDependences()
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
    async createIncident () {
      try {
        this.isLoading = true
        const id = await this.$store.dispatch('modules/technicalOp/createOrUpdateTechnicalOp', this.form)
        if (this.fileOficio.name || this.fileRespuesta.name) {
          await this.uploadFiles(id)
        }
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Guardado!',
          type: 'is-success'
        })
        this.$emit('create')
      } catch (error) {
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getVegetation () {
      try {
        this.vegetation = await this.$store.dispatch(
          'modules/technicalOp/getTechnicalOps'
        )
        // console.log(this.vegetation)
        this.filterVegetable = this.vegetation
      } catch (error) {
        console.log(error)
      }
    },
    async getDependences () {
      try {
        this.dependences = await this.$store.dispatch('modules/coordinations/getCoordinations')
      } catch (error) {
        console.log(error)
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
    async uploadFiles (id) {
      const formData = new FormData()
      formData.append('idtechnical_opinion', id)
      if (this.fileOificio) {
        formData.append('request_doc', this.fileOficio)
      }
      if (this.fileRespuesta) {
        formData.append('response_doc', this.fileRespuesta)
      }
      try {
        await this.$store.dispatch('modules/technicalOp/uploadFiles', formData)
      } catch (error) {
        console.log(error)
      }
    },
    async getLegalEntity () {
      try {
        this.legalEntity = await this.$store.dispatch('modules/legalEntity/getLegalEntitys')
      } catch (error) {
        console.log(error)
      }
    },
    async getTypeLegalEntity () {
      try {
        this.typeLegalEntity = await this.$store.dispatch('modules/legalEntity/getTypeLegalEntitys')
      } catch (error) {
        console.log(error)
      }
    },
    async getAppMethod () {
      try {
        this.appMethod = await this.$store.dispatch('modules/apMethod/getApplicationMethods')
      } catch (error) {
        console.log(error)
      }
    },
    async getAppType () {
      try {
        this.appType = await this.$store.dispatch('modules/apType/getApplicantTypes')
      } catch (error) {
        console.log(error)
      }
    },
    async getRequestMotive () {
      try {
        this.requestMotive = await this.$store.dispatch('modules/requestMotive/getRequestMotives')
      } catch (error) {
        console.log(error)
      }
    },
    async getMotiveDescription () {
      try {
        this.motiveDescription = await this.$store.dispatch('modules/motiveDescription/getMotiveDescriptions')
      } catch (error) {
        console.log(error)
      }
    },
    async getTenure () {
      try {
        this.tenure = await this.$store.dispatch('modules/tenure/getTenures')
      } catch (error) {
        console.log(error)
      }
    },
    async getResponseOp () {
      try {
        this.responseOp = await this.$store.dispatch('modules/responseOp/getResponseOps')
      } catch (error) {
        console.log(error)
      }
    },
    addPoint () {
      if (this.coordinate.name && this.coordinate.name !== '') {
        if (this.pointsMap.length === 0) {
          const tempArrayPoints = [[this.point[0], this.point[1]]]
          this.pointsMap = tempArrayPoints
        } else {
          this.pointsMap.push([this.point[0], this.point[1]])
        }
        this.coordinate.x = this.point[0]
        this.coordinate.y = this.point[1]
        this.points.push(this.coordinate)
        this.coordinate = {
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
    }
  }
}
</script>

<style></style>
