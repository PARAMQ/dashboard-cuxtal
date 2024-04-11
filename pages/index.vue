<template>
  <div id="home">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="columns mt-2">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <b-field horizontal label="Año de visualización">
                  <b-select
                    v-model="selectYear"
                    placeholder="Seleccione un año"
                  >
                    <option
                      v-for="option in optionsMetas"
                      :key="option.idmeta"
                      :value="option"
                    >
                      {{ option.fecha_captura }} - {{ option.dato }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-button type="is-info is-light" @click="viewYearData">
                  Visualizar
                </b-button>
                <b-button type="is-warning is-light" @click="editMeta">
                  Editar
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <b-field horizontal label="Nuevo registro">
              <b-input
                v-model="formMeta.fecha_captura"
                placeholder="Año"
                expanded
              />
              <b-input
                v-model="formMeta.dato"
                placeholder="Meta"
                type="text"
                expanded
              />
              <b-button type="is-success is-light" @click="createMeta">
                Guardar
              </b-button>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectYear" class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div id="card-info" class="card">
          <header class="card-header">
            <p class="card-header-title">
              Recorridos del año
              {{
                selectYear ? selectYear.fecha_captura : dateNow.getFullYear()
              }}
            </p>
          </header>
          <div
            v-if="seriesPlanification.length > 0"
            class="card-content is-flex is-justify-content-center"
          >
            <apexchart
              width="400"
              type="donut"
              :options="optionsPlanification2"
              :series="seriesPlanification2"
            />
          </div>
          <div v-else class="card-content has-text-centered">
            <p>No hay datos por mostrar</p>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <p>
                Meta de recorridos: <strong>{{ selectYear.dato }}</strong>
              </p>
            </div>
            <div class="card-footer-item">
              <p>
                Recorridos finalizados:
                <strong>{{ planification.length }}</strong>
              </p>
            </div>
          </footer>
        </div>
      </div>
      <!--
      <div class="column">
        <div id="card-info" class="card">
          <header class="card-header">
            <p class="card-header-title">
              Recorridos del año
              {{
                selectYear ? selectYear.fecha_captura : dateNow.getFullYear()
              }}
              representados por mes
            </p>
          </header>
          <div
            v-if="seriesPlansPerMoth[0].data.length > 0"
            class="card-content is-flex is-justify-content-center"
          >
            <apexchart
              width="380"
              type="bar"
              :options="optionsPlansPerMonth"
              :series="seriesPlansPerMoth"
            />
          </div>
          <div v-else class="card-content has-text-centered">
            <p>No hay datos por mostrar</p>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <p>
                Meta de recorridos anual: <strong>{{ selectYear.dato }}</strong>
              </p>
            </div>
            <div class="card-footer-item">
              <p>
                Recorridos registrados:
                <strong>{{ planification.length }}</strong>
              </p>
            </div>
          </footer>
        </div>
      </div>
      -->
    </div>
    <!--
    <div v-if="selectYear" class="columns">
      <div class="column">
        <div id="card-info" class="card">
          <header class="card-header">
            <p class="card-header-title">
              Bitácoras del año
              {{
                selectYear ? selectYear.fecha_captura : dateNow.getFullYear()
              }}
            </p>
          </header>
          <div
            v-if="seriesBinnacles.length > 0"
            class="card-content is-flex is-justify-content-center"
          >
            <apexchart
              width="380"
              type="donut"
              :options="optionsBinnacle"
              :series="seriesBinnacles"
            />
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
              Segumiento (denuncias y opiniones técnicas)
            </p>
          </header>
          <div
            v-if="series.length > 0"
            class="card-content is-flex is-justify-content-center"
          >
            <apexchart
              width="480"
              type="donut"
              :options="options"
              :series="series"
            />
          </div>
          <div v-else class="card-content has-text-centered">
            <p>No hay datos por mostrar</p>
          </div>
        </div>
      </div>
    </div>
    -->
    <div v-else>
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <h1>Seleccione un año para visualizar su información</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableMixin from '@/mixins/table'

export default {
  name: 'Home',
  mixins: [tableMixin],
  fetch () {
    this.$store.commit('setTitleStack', ['Inicio'])
  },
  data () {
    return {
      isLoading: false,
      formMeta: {
        fecha_captura: '',
        dato: ''
      },
      optionsMetas: [],
      selectYear: {},
      series: [],
      seriesBinnacles: [],
      seriesPlanification: [],
      seriesPlanification2: [],
      options: {
        labels: ['Opiniones técnicas', 'Denuncias']
      },
      optionsBinnacle: {
        labels: ['Revisado', 'En revisión', 'Por revisar']
      },
      optionsPlanification: {
        labels: ['En proceso', 'Finalizado', 'Por comenzar']
      },
      optionsPlanification2: {
        labels: ['Programados', 'Finalizado']
      },
      optionsPlansPerMonth: {
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        yaxis: {
          labels: {
            formatter (value) {
              return parseInt(value)
            }
          }
        },
        tooltip: {
          y: {
            formatter (val) {
              return parseInt(val) + ' recorridos'
            }
          }
        },
        noData: {
          text: 'Cargando...'
        }
      },
      seriesPlansPerMoth: [
        {
          name: 'Recorridos',
          data: []
        }
      ],
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
  async created () {
    // await this.getData()
    // this.getInfoDonnut()
  },
  async mounted () {
    this.isLoading = true
    await this.getMetas()
    if (this.selectYear.fecha_captura) {
      await this.getComplaints(this.selectYear.fecha_captura)
      await this.getTechOp(this.selectYear.fecha_captura)
      await this.getBinnacles(this.selectYear.fecha_captura)
      await this.getPlanifications(this.selectYear.fecha_captura)
      this.getVegetation()
      this.getInfoDonnut()
    }
    this.isLoading = false
  },
  methods: {
    async getBinnacles (yearSelect) {
      try {
        const res = await this.$store.dispatch('modules/binnacles/getBinnacles')
        const nowDate = new Date()
        this.binnacles = res.filter((x) => {
          const temporalDate = new Date(x.date)
          if (yearSelect) {
            if (temporalDate.getFullYear() === Number(yearSelect)) {
              return x
            }
          } else {
            // eslint-disable-next-line no-lonely-if
            if (temporalDate.getFullYear() === nowDate.getFullYear()) {
              return x
            }
          }
        })
        const revisado = this.binnacles.filter((x) => x.status === 'revisado')
        const enRevision = this.binnacles.filter(
          (x) => x.status === 'en-revision'
        )
        const porRevisar = this.binnacles.filter(
          (x) => x.status === 'por-revisar'
        )
        this.seriesBinnacles = [
          Number(revisado.length),
          Number(enRevision.length),
          Number(porRevisar.length)
        ]
      } catch (error) {
        // // console.log(error)
      }
    },
    async getComplaints (selectYear) {
      try {
        const res = await this.$store.dispatch(
          'modules/complaint/getComplaints'
        )
        this.complaints = []
        this.complaints = res.filter((x) => {
          if (selectYear) {
            const temporalDate = new Date(x.date_reception)
            if (temporalDate.getFullYear() === Number(selectYear)) {
              return x
            }
          } else {
            const temporalDate = new Date(x.date_reception)
            const today = new Date()
            // eslint-disable-next-line no-lonely-if
            if (temporalDate.getFullYear() === today.getFullYear()) {
              return x
            }
          }
        })
        console.log(this.complaints)
        this.complaint = this.complaints.length
        // console.log(this.complaint)
      } catch (error) {
        // // console.log(error)
      }
    },
    async getTechOp (selectYear) {
      try {
        const res = await this.$store.dispatch(
          'modules/technicalOp/getTechnicalOps'
        )
        this.techOps = []
        this.techOps = res.filter((x) => {
          if (selectYear) {
            const temporalDate = new Date(x.application_date)
            if (temporalDate.getFullYear() === Number(selectYear)) {
              return x
            }
          } else {
            const temporalDate = new Date(x.application_date)
            const today = new Date()
            // eslint-disable-next-line no-lonely-if
            if (temporalDate.getFullYear() === today.getFullYear()) {
              return x
            }
          }
        })
        this.techOp = this.techOps.length
      } catch (error) {
        // console.log(error)
      }
    },
    async getVegetation () {
      try {
        const res = await this.$store.dispatch(
          'modules/vegetation/getVegetations'
        )
        this.vegetation = res
      } catch (error) {
        // console.log(error)
      }
    },
    async getPlanifications (selectYear) {
      const today = new Date() // Obtén la fecha actual
      const currentYear = today.getFullYear() // Obtiene el año actual

      let firstDayOfYear = ''
      let lastDayOfYear = ''

      if (selectYear) {
        // Primer día del año
        firstDayOfYear = new Date(selectYear, 0, 1)

        // Último día del año
        lastDayOfYear = new Date(selectYear, 11, 31)
      } else {
        // Primer día del año
        firstDayOfYear = new Date(currentYear, 0, 1)

        // Último día del año
        lastDayOfYear = new Date(currentYear, 11, 31)
      }
      try {
        const res = await this.$store.dispatch('modules/plans/getPlans', [
          firstDayOfYear,
          lastDayOfYear
        ])
        this.planification = res
        this.seriesPlansPerMoth[0].data = []
        // console.log(res)
        for (let i = 0; i < 12; i++) {
          const temporalFilter = res.filter((x) => {
            const temporalDate = new Date(x.start_date)
            if (temporalDate.getMonth() === i) {
              return x
            }
          })
          this.seriesPlansPerMoth[0].data.push(parseInt(temporalFilter.length))
        }
        const processPlanification = res.filter((x) => x.estatus === 'process')
        const finallyPlanification = res.filter((x) => x.estatus === 'finally')
        const activePlanification = res.filter((x) => x.estatus === 'active')
        this.seriesPlanification = [
          Number(processPlanification.length),
          Number(finallyPlanification.length),
          Number(activePlanification.length)
        ]
        this.seriesPlanification2 = [
          Number(parseInt(this.selectYear.dato)),
          Number(parseInt(res.length))
        ]
      } catch (error) {
        // console.log(error)
      }
    },
    getInfoDonnut () {
      // this.series = [Number(this.techOp), Number(this.complaints), Number(this.programmed.length)]
      this.series = [Number(this.techOp), Number(this.complaint)]
    },
    viewYear (option) {
      console.log(option)
      this.selectYear = option
    },
    async viewYearData () {
      this.isLoading = true
      this.seriesPlansPerMoth[0].data = []
      await this.getComplaints(this.selectYear.fecha_captura)
      await this.getTechOp(this.selectYear.fecha_captura)
      await this.getBinnacles(this.selectYear.fecha_captura)
      await this.getPlanifications(this.selectYear.fecha_captura)
      this.getVegetation()
      this.getInfoDonnut()
      this.isLoading = false
    },
    async getMetas () {
      try {
        const res = await this.$store.dispatch('modules/plans/getMetas')
        this.optionsMetas = res
        const nowDate = new Date()
        if (
          res.find((x) => Number(x.fecha_captura) === nowDate.getFullYear())
        ) {
          this.selectYear = res.find(
            (x) => Number(x.fecha_captura) === nowDate.getFullYear()
          )
        } else {
          this.selectYear = null
        }
      } catch (error) {
        console.log(error)
      }
    },
    editMeta () {
      this.formMeta = this.selectYear
    },
    async createMeta () {
      if (
        !this.formMeta.idmeta &&
        this.optionsMetas.find(
          (x) => x.fecha_captura === this.formMeta.fecha_captura
        )
      ) {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Ya existe un registro con ese año',
          type: 'is-danger'
        })
      } else {
        try {
          await this.$store.dispatch(
            'modules/plans/createOrUpdateMeta',
            this.formMeta
          )
          this.formMeta = {}
          this.getMetas()
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  head () {
    return {
      title: 'Inicio — Cuxtal'
    }
  }
}
</script>

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
#home {
  width: 100%;
  background-color: #0403039a;
  background-image: url('assets/cuxtal/background.jpg');
  background-repeat: repeat;
  background-size: 100%;
  background-origin: content-box;
  background-position: center center;
}
#card-info {
  height: auto;
}
</style>
