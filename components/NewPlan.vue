<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <div class="card">
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
                <b-field
                  label="Fecha de inicio"
                >
                  <b-datepicker
                    v-model="form.start_date"
                    inline
                    required
                  />
                </b-field>
              </div>
              <div class="column">
                <b-field
                  label="Fecha de finalización"
                >
                  <b-datepicker
                    v-model="form.end_date"
                    inline
                    required
                  />
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
            <b-button type="is-success" @click="printUser">
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
        estatus: 'PR'
      },
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
  computed: {
    ...mapState([
      'user'
    ])
  },
  mounted () {
    this.form.idusers = this.user.idusers
  },
  methods: {
    printUser () {
      console.log(this.form)
    },
    async createPlan () {
      try {
        const res = await this.$store.dispatch(
          'modules/plans/createPlan',
          this.form
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
