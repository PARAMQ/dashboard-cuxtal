<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <div class="card">
      <b-loading v-model="isLoading" :is-full-page="false" :can-cancel="true" />
      <div class="card-header">
        <p class="card-header-title">
          Nuevo recorrido
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
                  Te recorrdamos seleccionar primero la fecha de inicio y
                  seguidamente la de finalización.
                </p>
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
            <b-button type="is-success" @click="createPlan">
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
  name: 'Newplan',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      form: {
        date_register: new Date(),
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
    async createPlan () {
      const startDate = new Date(this.dates[0])
      const endDate = new Date(this.dates[1])
      this.form.start_date =
        startDate.getFullYear() +
        '-' +
        (startDate.getMonth() + 1) +
        '-' +
        startDate.getDay()
      this.form.end_date =
        endDate.getFullYear() +
        '-' +
        (endDate.getMonth() + 1) +
        '-' +
        endDate.getDay()
      try {
        this.isLoading = true
        await this.$store.dispatch('modules/plans/createPlan', this.form)
        this.dates = []
        this.isLoading = false
        this.$emit('close')
      } catch (error) {
        this.$buefy.snackbar.open('Ocurrió un problema, intente más tarde')
        this.isLoading = false
        // console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
