<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <div class="card">
      <b-loading v-model="isLoading" :is-full-page="false" :can-cancel="true" />
      <div class="card-header">
        <p class="card-header-title">
          Editar recorrido
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <div class="columns has-text-centered">
              <div class="column">
                <b-field label="Fechas del recorrido">
                  <b-datepicker v-model="dates" inline range required />
                </b-field>
                <p class="has-text-grey">
                  Te recordamos seleccionar primero la fecha de inicio y
                  seguidamente la de finalización.
                </p>
              </div>
              <div>
                <b-field label="Fecha de inicio actual">
                  <p>{{ plan.start_date }}</p>
                </b-field>
                <b-field label="Fecha de finalización actual">
                  <p>{{ plan.end_date }}</p>
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
            <b-button type="is-success" @click="updatePlan">
              Guardar
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EditPlan',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    },
    plan: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        estatus: 'active'
      },
      dates: [],
      isLoading: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    this.form.idusers = this.user.idusers
  },
  methods: {
    async updatePlan () {
      // const dateRegister = new Date()
      const temporalForm = this.plan
      const startDate = new Date(this.dates[0])
      const endDate = new Date(this.dates[1])
      temporalForm.start_date =
        startDate.getFullYear() +
        '-' +
        (startDate.getMonth() + 1) +
        '-' +
        startDate.getDate()
      temporalForm.end_date =
        endDate.getFullYear() +
        '-' +
        (endDate.getMonth() + 1) +
        '-' +
        endDate.getDate()
      // // console.log(this.form)
      try {
        this.isLoading = true
        await this.$store.dispatch('modules/plans/createOrUpdatePlan', temporalForm)
        this.dates = []
        this.isLoading = false
        this.$buefy.snackbar.open('¡Guardado!')
        this.$emit('close')
      } catch (error) {
        this.$buefy.snackbar.open('Ocurrió un problema, intente más tarde')
        this.isLoading = false
        // // // console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
