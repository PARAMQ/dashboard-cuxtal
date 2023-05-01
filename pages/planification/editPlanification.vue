<template>
  <section class="hero is-cuxtal">
    <b-modal v-model="activeModal">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">
            {{ plan.start_date | getDay }} - {{ plan.end_date | getDay }}
          </p>
        </div>
        <div class="card-content">
          <div class="columns">
            <div class="column" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            reiciendis sunt consectetur iure perferendis accusantium assumenda
            neque, quis sint, eum fugit nihil magni ipsum ad. Doloremque autem
            cupiditate accusamus molestiae.
          </p>
        </div>
      </div>
    </b-modal>
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
                      Recorridos programados para el día
                      {{ dateSelect | getDay }}
                    </p>
                  </div>
                </div>
                <b-loading
                  v-model="isLoadingPlans"
                  :is-full-page="false"
                  :can-cancel="false"
                />
                <div class="card-content scroll">
                  <div v-for="plan in plans" :key="plan" class="container">
                    <div class="card" @click="openModal(plan)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column">
                              <p>
                                <b-icon
                                  icon="file-document-edit-outline"
                                  custom-size="default"
                                />
                                Bitácoras: {{ plan.binnacles.length }}
                              </p>
                            </div>
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
                  <b-datepicker v-model="dateSelect" inline @input="getData" />
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
  name: 'EditPlanification',
  data () {
    return {
      activeModal: false,
      isActive: false,
      isLoadingPlans: false,
      plans: [],
      plan: {},
      dateSelect: new Date()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    openModal (plan) {
      this.plan = plan
      this.activeModal = true
    },
    async getData () {
      try {
        this.isLoadingPlans = true
        const plans = await this.$store.dispatch('modules/plans/getPlans')
        this.plans = this.filterByDate(plans)
        this.isLoadingPlans = false
      } catch (error) {
        console.log(error)
      }
    },
    filterByDate (plans) {
      console.log(plans)
      console.log(this.dateSelect)
      const firstFilter = plans.filter((x) => {
        const now = new Date(this.dateSelect)
        const startDate = new Date(x.start_date)
        const endDate = new Date(x.end_date)
        if (
          startDate.getDay() + 1 === now.getDay() &&
          startDate.getMonth() === now.getMonth() &&
          startDate.getFullYear() === now.getFullYear()
        ) {
          return x
        } else if (
          endDate.getDay() === now.getDay() &&
          endDate.getMonth() === now.getMonth() &&
          endDate.getFullYear() === now.getFullYear()
        ) {
          return x
        }
      })
      console.log(firstFilter)
      /*
        const secondFilter = firstFilter.filter(x => new Date(x.end_date) <= this.dateSelect)
        console.log(secondFilter)
        */
      return firstFilter
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
