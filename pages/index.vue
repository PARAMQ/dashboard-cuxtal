<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content has-text-centered">
              <p>tarjeta 1</p>
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
  async mounted () {
    await this.getComplaints()
    this.getInfoDonnut()
  },
  data () {
    return {
      series: [],
      options: {
        labels: ['Opiniones técnicas', 'Denuncias', 'Programadas']
      },
      techOp: [],
      complaints: [],
      programmed: []
    }
  },
  methods: {
    async getData () {
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        this.techOp = res.filter((x) => x.type === 'techOp')
        this.complaint = res.filter((x) => x.type === 'complaint')
        this.programmed = res.filter((x) => x.type === 'programmed')
      } catch (error) {
        console.log(error)
      }
    },
    async getComplaints () {
      try {
        const res = await this.$store.dispatch('modules/complaint/getComplaints')
        this.complaints = res
      } catch (error) {
        console.log(error)
      }
    },
    getInfoDonnut () {
      this.series = [Number(this.techOp.length), Number(this.complaints.length), Number(this.programmed.length)]
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
