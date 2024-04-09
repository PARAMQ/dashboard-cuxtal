<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <b-loading
      v-model="isLoading"
      :is-full-page="true"
      :can-cancel="false"
    />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nuevo tablaje
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Nombre">
              <b-input
                v-model="form.name"
                name="descripción breve"
                type="text"
                required
              />
            </b-field>
            <b-field class="file is-primary" :class="{'has-name': !!file}">
              <b-upload v-model="file" class="file-label">
                <span class="file-cta">
                  <b-icon class="file-icon" icon="upload" />
                  <span class="file-label">Subir archivo (solo DBF)</span>
                </span>
                <span v-if="loadingGetCoordinates">
                  Procesando archivo...
                </span>
                <span v-if="file" class="file-name">
                  {{ file.name }}
                </span>
              </b-upload>
            </b-field>
          </form>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <b-button @click="$emit('close')">
              Cancelar
            </b-button>
          </div>
          <div class="card-footer-item">
            <b-button type="is-success" @click="createOrUpdate">
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
  name: 'NewTablaje',
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
      file: null,
      loadingGetCoordinates: false
    }
  },
  watch: {
    file (newVal, oldVal) {
      if (newVal) {
        this.getCoordinates()
      }
    }
  },
  methods: {
    async createOrUpdate () {
      try {
        this.isLoading = true
        await this.$store.dispatch('modules/tablaje/createOrUpdateTablaje', this.form)
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Tablaje guardado!',
          type: 'is-success'
        })
        this.$emit('create')
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
    async getCoordinates () {
      try {
        this.loadingGetCoordinates = true
        const formData = new FormData()
        formData.append('file', this.file)
        const res = await this.$axios.post('https://vectors-cuxtal-api.onrender.com/procesar_dbf', formData)
        this.form.coordinates = JSON.stringify(res.data.coordinates)
        this.loadingGetCoordinates = false
        console.log(res.data.coordinates)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
