<template>
  <section class="hero is-cuxtal">
    <div class="container mt-4">
      <div class="card p-2">
        <div class="card-content">
          <nav class="level">
            <div class="level-left" />
            <div class="level-right">
              <p class="level-item">
                <b-button type="is-primary" outlined @click="isActive = true">
                  Nuevo registro
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p class="subtitle">
                      Recorridos programados
                    </p>
                  </div>
                </div>
                <b-loading
                  v-model="isLoadingPlans"
                  :is-full-page="false"
                  :can-cancel="false"
                />
                <div class="card-content scroll">
                  <div v-for="plan in plans" :key="plan.id" class="container">
                    <div class="card" @click="editPlan(plan)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column is-2 is-flex is-flex-direction-column is-justify-content-center">
                              <b-tooltip
                                :label="
                                  plan.estatus === 'process'
                                    ? 'En proceso'
                                    : plan.estatus === 'finally'
                                      ? 'Finalizado'
                                      : plan.estatus === 'active'
                                        ? 'Por comenzar'
                                        : 'Sin estado'
                                "
                                :type="
                                  plan.estatus === 'process'
                                    ? 'is-warning'
                                    : plan.estatus === 'finally'
                                      ? 'is-danger'
                                      : plan.estatus === 'active'
                                        ? 'is-success'
                                        : 'is-dark'
                                "
                              >
                                <b-icon
                                  icon="routes-clock"
                                  size="is-large"
                                  :type="
                                    plan.estatus === 'process'
                                      ? 'is-warning'
                                      : plan.estatus === 'finally'
                                        ? 'is-danger'
                                        : plan.estatus === 'active'
                                          ? 'is-success'
                                          : 'is-dark'
                                  "
                                />
                              </b-tooltip>
                            </div>
                            <div class="column m-2 has-text-centered">
                              <div class="m-2">
                                <div>
                                  {{ plan.start_date }}
                                </div>
                                <div>
                                  {{ plan.end_date }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="card-footer-item">
                          <p>Creado el: {{ plan.date_register | shortDate }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="column is-flex is-flex-direction-row is-justify-content-center"
            >
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p class="subtitle">
                      Calendario
                    </p>
                  </div>
                </div>
                <div class="card-content">
                  <b-datepicker
                    v-model="datesSelect"
                    inline
                    range
                    @input="getData"
                  />
                </div>
                <div class="card-footer">
                  <p class="card-footer-item has-text-grey">
                    Puedes escoger un rango de fechas para ver más recorridos. Al principio verás todos los recorridos, ordenados por la fecha de registro, que se encuentran en el sistema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-plan :active-modal="isActive" @close="updateView" />
  </section>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      activeModal: false,
      isActive: false,
      isLoadingPlans: false,
      plans: [],
      plan: {},
      datesSelect: []
    }
  },
  created () {
    // this.getData()
  },
  mounted () {
    this.plans = []
    /*
    const now = new Date()
    const day1 = new Date(now)
    day1.setDate(now.getDate() - 30)
    this.datesSelect.push(day1)
    const day2 = new Date(now)
    day2.setDate(now.getDate() + 30)
    this.datesSelect.push(day2)
    */
    this.getAllPlans()
  },
  methods: {
    editPlan (plan) {
      this.$router.push(
        '/planification/editPlanification/?id=' + plan.idplanification
      )
    },
    async getAllPlans () {
      try {
        this.isLoadingPage = true
        const res = await this.$store.dispatch('modules/plans/getAllPlans')
        const temporal = res.map((x) => {
          x.date_register = new Date(x.date_register)
          return x
        })
        // console.log(temporal)
        temporal.sort((a, b) => b.date_register - a.date_register)
        this.plans = []
        this.plans = temporal
        this.isLoadingPage = false
      } catch (error) {
        console.error(error)
      }
    },
    async getData () {
      try {
        this.isLoadingPlans = true
        const plans = await this.$store.dispatch(
          'modules/plans/getPlans',
          this.datesSelect
        )
        this.plans = []
        this.plans = plans
        this.isLoadingPlans = false
      } catch (error) {
        // // console.log(error)
      }
    },
    updateView () {
      this.isActive = false
      this.getAllPlans()
    }
  }
}
</script>

<style>
.scroll {
  height: 400px;
  overflow-y: scroll;
}
.card {
  background-color: white !important;
}
.hero.is-cuxtal {
  background-color: #0403039a;
  background-image: url('assets/cuxtal/background.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-origin: content-box;
  background-position: center;
}
.modal-background {
  background-color: rgba(0, 0, 0, 0.568);
}
</style>
