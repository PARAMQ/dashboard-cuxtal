<template>
  <b-modal v-model="activeModal" :can-cancel="false" :destroy-on-hide="false">
    <div class="card">
      <b-loading
        v-model="isLoading"
        :is-full-page="false"
        :can-cancel="false"
      />
      <div class="card-header">
        <p class="card-header-title">
          Nueva bitácora
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <div class="columns has-text-centered">
              <div class="column">
                <b-field label="Fecha">
                  <b-datepicker v-model="form.date" inline />
                </b-field>
              </div>
              <div class="column">
                <div class="container m-2">
                  <div class="columns">
                    <div class="column">
                      <b-field label="Hora de inicio">
                        <b-timepicker v-model="form.hour_init" inline />
                      </b-field>
                    </div>
                    <div class="column">
                      <b-field label="Hora de finalización">
                        <b-timepicker v-model="form.hour_end" inline />
                      </b-field>
                    </div>
                  </div>
                </div>
                <br>
                <div class="container m-2">
                  <b-field label="Vehículo">
                    <!--
                    <b-select v-model="form.idvehicle">
                      <option
                        v-for="vehicle in vehicles"
                        :key="vehicle.idvehicle"
                        :value="vehicle.idvehicle"
                      >
                        {{ vehicle.number }} - {{ vehicle.subbrand }}
                      </option>
                    </b-select>
                    -->
                    <b-taginput
                      v-model="form.vehicles"
                      :data="filteredVehicles"
                      field="name"
                      autocomplete
                      @typing="filterVehicles"
                    >
                      <template v-slot="props">
                        <strong>{{ props.option.number }} -
                          {{
                            props.option.plates
                              ? props.option.plates
                              : 'sin placas reigstradas'
                          }}</strong>
                      </template>
                      <template #empty>
                        Sin resultados
                      </template>
                    </b-taginput>
                  </b-field>
                  <b-field label="Participantes">
                    <b-taginput
                      v-model="form.participants"
                      :data="filteredParticipants"
                      field="name"
                      autocomplete
                      @typing="filterData"
                    >
                      <template v-slot="props">
                        <strong>{{ props.option.name }}
                          {{ props.option.lastname }}</strong>
                      </template>
                      <template #empty>
                        Sin resultados
                      </template>
                    </b-taginput>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="section has-text-centeredAiññ">
              <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.30763648330964!2d-89.66358841018851!3d21.013173871704232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567489cdc02749%3A0xf5009210d6a1fcf2!2sPerif.%20de%20M%C3%A9rida%20Lic.%20Manuel%20Berzunza%2C%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses!2smx!4v1684953624467!5m2!1ses!2smx"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
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
            <b-button type="is-success" @click="create">
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
  name: 'NewBinnacle',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    },
    idPlan: {
      default: '',
      type: String
    }
  },
  data () {
    return {
      form: {
        estatus: 'active'
      },
      isLoading: false,
      filteredParticipants: [],
      filteredVehicles: [],
      participants: [],
      vehicles: [],
      plan: {},
      binnacles: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {},
  mounted () {
    this.form.idusers = this.user.idusers
    this.getPlan()
    this.getVehicles()
    this.getParticipants()
    this.filteredParticipants = this.participants
  },
  methods: {
    async getPlan () {
      try {
        const res = await this.$store.dispatch(
          'modules/plans/readPlan',
          this.idPlan
        )
        this.plan = res
      } catch (error) {
        console.log(error)
      }
    },
    async create () {
      const temporalForm = JSON.parse(JSON.stringify(this.form))
      console.log(temporalForm)
      this.binnacles.push(temporalForm)
      try {
        this.plan.binnacles = this.binnacles
        await this.$store.dispatch(
          'modules/plans/createOrUpdatePlan',
          this.plan
        )
        this.getPlan()
        this.form = {}
        this.$buefy.toast.open({
          message: '¡Bitácora guardada!',
          type: 'is-success'
        })
        this.$emit('update')
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        console.log(error)
      }
    },
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
      } catch (error) {
        console.log(error)
      }
    },
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.participants = res
      } catch (error) {
        console.log(error)
      }
    },
    filterData (text) {
      this.filteredParticipants = this.participants.filter((option) => {
        if (
          option.name &&
          option.name.toString().toLowerCase().includes(text.toLowerCase())
        ) {
          return option
        }
      })
    },
    filterVehicles (text) {
      this.filteredVehicles = this.vehicles.filter((option) => {
        if (
          (option.plates &&
            option.plates
              .toString()
              .toLowerCase()
              .includes(text.toLowerCase())) ||
          (option.number &&
            option.number.toString().toLowerCase().includes(text.toLowerCase()))
        ) {
          return option
        }
      })
    }
  }
}
</script>
