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
          Nuevo cargo
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Descripción breve">
              <b-input
                v-model="form.description"
                name="Nº identificación"
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
            <b-button type="is-success" @click="createCharge">
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
  name: 'NewCharge',
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
      personas: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Emily' }
      ],
      vehiculos: [
        { id: 1, brand: 'Toyota', model: 'Camry' },
        { id: 2, brand: 'Honda', model: 'Civic' },
        { id: 3, brand: 'Ford', model: 'F-150' },
        { id: 4, brand: 'Chevrolet', model: 'Silverado' },
        { id: 5, brand: 'Jeep', model: 'Wrangler' }
      ]
    }
  },
  methods: {
    async createCharge () {
      try {
        this.isLoading = true
        await this.$store.dispatch('modules/charges/createOrUpdateCharge', this.form)
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Cargo guardado!',
          type: 'is-success'
        })
        this.$emit('create')
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        // // console.log(error)
      }
    }
  }
}
</script>
