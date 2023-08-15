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
                    v-model="form.namePersonFisic"
                    name="persona física"
                    type="text"
                    required
                  />
                </b-field>
              </div>
              <div class="column is-flex is-justify-content-center">
                <b-field label="Nombre de la persona moral">
                  <b-select
                    v-model="form.personMoral"
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
              </div>
              <div class="column is-flex is-justify-content-center">
                <b-field label="Tipo de persona moral">
                  <b-select
                    v-model="form.typePersonMoral"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in tiposPersonasMorales"
                      :key="option.id"
                      :value="option.id"
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
                      v-model="form.representanteMoral"
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
                      v-model="form.numberOficio"
                      name="predio"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Medio de solicitud">
                    <b-select
                      v-model="form.typeSolicitud"
                      placeholder="Seleccione una opción"
                    >
                      <option
                        v-for="option in tiposSolicitudes"
                        :key="option.id"
                        :value="option.id"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Fecha de solicitud">
                    <b-datepicker
                      v-model="form.dateSolicitud"
                      placeholder="Selecciona una fecha"
                      icon="calendar-today"
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Fecha de recepción de solicitud">
                    <b-datepicker
                      v-model="form.dateRecSolicitud"
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
                    v-model="form.namePromovente"
                    name="predio"
                    type="text"
                    required
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Tipo de promovente">
                  <b-select
                    v-model="form.typePromovente"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in tiposPromovente"
                      :key="option.id"
                      :value="option.id"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-6">
                <b-field label="Descripción del motivo">
                  <b-input
                    v-model="form.descripcionMotivo"
                    name="predio"
                    type="text"
                    required
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Motivo de la solicitud">
                  <b-select
                    v-model="form.motivoSolicitud"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in motivosSolicitud"
                      :key="option.id"
                      :value="option.id"
                    >
                      {{ option.description }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Superficie solicitada(Ha)">
                  <b-input
                    v-model="form.descripcionMotivo"
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
                    v-model="form.direccPredio"
                    name="predio"
                    type="text"
                    required
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Tenencia del predio">
                  <b-select
                    v-model="form.typePredio"
                    placeholder="Seleccione una opción"
                  >
                    <option
                      v-for="option in tiposPredios"
                      :key="option.id"
                      :value="option.id"
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
                -->
              </div>
            </div>
            <div class="divider">
              <strong>Respuesta</strong>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <b-field label="Oficio de respuesta">
                    <b-input
                      v-model="form.ofRespuesta"
                      name="nivel"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Respuesta">
                    <b-select
                      v-model="form.respuesta"
                      placeholder="Seleccione una opción"
                    >
                      <option
                        v-for="option in tiposRespuesta"
                        :key="option.id"
                        :value="option.id"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Fecha de respuesta">
                    <b-datepicker
                      v-model="form.dateRespuesta"
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
                      v-model="form.otro"
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
    this.getVegetation()
    this.getDependences()
  },
  methods: {
    async createIncident () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/vegetation/createOrUpdateVegetation',
          this.form
        )
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Denuncia guardada!',
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
          'modules/vegetation/getVegetations'
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
