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
              <strong>Datos generales</strong>
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
                      v-for="option in personasMorales"
                      :key="option.id"
                      :value="option.id"
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
                    <b-upload v-model="fileRespuesta" class="file-label" rounded>
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
      fileOficio: {},
      fileRespuesta: {}
    }
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
    }
  }
}
</script>

<style></style>
