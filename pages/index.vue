<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="card" style="heigth: 100%;">
            <header class="card-header">
              <p class="card-header-title">
                Vegetación registrada
              </p>
            </header>
            <div class="card-content has-text-centered">
              <h1><strong>{{ vegetation.length > 0 ? vegetation.length : 'Sin vegetación registrada' }}</strong></h1>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Recorridos programados en {{ dateNow.getFullYear() }} (año actual)
              </p>
            </header>
            <div class="card-content has-text-centered">
              <h1><strong>{{ planification.length > 0 ? planification.length : 'Sin recorridos programados' }}</strong></h1>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
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
    await this.getData()
    this.getInfoDonnut()
  },
  data () {
    return {
      series: [],
      options: {
        labels: ['Opiniones técnicas', 'Denuncias']
      },
      dateNow: new Date(),
      techOps: [],
      techOp: [],
      vegetation: [],
      complaints: [],
      programmed: [],
      planification: [],
      binnaclesIsExtraordinary: [],
      binnaclesProgrammed: []
    }
  },
  async mounted () {
    await this.getComplaints()
    await this.getTechOp()
    this.getVegetation()
    this.getInfoDonnut()
    this.getPlanifications()
  },
  methods: {
    async getData () {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        this.binnaclesIsExtraordinary = res.filter(x => x.isextraordinary)
        this.binnaclesProgrammed = res.filter(x => !x.isextraordinary)
        this.techOp = res.filter((x) => x.type === 'techOp')
        this.complaint = res.filter((x) => x.type === 'complaint')
        this.programmed = res.filter((x) => x.type === 'programmed')
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
