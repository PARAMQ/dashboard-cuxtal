<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
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
                name="usuario"
                type="text"
                required
              />
            </b-field>
            <b-field label="Nombre(s)">
              <b-input
                v-model="form.name"
                name="nombres(s)"
                type="text"
                required
              />
            </b-field>
            <b-field label="Apellido(s)">
              <b-input
                v-model="form.lastname"
                name="apellido(s)"
                type="text"
                required
              />
            </b-field>
            <b-field label="Correo electrónico">
              <b-input
                v-model="form.email"
                name="correo electronico"
                type="text"
                required
              />
            </b-field>
            <b-field label="Cargo (rol dentro de cuxtal)">
              <b-select placeholder="Selecciona uno">
                <option
                  v-for="option in charges"
                  :key="option.idcharge"
                  :value="option.idcharge"
                >
                  {{ option.description }}
                </option>
              </b-select>
            </b-field>
            <b-field label="Coordinaciones">
              <b-select placeholder="Selecciona una">
                <option
                  v-for="option in departaments"
                  :key="option.iddepto"
                  :value="option.iddepto"
                >
                  {{ option.description }}
                </option>
              </b-select>
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
      form: {},
      departaments: [],
      charges: []
    }
  },
  mounted () {
    this.getDepartaments()
    this.getCharges()
  },
  methods: {
    async getDepartaments () {
      try {
        this.departaments = await this.$store.dispatch(
          'modules/deptos/getDeptos'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getCharges () {
      try {
        this.charges = await this.$store.dispatch(
          'modules/charges/getCharges'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
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
