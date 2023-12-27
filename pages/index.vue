<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Recorridos del año {{ dateNow.getFullYear() }} (año actual)
              </p>
            </header>
            <div v-if="seriesPlanification.length > 0" class="card-content is-flex is-justify-content-center">
              <apexchart width="380" type="donut" :options="optionsPlanification" :series="seriesPlanification" />
            </div>
            <div v-else class="card-content has-text-centered">
              <p>No hay datos por mostrar</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Bitácoras del año {{ dateNow.getFullYear() }} (año actual)
              </p>
            </header>
            <div v-if="seriesBinnacles.length > 0" class="card-content is-flex is-justify-content-center">
              <apexchart width="380" type="donut" :options="optionsBinnacle" :series="seriesBinnacles" />
            </div>
            <div v-else class="card-content has-text-centered">
              <p>No hay datos por mostrar</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Segumiento
              </p>
            </header>
            <div v-if="series.length > 0" class="card-content is-flex is-justify-content-center">
              <apexchart width="380" type="donut" :options="options" :series="series" />
            </div>
            <div v-else class="card-content has-text-centered">
              <p>No hay datos por mostrar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.name:hover {
  cursor: pointer;
}
tr.is-success {
  background: #28a745;
}
tr.is-info {
  background: #000408;
}
tr.is-danger {
  background: #f02516;
}
tr.is-warning {
  background: #fca503;
}
.card {
  background: white;
}
.hero.is-fullheight {
  background-color: #0403039a;
  background-image: url('assets/cuxtal/background.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-origin: content-box;
  background-position: center;
}
</style>

<script>
import tableMixin from '@/mixins/table'

export default {
  name: 'Home',
  mixins: [tableMixin],
  fetch () {
    this.$store.commit('setTitleStack', ['Inicio'])
  },
  async created () {
    // await this.getData()
    // this.getInfoDonnut()
  },
  data () {
    return {
      series: [],
      seriesBinnacles: [],
      seriesPlanification: [],
      options: {
        labels: ['Opiniones técnicas', 'Denuncias']
      },
      optionsBinnacle: {
        labels: ['Revisado', 'En revisión', 'Por revisar']
      },
      optionsPlanification: {
        labels: ['En proceso', 'Finalizado', 'Por comenzar']
      },
      dateNow: new Date(),
      techOps: [],
      techOp: [],
      vegetation: [],
      complaints: [],
      programmed: [],
      planification: [],
      binnacles: []
    }
  },
  async mounted () {
    await this.getComplaints()
    await this.getTechOp()
    await this.getBinnacles()
    await this.getPlanifications()
    this.getVegetation()
    this.getInfoDonnut()
  },
  methods: {
    async getBinnacles () {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        const nowDate = new Date()
        this.binnacles = res.filter((x) => {
          const temporalDate = new Date(x.date)
          if (temporalDate.getFullYear() === nowDate.getFullYear()) {
            return x
          }
        })
        const revisado = this.binnacles.filter(x => x.status === 'revisado')
        const enRevision = this.binnacles.filter(x => x.status === 'en-revision')
        const porRevisar = this.binnacles.filter(x => x.status === 'por-revisar')
        this.seriesBinnacles = [Number(revisado.length), Number(enRevision.length), Number(porRevisar.length)]
      } catch (error) {
        // console.log(error)
      }
    },
    async getComplaints () {
      try {
        const res = await this.$store.dispatch('modules/complaint/getComplaints')
        this.complaints = res
        this.complaint = res.length
        console.log(this.complaint)
      } catch (error) {
        // console.log(error)
      }
    },
    async getTechOp () {
      try {
        const res = await this.$store.dispatch('modules/technicalOp/getTechnicalOps')
        this.techOps = res
        this.techOp = res.length
      } catch (error) {
        console.log(error)
      }
    },
    async getVegetation () {
      try {
        const res = await this.$store.dispatch('modules/vegetation/getVegetations')
        this.vegetation = res
      } catch (error) {
        console.log(error)
      }
    },
    async getPlanifications () {
      const today = new Date() // Obtén la fecha actual
      const currentYear = today.getFullYear() // Obtiene el año actual

      // Primer día del año
      const firstDayOfYear = new Date(currentYear, 0, 1)

      // Último día del año
      const lastDayOfYear = new Date(currentYear, 11, 31)
      try {
        const res = await this.$store.dispatch('modules/plans/getPlans', [firstDayOfYear, lastDayOfYear])
        this.planification = res
        const processPlanification = res.filter(x => x.estatus === 'process')
        const finallyPlanification = res.filter(x => x.estatus === 'finally')
        const activePlanification = res.filter(x => x.estatus === 'active')
        this.seriesPlanification = [Number(processPlanification.length), Number(finallyPlanification.length), Number(activePlanification.length)]
      } catch (error) {
        console.log(error)
      }
    },
    getInfoDonnut () {
      // this.series = [Number(this.techOp), Number(this.complaints), Number(this.programmed.length)]
      this.series = [Number(this.techOp), Number(this.complaint)]
    }
  },
  head () {
    return {
      title: 'Inicio — Cuxtal'
    }
  }
}
</script>

<style scoped>
.has-text-orange {
  color: orange;
}
</style>
