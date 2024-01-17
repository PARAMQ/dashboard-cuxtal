<template>
  <div id="home">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="columns mt-2">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column">
                <b-field horizontal label="Año">
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
    <div>
      <!-- Recorridos por año y mes -->
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Recorridos al año
              </p>
            </header>
            <div class="card-content">
              <div
                v-if="seriesPlanification.length > 0"
                class="card-content is-flex is-justify-content-center"
              >
                <apexchart
                  width="380"
                  type="donut"
                  :options="optionsPlanification"
                  :series="seriesPlanification"
                />
              </div>
              <div v-else class="card-content has-text-centered">
                <p>No hay datos por mostrar</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Recorridos por mes
              </p>
            </header>
            <div class="card-content">
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
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Bitácoras
              </p>
            </header>
            <div class="card-content">
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
        </div>
      </div>
    </div>
    <div />
  </div>
</template>

<script>
export default {
  name: 'Concentrado',
  data () {
    return {
      isLoading: false,
      optionsMetas: [],
      selectYear: {},
      formMeta: {},
      planifications: [],
      optionsPlanification: {
        labels: ['En proceso', 'Finalizado', 'Por comenzar'],
        chart: {
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: []
            },
            export: {
              csv: {
                filename: 'recorridos-por-año',
                columnDelimiter: ',',
                headerCategory: 'Estado',
                headerValue: 'Recorridos',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'recorridos-por-año'
              },
              png: {
                filename: 'recorridos-por-año'
              }
            }
          }
        }
      },
      seriesPlanification: [],
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
        },
        chart: {
          toolbar: {
            export: {
              csv: {
                filename: 'recorridos-por-mes',
                columnDelimiter: ',',
                headerCategory: 'Mes',
                headerValue: 'Recorridos',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'recorridos-por-mes'
              },
              png: {
                filename: 'recorridos-por-mes'
              }
            }
          }
        }
      },
      seriesPlansPerMoth: [
        {
          name: 'Recorridos',
          data: []
        }
      ],
      seriesBinnacles: [],
      optionsBinnacle: {
        labels: ['Revisado', 'En revisión', 'Por revisar']
      },
      binnacles: []
    }
  },
  async mounted () {
    await this.getMetas()
    await this.viewYearData()
  },
  methods: {
    // Metas de recorridos
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
    },
    async viewYearData () {
      this.isLoading = true
      this.seriesPlansPerMoth[0].data = []
      // await this.getComplaints(this.selectYear.fecha_captura)
      // await this.getTechOp(this.selectYear.fecha_captura)
      await this.getBinnacles(this.selectYear.fecha_captura)
      await this.getPlanifications(this.selectYear.fecha_captura)
      // this.getVegetation()
      // this.getInfoDonnut()
      this.isLoading = false
    },
    // Bitácoras
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
    // Recorridos
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
        this.planifications = res
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
      } catch (error) {
        // console.log(error)
      }
    }
  },
  head () {
    return { title: 'Concentrado - Cuxtal' }
  }
}
</script>

<style>
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
</style>
