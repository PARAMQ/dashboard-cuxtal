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
                    v-model="form.numberIncident"
                    name="número de oficio"
                    type="text"
                    required
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Fecha de oficio de denuncia">
                  <b-datepicker
                    v-model="form.dateOfIncident"
                    placeholder="Haz click aquí para seleccionar fecha"
                    icon="calendar-today"
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field label="Fecha de recepción de denuncia">
                  <b-datepicker
                    v-model="form.dateRecIncident"
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
                      v-model="form.direcpredio"
                      name="predio"
                      type="text"
                      required
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Tenencia del predio">
                    <b-select
                      v-model="form.tenenpredio"
                      placeholder="Selecciona una opción"
                    >
                      <option
                        v-for="option in tenenciaPredio"
                        :key="option.idtenencia"
                        :value="option.idtenencia"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <b-field horizontal label="Denuncia presentada ante">
                <b-input
                  v-model="form.description"
                  name="dependencia"
                  type="text"
                  required
                />
              </b-field>
              <b-field horizontal label="Nivel de gobierno">
                <b-input
                  v-model="form.idlevelgob"
                  name="nivel"
                  type="text"
                  required
                />
              </b-field>
              <b-field horizontal label="Ilícito ambiental denunciado">
                <b-input
                  v-model="form.idilicito"
                  name="ilícito ambiental denunciado"
                  type="text"
                  required
                />
              </b-field>
            </div>
            <div class="divider">
              <strong>Zonas</strong>
            </div>
            <div>
              <b-field horizontal label="Zonas operativas">
                <b-input
                  v-model="form.idlevelgob"
                  name="nivel"
                  type="text"
                  required
                />
              </b-field>
              <b-field horizontal label="Zonas legales">
                <b-input
                  v-model="form.idlevelgob"
                  name="nivel"
                  type="text"
                  required
                />
              </b-field>
              <b-field horizontal label="Subzonas">
                <b-input
                  v-model="form.idlevelgob"
                  name="nivel"
                  type="text"
                  required
                />
              </b-field>
            </div>
            <div class="divider">
              <strong>Coordenadas</strong>
            </div>
            <div>
              <p>Aqui va los mapas con sus puntos</p>
            </div>
            <div class="divider">
              <strong>Respuesta de la dependencia</strong>
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
      fileDenuncia: {}
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
