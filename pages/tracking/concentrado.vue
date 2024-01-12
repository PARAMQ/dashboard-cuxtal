<template>
  <div id="home">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="container m-2">
      <div class="columns m-2">
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
                        :key="option.fecha_captura"
                        :value="option"
                      >
                        {{ option.fecha_captura }} - {{ option.dato }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field horizontal label="Zonas">
                    <b-select
                      v-model="selectZone"
                      placeholder="Seleccione una opción"
                    >
                      <option
                        v-for="option in zones"
                        :key="option.idzoning"
                        :value="option"
                      >
                        {{ option.description }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
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
                </div>
              </div>
              <div class="columns has-text-centered">
                <div class="column">
                  <b-button type="is-info is-light" @click="getData">
                    Visualizar
                  </b-button>
                </div>
                <div class="column">
                  <b-button type="is-warning is-light" @click="cleanFilters">
                    Borrar filtros
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns m-2">
        <div class="column">
          <div class="container m-4">
            <div class="card">
              <div class="card-content">
                <div class="columns">
                  <div class="column">
                    <div id="card-info" class="card">
                      <header class="card-header">
                        <p class="card-header-title">
                          Bitácoras del año
                          {{
                            selectYear ? selectYear.fecha_captura : dateNow.getFullYear()
                          }}
                          representados por mes
                        </p>
                      </header>
                      <div
                        v-if="seriesBinnaclesPerMonth[0].data.length > 0"
                        class="card-content is-flex is-justify-content-center"
                      >
                        <apexchart
                          width="380"
                          type="bar"
                          :options="optionsBinnaclesPerMonth"
                          :series="seriesBinnaclesPerMonth"
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
        </div>
      </div>
      <div class="columns m-2">
        <div class="column">
          <div class="container m-4">
            <div class="card">
              <div class="card-content">
                <div class="columns">
                  <div class="column">
                    <div id="card-info" class="card">
                      <header class="card-header">
                        <p class="card-header-title">
                          Denuncias del año
                          {{
                            selectYear ? selectYear.fecha_captura : dateNow.getFullYear()
                          }}
                          representados por mes
                        </p>
                      </header>
                      <div
                        v-if="seriesComplaintsPerMonth[0].data.length > 0"
                        class="card-content is-flex is-justify-content-center"
                      >
                        <apexchart
                          width="380"
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
        </div>
        <div class="column">
          <div class="container m-4">
            <div class="card">
              <div class="card-content">
                <div class="columns">
                  <div class="column">
                    <div id="card-info" class="card">
                      <header class="card-header">
                        <p class="card-header-title">
                          Opiniones técnicas del año
                          {{
                            selectYear ? selectYear.fecha_captura : dateNow.getFullYear()
                          }}
                          representados por mes
                        </p>
                      </header>
                      <div
                        v-if="seriesTechPerMonth[0].data.length > 0"
                        class="card-content is-flex is-justify-content-center"
                      >
                        <apexchart
                          width="380"
                          type="bar"
                          :options="optionsTechPerMonth"
                          :series="seriesTechPerMonth"
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
      techOps: [],
      complaints: [],
      TechsOp: [],
      binnacles: [],
      zones: [],
      selectZone: null,
      selectSubZone: null,
      subZones: [],
      optionsMetas: [],
      selectYear: {},
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
        noData: {
          text: 'Cargando...'
        }
      },
      seriesComplaintsPerMonth: [
        {
          name: 'Denuncias',
          data: []
        }
      ],
      optionsTechPerMonth: {
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
        noData: {
          text: 'Cargando...'
        }
      },
      seriesTechPerMonth: [
        {
          name: 'Denuncias',
          data: []
        }
      ],
      optionsBinnaclesPerMonth: {
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
        noData: {
          text: 'Cargando...'
        }
      },
      seriesBinnaclesPerMonth: [
        {
          name: 'Denuncias',
          data: []
        }
      ]
    }
  },
  async mounted () {
    this.isLoading = true
    this.getMetas()
    this.getZonings()
    this.getSubZonings()
    await this.getBinnacles(null, null, null)
    this.getComplaints(null, null, null)
    // this.getTechOp()
    this.isLoading = false
  },
  methods: {
    async getSubZonings () {
      try {
        const res = await this.$store.dispatch('modules/zones/getSubZones')
        console.log(res)
        this.subZones = res
      } catch (error) {
        console.log(error)
      }
    },
    async getZonings () {
      try {
        const res = await this.$store.dispatch('modules/zones/getZones')
        console.log(res)
        this.zones = res
      } catch (error) {
        console.log(error)
      }
    },
    async getComplaints (zone, subzone, selectYear) {
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
        // console.log(resTemporal)
        if (zone) {
          temporalComplaints = resTemporal.filter((x) => {
            if (x.list_subzoning_complaint) {
              const temporal = x.list_subzoning_complaint.filter((x) => x.idzoning === zone)
              if (temporal.length > 0) {
                return x
              }
            }
          })
        }
        if (subzone) {
          if (temporalComplaints.length > 0) {
            temporalComplaints = temporalComplaints.filter((x) => {
              const temporal = x.list_subzoning_complaint.filter((x) => x.idsubzoning === subzone)
              if (temporal.length > 0) {
                return x
              }
            })
          } else {
            temporalComplaints = resTemporal.filter((x) => {
              const temporal = x.list_subzoning_complaint.filter((x) => x.idsubzoning === subzone)
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
            this.seriesComplaintsPerMonth[0].data.push(parseInt(temporalFilter.length))
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
            this.seriesComplaintsPerMonth[0].data.push(parseInt(temporalFilter.length))
          }
          this.complaints = resTemporal
        } else {
          this.complaints = []
          this.seriesComplaintsPerMonth[0].data = []
        }
      } catch (error) {
        // // console.log(error)
      }
    },
    async getTechOp (zone, subzone) {
      try {
        const res = await this.$store.dispatch(
          'modules/technicalOp/getTechnicalOps'
        )
        this.techOps = []
        this.techOps = res.filter((x) => {})
        this.techOp = this.techOps.length
      } catch (error) {
        // console.log(error)
      }
    },
    async getBinnacles (zone, subzone, selectYear) {
      let filterFlag = false
      if (zone || subzone) {
        filterFlag = true
      } else {
        filterFlag = false
      }
      try {
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        this.binnacles = []
        let temporalBinnacles = []
        const resTemporal = res.filter((x) => {
          const temporalDate = new Date(x.date)
          if (selectYear) {
            // console.log(temporalDate.getFullYear())
            if (temporalDate.getFullYear() === Number(selectYear)) {
              // const tempBinnacle = await this.getBinnacle(x.idbinnacle)
              // console.log(tempBinnacle)
              return x
            }
          } else {
            const today = new Date()
            // console.log(temporalDate.getFullYear())
            // console.log(today.getFullYear())
            if (temporalDate.getFullYear() === today.getFullYear()) {
              // console.log('true')
              // const tempBinnacle = await this.getBinnacle(x.idbinnacle)
              // console.log(tempBinnacle)
              return x
            }
          }
        })
        // console.log(resTemporal)
        for (let i = 0; i < resTemporal.length; i++) {
          resTemporal[i] = await this.getBinnacle(resTemporal[i].idbinnacle)
        }
        // console.log(resTemporal)
        if (zone) {
          temporalBinnacles = resTemporal.filter((x) => {
            if (x.list_subzones) {
              const temporal = x.list_subzones.filter((x) => x.idzoning === zone)
              if (temporal.length > 0) {
                return x
              }
            }
          })
        }
        if (subzone) {
          // console.log(subzone)
          if (temporalBinnacles.length > 0) {
            temporalBinnacles = temporalBinnacles.filter((x) => {
              const temporal = x.list_subzones.filter((x) => x.idsubzoning === subzone)
              if (temporal.length > 0) {
                return x
              }
            })
          } else {
            temporalBinnacles = resTemporal.filter((x) => {
              const temporal = x.list_subzones.filter((x) => x.idsubzoning === subzone)
              if (temporal.length > 0) {
                return x
              }
            })
          }
        }
        // console.log(temporalBinnacles)
        // this.seriesBinnaclesPerMonth[0].data = []
        if (temporalBinnacles.length > 0) {
          for (let i = 0; i < 12; i++) {
            const temporalFilter = temporalBinnacles.filter((x) => {
              const temporalDate = new Date(x.date)
              if (temporalDate.getMonth() === i) {
                return x
              }
            })
            this.seriesBinnaclesPerMonth[0].data.push(parseInt(temporalFilter.length))
          }
          this.binnacles = temporalBinnacles
        } else if (!filterFlag) {
          for (let i = 0; i < 12; i++) {
            const temporalFilter = resTemporal.filter((x) => {
              const temporalDate = new Date(x.date)
              if (temporalDate.getMonth() === i) {
                return x
              }
            })
            this.seriesBinnaclesPerMonth[0].data.push(parseInt(temporalFilter.length))
          }
          this.binnacles = resTemporal
        } else {
          this.binnacles = []
          this.seriesBinnaclesPerMonth[0].data = []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getBinnacle (id) {
      try {
        const res = await this.$store.dispatch('modules/binnacles/getBinnacle', id)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    async getData () {
      this.isLoading = true
      this.seriesBinnaclesPerMonth[0].data = []
      this.seriesComplaintsPerMonth[0].data = []
      const temporalZone = this.selectZone ? this.selectZone : null
      const temporalSubZone = this.selectSubZone ? this.selectSubZone : null
      const temporalYear = this.selectYear ? this.selectYear.fecha_captura : null
      // console.log(temporalZone, temporalSubZone, temporalYear)
      await this.getBinnacles(temporalZone, temporalSubZone, temporalYear)
      await this.getComplaints(temporalZone, temporalSubZone, temporalYear)
      // await this.getTechOp(this.selectZone, this.selectSubZone)
      this.isLoading = false
    },
    async cleanFilters () {
      this.isLoading = true
      await this.getMetas()
      this.selectSubZone = null
      this.selectZone = null
      // this.selectYear = null
      this.seriesBinnaclesPerMonth[0].data = []
      this.seriesComplaintsPerMonth[0].data = []
      await this.getBinnacles(null, null, null)
      await this.getComplaints(null, null, null)
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
    }
  }
}
</script>

<style>
#home {
  background-color: #0403039a;
  background-image: url('assets/cuxtal/background.jpg');
  background-repeat: repeat;
  background-size: 100%;
  background-origin: content-box;
  background-position: center center;
}
.card {
  background: white;
}
</style>
