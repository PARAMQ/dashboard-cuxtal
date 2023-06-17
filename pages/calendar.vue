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
                            <div class="column is-2">
                              <b-tooltip
                                :label="
                                  plan.estatus === 'process'
                                    ? 'En proceso'
                                    : plan.estatus === 'danger'
                                      ? 'Finalizado'
                                      : plan.estatus === 'success'
                                        ? 'Disponible'
                                        : plan.estatus === 'info'
                                          ? 'Por comenzar'
                                          : 'Sin estado'
                                "
                              >
                                <b-icon
                                  icon="routes-clock"
                                  size="is-large"
                                  :type="plan.estatus | status"
                                />
                              </b-tooltip>
                            </div>
                            <!--
                            <div class="column">
                              <p>
                                <b-icon
                                  icon="file-document-edit-outline"
                                  custom-size="default"
                                />
                                Bitácoras: {{ plan.binnacles.length }}
                              </p>
                            </div>
                            -->
                            <div class="column">
                              <p>
                                <b-icon
                                  icon="calendar-today"
                                  custom-size="default"
                                />
                                {{ plan.start_date }} - {{ plan.end_date }}
                              </p>
                            </div>
                          </div>
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
                    Puedes escoger un rango de fechas para ver más recorridos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-plan :active-modal="isActive" @close="isActive = false" />
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
  },
  methods: {
    editPlan (plan) {
      this.$router.push('/planification/editPlanification/?id=' + plan.idplanification)
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
        console.log(error)
      }
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
