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
          Nuevo usuario
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field label="Nombre de usuario">
              <b-input
                v-model="form.username"
                name="Nombre de usuario"
                type="text"
                required
              />
            </b-field>
            <b-field label="Nombre(s)">
              <b-input
                v-model="form.name"
                name="placa"
                type="text"
                required
              />
            </b-field>
            <b-field label="Apellido(s)">
              <b-input
                v-model="form.lastname"
                name="modelo"
                type="text"
                required
              />
            </b-field>
            <b-field label="Correo electrónico">
              <b-input
                v-model="form.email"
                name="marca"
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
            <b-button type="is-success" @click="createUser">
              Guardar
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
const generator = require('generate-password')

export default {
  name: 'NewUser',
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
    async createUser () {
      const password = generator.generate({
        length: 10,
        numbers: true
      })
      try {
        this.form.password = password
        this.isLoading = true
        await this.$store.dispatch('modules/users/createUser', this.form)
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Usuario guardado!',
          type: 'is-success'
        })
        this.$emit('create')
      } catch (error) {
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
