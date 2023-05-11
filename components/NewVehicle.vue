<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nuevo vehículo
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Número de identificación">
              <b-input
                v-model="form.number"
                name="Nº identificación"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Placa del vehículo">
              <b-input
                v-model="form.plates"
                name="placa"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Modelo del vehículo">
              <b-input
                v-model="form.model"
                name="modelo"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Marca del vehículo">
              <b-input v-model="form.brand" name="marca" type="text" required />
            </b-field>
            <b-field
              horizontal
              label="Línea del vehículo"
              message="Ejemplo: Pickup, Sedan"
            >
              <b-input
                v-model="form.subbrand"
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
            <b-button type="is-success" @click="createVehicle">
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
  name: 'NewVehicle',
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
    async createVehicle () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/vehicles/createOrUpdateVehicle',
          this.form
        )
        this.isLoading = false
        this.$buefy.toast.open({
          message: '¡Guardado correctamente!',
          type: 'is-success'
        })
        this.$emit('create')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
