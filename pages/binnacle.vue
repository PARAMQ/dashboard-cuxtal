<template>
  <section class="hero is-cuxtal">
    <b-modal v-model="activeModal">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">
            Programado para el día {{ dateSelect | getDay }}
          </p>
        </div>
        <div class="card-content">
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
                <b-button type="is-primary" outlined @click="openModal">
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
                      Bitácoras creadas el
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
                  <div
                    v-for="binnacle in binnacles"
                    :key="binnacle"
                    class="container"
                  >
                    <div class="card">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column">
                              <p>
                                <b-icon
                                  icon="account-group"
                                  custom-size="default"
                                />
                                {{ binnacle.participants }}
                              </p>
                            </div>
                            <div class="column">
                              <p>
                                <b-icon
                                  icon="calendar-today"
                                  custom-size="default"
                                />
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
  name: 'Binnacle',
  data () {
    return {
      activeModal: false,
      isActive: false,
      isLoadingPlans: false,
      binnacles: [],
      dateSelect: new Date()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    openModal () {
      this.isActive = true
    },
    async getData () {
      try {
        this.isLoadingPlans = true
        const plans = await this.$store.dispatch('modules/plans/getPlans')
        this.binnacles = this.filterByDate(plans)
        this.isLoadingPlans = false
      } catch (error) {
        console.log(error)
      }
    },
    filterByDate (plans) {
      const binnacle = []
      console.log(plans)
      plans.forEach((x) => {
        const now = new Date(this.dateSelect)
        const startDate = new Date(x.start_date)
        const endDate = new Date(x.end_date)
        if (
          startDate.getDay() + 1 === now.getDay() &&
          startDate.getMonth() === now.getMonth() &&
          startDate.getFullYear() === now.getFullYear()
        ) {
          binnacle.push(x.binnacles)
        } else if (
          endDate.getDay() === now.getDay() &&
          endDate.getMonth() === now.getMonth() &&
          endDate.getFullYear() === now.getFullYear()
        ) {
          binnacle.push(x.binnacles)
        } else if (((startDate.getDay() + 1) !== now.getDay() && endDate.getDay() !== now.getDay()) && (now.getDate() > startDate.getDate() + 1 && now.getDate() < endDate.getDate())) {
          binnacle.push(x.binnacles)
        }
      })
      return binnacle
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
