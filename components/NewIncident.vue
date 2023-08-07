<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false" :can-cancel="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nueva denuncia
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <div class="divider">
              <strong>Datos generales</strong>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Número de oficio de denuncia">
                  <b-input
                    v-model="form.code"
                    name="número de oficio"
                    type="text"
                    required
                  />
                </b-field>
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
                        v-for="option in tenenciaPredio"
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
                <b-select v-model="form.dependence" placeholder="Seleccione una opción">
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
                <b-select v-model="form.levelGob" placeholder="Seleccione una opción">
                  <option
                    v-for="option in dependences"
                    :key="option.idcoordination"
                    :value="option.idcoordination"
                  >
                    {{ option.description }}
                  </option>
                </b-select>
              </b-field>
              <b-field horizontal label="Ilícito ambiental denunciado">
                <b-select v-model="form.idilicit_denounced" placeholder="Seleccione una opción">
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
            <div class="divider">
              <strong>Vegetación</strong>
            </div>
            <div>
              <b-field label="Vegetación afectada">
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
              <strong>Alcances</strong>
            </div>
            <div class="divider">
              <strong>Zonas</strong>
            </div>
            <div>
              <b-field horizontal label="Zonas operativas">
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
              <b-field horizontal label="Zonas legales">
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
              <b-field horizontal label="Subzonas">
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
            <div>
              <p>Aqui va los mapas con sus puntos</p>
            </div>
            <div class="divider">
              <strong>Seguimiento</strong>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <b-field horizontal label="Oficio de respuesta">
                    <b-input
                      v-model="form.of_respuesta"
                      name="nivel"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field horizontal label="Fecha de respuesta">
                    <b-input
                      v-model="form.date_respuesta"
                      name="nivel"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field horizontal label="Respuesta">
                    <b-input
                      v-model="form.respuesta"
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
                <b-field label="Oficio de denuncia">
                  <b-field
                    class="file is-primary"
                    :class="{ 'has-name': !!fileDenuncia }"
                  >
                    <b-upload
                      v-model="fileDenuncia"
                      :multiple="true"
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
                      :multiple="true"
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
                      :multiple="true"
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
      filteredSubZones: []
    }
  },
  mounted () {
    this.getVegetation()
    this.getDependences()
    this.getLegalZones()
    this.getSubZones()
    this.getOpZones()
  },
  methods: {
    async createIncident () {
      try {
        this.isLoading = true
        const res = await this.$store.dispatch(
          'modules/complaint/createOrUpdateComplaint',
          this.form
        )
        console.log(res)
        // await this.uploadFiles(res)
        this.form = {}
        this.fileDenuncia = {}
        this.fileRespuesta = {}
        this.fileTramite = {}
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
    async uploadFiles (id) {
      try {
        const formData = new FormData()
        formData.append('idcomplaint', id)
        formData.append('complaint_doc', this.fileDenuncia)
        formData.append('response_doc', this.fileRespuesta)
        formData.append('tramit_conlusion', this.fileTramite)
        await this.$store.dispatch('modules/complaint/updateFilesComplaint', formData)
      } catch (error) {
        console.log(error)
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
        this.dependences = await this.$store.dispatch(
          'modules/coordinations/getCoordinations'
        )
        // console.log(this.dependences)
      } catch (error) {
        console.log(error)
      }
    },
    async getLegalZones () {
      try {
        this.legalZones = await this.$store.dispatch('modules/zones/getZones')
        this.filteredLegalZones = this.legalZones
      } catch (error) {
        console.log(error)
      }
    },
    async getSubZones () {
      try {
        this.subZones = await this.$store.dispatch('modules/zones/getSubZones')
        this.filteredSubZones = this.subZones
      } catch (error) {
        console.log(error)
      }
    },
    async getOpZones () {
      try {
        this.opZones = await this.$store.dispatch('modules/operativeZones/getZones')
        this.filteredOpZone = this.opZones
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
    }
  }
}
</script>

<style></style>
