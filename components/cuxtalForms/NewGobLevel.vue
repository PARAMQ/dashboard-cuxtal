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
          Nuevo nivel de gobierno
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Descripción">
              <b-input
                v-model="form.description"
                name="Descripción"
                type="text"
                required
              />
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
            <b-button type="is-success" @click="createVeg">
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
  name: 'NewGobLevel',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isLoading: false,
      form: {}
    }
  },
  methods: {
    async createVeg () {
      try {
        this.isLoading = true
        await this.$store.dispatch('modules/gobLevel/createOrUpdateGobLevel', this.form)
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'nivel de gobierno guardado!',
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
    }
  }
}
</script>
