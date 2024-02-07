<template>
  <div id="home">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <!-- Seleccionar año para visualizar su meta -->
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
      <!-- Recorridos por año y bitácoras (con sus estados) -->
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
      <!-- Recorridos por mes -->
      <div class="columns">
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
                  width="800"
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
      <!-- Recorridos filtrado por ilicito y Ha -->
      <div class="columns" />
      <!-- Recorridos filtrado por zonas y subzonas -->
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Denuncias por zonas y subzonas
              </p>
            </header>
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <b-navbar>
                    <template slot="brand">
                      <b-navbar-item>
                        <b-field horizontal label="Zonas">
                          <b-select
                            v-model="selectZone"
                            placeholder="Seleccione una opción"
                          >
                            <option
                              v-for="option in zones"
                              :key="option.idzoning"
                              :value="option.idzoning"
                            >
                              {{ option.description }}
                            </option>
                          </b-select>
                        </b-field>
                      </b-navbar-item>
                      <b-navbar-item>
                        <b-field horizontal label="Subzonas">
                          <b-select
                            v-model="selectSubZone"
                            placeholder="Seleccione una opción"
                          >
                            <option
                              v-for="option in subZones"
                              :key="option.idsubzoning"
                              :value="option.idsubzoning"
                            >
                              {{ option.description }}
                            </option>
                          </b-select>
                        </b-field>
                      </b-navbar-item>
                    </template>
                    <template #end>
                      <b-navbar-item>
                        <b-field>
                          <b-button @click="getComplaintsPerZones(selectZone, selectSubZone, selectYear.fecha_captura)">
                            Filtrar
                          </b-button>
                        </b-field>
                      </b-navbar-item>
                    </template>
                  </b-navbar>
                  <div
                    v-if="seriesComplaintsPerMonth[0].data.length > 0"
                    class="card-content is-flex is-justify-content-center"
                  >
                    <apexchart
                      width="800"
                      type="bar"
                      :options="optionsComplaintsPerMonth"
                      :series="seriesComplaintsPerMonth"
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
      </div>
      <!-- Denuncias filtrado por ilicitos -->
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Denuncias por ilícito denunciado
              </p>
            </header>
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <b-navbar>
                    <template slot="brand">
                      <b-navbar-item>
                        <b-field horizontal label="Ilícitos">
                          <b-select
                            v-model="selectIlicit"
                            placeholder="Seleccione una opción"
                            :expanded="true"
                          >
                            <option
                              v-for="option in ilicits"
                              :key="option.idilicit_denounced"
                              :value="option.idilicit_denounced"
                            >
                              {{ option.description }}
                            </option>
                          </b-select>
                        </b-field>
                      </b-navbar-item>
                    </template>
                    <template #end>
                      <b-navbar-item>
                        <b-field>
                          <b-button @click="getComplaintsPerIlicits(selectIlicit, selectYear.fecha_captura)">
                            Filtrar
                          </b-button>
                        </b-field>
                      </b-navbar-item>
                    </template>
                  </b-navbar>
                  <div
                    v-if="seriesComplaintsIlicitsPerMonth[0].data.length > 0"
                    class="card-content is-flex is-justify-content-center"
                  >
                    <apexchart
                      width="800"
                      type="bar"
                      :options="optionsComplaintsIlicitsPerMonth"
                      :series="seriesComplaintsIlicitsPerMonth"
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
      </div>
      <!-- Denuncias filtrado por presentadas y concluidas -->
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Denuncias si son o no concluidas
              </p>
            </header>
            <div class="card-content">
              <div
                v-if="seriesComplaintsFinish.length > 0"
                class="card-content is-flex is-justify-content-center"
              >
                <apexchart
                  width="380"
                  type="donut"
                  :options="optionsComplaintsFinish"
                  :series="seriesComplaintsFinish"
                />
              </div>
              <div v-else class="card-content has-text-centered">
                <p>No hay datos por mostrar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Opiniones técnicas filtrado por tipo de resultado -->
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Opiniones técnicas por tipo de respuesta
              </p>
            </header>
            <div class="card-content">
              <div
                v-if="seriesOp.length > 0"
                class="card-content is-flex is-justify-content-center"
              >
                <apexchart
                  width="380"
                  type="donut"
                  :options="optionsOp"
                  :series="seriesOp"
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
      zones: [],
      subZones: [],
      selectZone: null,
      selectSubZone: null,
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
        labels: ['Revisado', 'En revisión', 'Por revisar'],
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
                filename: 'bitácoras-por-estado',
                columnDelimiter: ',',
                headerCategory: 'Estado',
                headerValue: 'Bitácoras',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'bitácoras-por-estado'
              },
              png: {
                filename: 'bitácoras-por-estado'
              }
            }
          }
        }
      },
      binnacles: [],
      optionsComplaintsPerMonth: {
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
              return parseInt(val) + ' registros'
            }
          }
        },
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
                filename: 'bitácoras-por-zona-y-subzona',
                columnDelimiter: ',',
                headerCategory: 'Mes',
                headerValue: 'Bitácoras',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'bitácoras-por-zona-y-subzona'
              },
              png: {
                filename: 'bitácoras-por-zona-y-subzona'
              }
            }
          }
        }
      },
      seriesComplaintsPerMonth: [
        {
          name: 'Denuncias',
          data: []
        }
      ],
      complaints: [],
      complaintsIlicits: [],
      ilicits: [],
      selectIlicit: null,
      optionsComplaintsIlicitsPerMonth: {
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
              return parseInt(val) + ' registros'
            }
          }
        },
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
                filename: 'denuncias-por-ilícito',
                columnDelimiter: ',',
                headerCategory: 'Mes',
                headerValue: 'Denuncias',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'denuncias-por-ilícito'
              },
              png: {
                filename: 'denuncias-por-ilícito'
              }
            }
          }
        }
      },
      seriesComplaintsIlicitsPerMonth: [
        {
          name: 'Denuncias',
          data: []
        }
      ],
      resOps: [],
      filterOps: [],
      optionsOp: {
        labels: ['Positivo', 'Negativo', 'Condicionado', 'Otro'],
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
                filename: 'opiniones-tecnicas-por-respuesta',
                columnDelimiter: ',',
                headerCategory: 'Respuesta',
                headerValue: 'Opiniones técnicas',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'opiniones-tecnicas-por-respuesta'
              },
              png: {
                filename: 'opiniones-tecnicas-por-respuesta'
              }
            }
          }
        }
      },
      seriesOp: [],
      optionsComplaintsFinish: {
        labels: ['Presentados', 'Concluido'],
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
                filename: 'denuncias-concluidas-y-no-concluidas',
                columnDelimiter: ',',
                headerCategory: 'Respuesta',
                headerValue: 'Opiniones técnicas',
                dateFormatter (timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: 'denuncias-concluidas-y-no-concluidas'
              },
              png: {
                filename: 'denuncias-concluidas-y-no-concluidas'
              }
            }
          }
        }
      },
      seriesComplaintsFinish: []
    }
  },
  async mounted () {
    this.getZonings()
    this.getSubZonings()
    this.getIlicits()
    this.getResponsesOp()
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
        // console.log(error)
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
          // console.log(error)
        }
      }
    },
    async viewYearData () {
      this.isLoading = true
      this.seriesPlansPerMoth[0].data = []
      // await this.getTechOp(this.selectYear.fecha_captura)
      await this.getBinnacles(this.selectYear.fecha_captura)
      await this.getPlanifications(this.selectYear.fecha_captura)
      await this.getComplaintsPerZones(null, null, this.selectYear.fecha_captura)
      await this.getComplaintsPerIlicits(null, this.selectYear.fecha_captura)
      await this.getOp(this.selectYear.fecha_captura)
      await this.getComplaintsPerResposne(this.selectYear.fecha_captura)
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
        // // // console.log(error)
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
        // // console.log(res)
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
        // // console.log(error)
      }
    },
    // Denuncias por zona y subzona
    async getComplaintsPerZones (zone, subzone, selectYear) {
      // // console.log(zone)
      // // console.log(subzone)
      // // console.log(selectYear)
      this.seriesComplaintsPerMonth[0].data = []
      let filterFlag = false
      if (zone || subzone) {
        filterFlag = true
      } else {
        filterFlag = false
      }
      try {
        const res = await this.$store.dispatch(
          'modules/complaint/getComplaints'
        )
        this.complaints = []
        let temporalComplaints = []
        const resTemporal = res.filter((x) => {
          if (selectYear) {
            const temporalDate = new Date(x.date_reception)
            if (temporalDate.getFullYear() === Number(selectYear)) {
              return x
            }
          } else {
            const temporalDate = new Date(x.date_reception)
            const today = new Date()
            if (temporalDate.getFullYear() === today.getFullYear()) {
              return x
            }
          }
        })
        // // console.log(resTemporal)
        if (zone) {
          temporalComplaints = resTemporal.filter((x) => {
            if (x.list_subzoning_complaint) {
              const temporal = x.list_subzoning_complaint.filter(
                (x) => x.idzoning === zone
              )
              if (temporal.length > 0) {
                return x
              }
            }
          })
        }
        if (subzone) {
          if (temporalComplaints.length > 0) {
            temporalComplaints = temporalComplaints.filter((x) => {
              const temporal = x.list_subzoning_complaint.filter(
                (x) => x.idsubzoning === subzone
              )
              if (temporal.length > 0) {
                return x
              }
            })
          } else {
            temporalComplaints = resTemporal.filter((x) => {
              const temporal = x.list_subzoning_complaint.filter(
                (x) => x.idsubzoning === subzone
              )
              if (temporal.length > 0) {
                return x
              }
            })
          }
        }
        if (temporalComplaints.length > 0) {
          for (let i = 0; i < 12; i++) {
            const temporalFilter = temporalComplaints.filter((x) => {
              const temporalDate = new Date(x.date_reception)
              if (temporalDate.getMonth() === i) {
                return x
              }
            })
            this.seriesComplaintsPerMonth[0].data.push(
              parseInt(temporalFilter.length)
            )
          }
          this.complaints = temporalComplaints
        } else if (!filterFlag) {
          for (let i = 0; i < 12; i++) {
            const temporalFilter = resTemporal.filter((x) => {
              const temporalDate = new Date(x.date_reception)
              if (temporalDate.getMonth() === i) {
                return x
              }
            })
            this.seriesComplaintsPerMonth[0].data.push(
              parseInt(temporalFilter.length)
            )
          }
          this.complaints = resTemporal
          // console.log(this.complaints)
          // console.log(this.seriesComplaintsPerMonth[0].data)
        } else {
          this.complaints = []
          this.seriesComplaintsPerMonth[0].data = []
        }
      } catch (error) {
        // // // console.log(error)
      }
    },
    // Denuncias por ilicitio denunciado
    async getComplaintsPerIlicits (ilicit, selectYear) {
      // // console.log(zone)
      // // console.log(subzone)
      // // console.log(selectYear)
      // // console.log('hola')
      this.seriesComplaintsIlicitsPerMonth[0].data = []
      let filterFlag = false
      if (ilicit) {
        filterFlag = true
      } else {
        filterFlag = false
      }
      try {
        const res = await this.$store.dispatch(
          'modules/complaint/getComplaints'
        )
        this.complaints = []
        let temporalComplaints = []
        const resTemporal = res.filter((x) => {
          if (selectYear) {
            const temporalDate = new Date(x.date_reception)
            if (temporalDate.getFullYear() === Number(selectYear)) {
              return x
            }
          } else {
            const temporalDate = new Date(x.date_reception)
            const today = new Date()
            if (temporalDate.getFullYear() === today.getFullYear()) {
              return x
            }
          }
        })
        // // console.log(resTemporal)
        if (ilicit) {
          // // console.log(ilicit)
          temporalComplaints = resTemporal.filter(x => parseInt(x.idilicit_denounced) === parseInt(ilicit))
        }
        // console.log(temporalComplaints)
        if (temporalComplaints.length > 0) {
          for (let i = 0; i < 12; i++) {
            const temporalFilter = temporalComplaints.filter((x) => {
              const temporalDate = new Date(x.date_reception)
              if (temporalDate.getMonth() === i) {
                return x
              }
            })
            this.seriesComplaintsIlicitsPerMonth[0].data.push(
              parseInt(temporalFilter.length)
            )
          }
          this.complaintsIlicits = temporalComplaints
        } else if (!filterFlag) {
          for (let i = 0; i < 12; i++) {
            const temporalFilter = resTemporal.filter((x) => {
              const temporalDate = new Date(x.date_reception)
              if (temporalDate.getMonth() === i) {
                return x
              }
            })
            this.seriesComplaintsIlicitsPerMonth[0].data.push(
              parseInt(temporalFilter.length)
            )
          }
          this.complaintsIlicits = resTemporal
          // console.log(resTemporal)
          // console.log(this.seriesComplaintsIlicitsPerMonth[0].data)
        } else {
          // console.log(resTemporal)
          this.complaintsIlicits = []
          this.seriesComplaintsIlicitsPerMonth[0].data = []
        }
      } catch (error) {
        // // // console.log(error)
      }
    },
    // Dencuncias por fecha procesada
    async getComplaintsPerResposne (selectYear) {
      this.seriesComplaintsFinish = []
      try {
        const res = await this.$store.dispatch(
          'modules/complaint/getComplaints'
        )
        const resTemporal = res.filter((x) => {
          if (selectYear) {
            const temporalDate = new Date(x.date_reception)
            if (temporalDate.getFullYear() === Number(selectYear)) {
              return x
            }
          } else {
            const temporalDate = new Date(x.date_reception)
            const today = new Date()
            if (temporalDate.getFullYear() === today.getFullYear()) {
              return x
            }
          }
        })
        const responseDate = resTemporal.filter((x) => {
          if (x.response_date) {
            return x
          }
        })
        const notResponseDate = resTemporal.filter((x) => {
          if (!x.response_date) {
            return x
          }
        })
        if (notResponseDate.length > 0) {
          this.seriesComplaintsFinish.push(notResponseDate.length)
        } else {
          this.seriesComplaintsFinish.push(0)
        }
        if (responseDate.length > 0) {
          this.seriesComplaintsFinish.push(responseDate.length)
        } else {
          this.seriesComplaintsFinish.push(0)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // Zonas y subzonas
    async getSubZonings () {
      try {
        const res = await this.$store.dispatch('modules/zones/getSubZones')
        // console.log(res)
        this.subZones = res
      } catch (error) {
        // console.log(error)
      }
    },
    async getZonings () {
      try {
        const res = await this.$store.dispatch('modules/zones/getZones')
        // console.log(res)
        this.zones = res
      } catch (error) {
        // console.log(error)
      }
    },
    // Ilicitos
    async getIlicits () {
      try {
        this.ilicits = await this.$store.dispatch('modules/ilicitDenounced/getIlicitDenounceds')
        // console.log(this.ilicits)
      } catch (error) {
        // console.log(error)
      }
    },
    // tipos de respuestas de opiniones técnicas
    async getResponsesOp () {
      try {
        this.resOps = await this.$store.dispatch('modules/responseOp/getResponseOps')
        // console.log(this.resOps)
      } catch (error) {
        // console.log(error)
      }
    },
    // Opiniones técnicas
    async getOp (selectYear) {
      this.seriesOp = []
      try {
        const res = await this.$store.dispatch('modules/technicalOp/getTechnicalOps')
        const opsYear = res.filter((x) => {
          const temporalDate = new Date(x.application_date)
          if (temporalDate.getFullYear() === Number(selectYear)) {
            return x
          }
        })
        for (const i in this.resOps) {
          console.log(this.resOps[i])
          const temporal = opsYear.filter((x) => {
            if (this.resOps[i].description === x.response_op) {
              return x
            }
          })
          if (temporal.length > 0) {
            this.seriesOp.push(temporal.length)
          } else {
            this.seriesOp.push(0)
          }
          // console.log(temporal)
        }
        // console.log(temporal)
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
