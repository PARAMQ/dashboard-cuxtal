<template>
  <section class="hero is-cuxtal">
    <div v-if="!hasEdit" class="cont">
      <div class="card is-principal m-2">
        <div class="card-header">
          <div class="card-header-title">
            <p class="subtitle">
              <strong>Denuncias</strong>
            </p>
          </div>
        </div>
        <div class="card-content">
          <div class="level">
            <div class="level-left">
              <!--
                <div class="level-item">
                  <b-select v-model="plan.estatus">
                    <option
                      v-for="option in options"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </b-select>
                </div>
                <div class="level-item">
                  <b-button
                    size="is-small"
                    type="is-success is-light"
                    icon-right="content-save"
                    @click="updateStatus"
                  />
                </div>
                  -->
            </div>
            <div class="level-right">
              <!--
              <div class="level-item">
                <b-button @click="isActive = true">
                  Nueva bitácora extraordinaria
                </b-button>
              </div>
              -->
              <div class="level-item">
                <b-button @click="isActiveIncident = true">
                  Nueva denuncia
                </b-button>
              </div>
              <!--
                <div class="level-item">
                  <b-button type="is-danger" @click="deletePlan">
                    Eliminar recorrido
                  </b-button>
                </div>
                  -->
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="(binnacle, index) in binnacles"
                    :key="binnacle.idbinnacle"
                    class="container"
                  >
                    <div class="card" @click="viewBinnacle(binnacle, index)">
                      <div class="card-content">
                        <p><strong>Oficio:</strong> {{ binnacle.code }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-8 has-text-centered">
              <div v-if="hasSelect" class="card is-card-binnacle">
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          {{ binaccleSelect.number }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right m-2">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="editBinnacle"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteBinnacle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <b-loading v-model="isLoadingCard" :is-full-page="false" :can-cancel="false" />
                  <div>
                    <div class="divider">
                      <strong>Datos generales</strong>
                    </div>
                    <div class="m-1">
                      <strong>Código de oficio: </strong>{{ binaccleSelect.code }}
                    </div>
                    <div class="columns">
                      <div class="column">
                        <strong>Fecha de oficio de denuncia: </strong>{{ binaccleSelect.date | shortDate }}
                      </div>
                      <div class="column">
                        <strong>Fecha de recepción de denuncia: </strong>{{ binaccleSelect.date_reception | shortDate }}
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <strong>Dirección de predio: </strong>{{ binaccleSelect.address }}
                      </div>
                      <div class="column">
                        <strong>Tipo de predio: </strong>{{ binaccleSelect.tenure }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="divider">
                      <strong>Ilícito denunciado</strong>
                    </div>
                    <div class="m-1">
                      <strong>Ilícito ambiental denunciado: </strong>{{ binaccleSelect.ilicito }}
                    </div>
                    <div class="columns">
                      <div class="column">
                        <strong>Denuncia presentada ante: </strong>{{ binaccleSelect.dependencia }}
                      </div>
                      <div class="column">
                        <strong>Nivel de gobierno: </strong>{{ binaccleSelect.gobierno }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="divider">
                      <strong>Vegetación afectada</strong>
                    </div>
                    <div v-if="binaccleSelect.vegetacion">
                      <div v-for="element in binaccleSelect.vegetacion" :key="element.idva" class="m-1">
                        - {{ element.description }}
                      </div>
                    </div>
                    <div v-else>
                      <div>
                        <p>No hay vegetación relacionada</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="divider">
                      <strong>Zonas</strong>
                    </div>
                    <div v-if="binaccleSelect.vegetacion">
                      <div v-for="element in binaccleSelect.vegetacion" :key="element.idva" class="m-1">
                        - {{ element.description }}
                      </div>
                    </div>
                    <div v-else>
                      <div>
                        <p>No hay vegetación relacionada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <p>Selecciona un registro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="hasEdit" class="cont">
      <div class="card is-principal m-2">
        <div class="card-header">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="card-header-title">
                  <strong>{{ binnacleSelect.number }}</strong>
                </p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <b-button
                  size="is-small"
                  type="is-light"
                  icon-right="keyboard-return"
                  @click="cancelEdit"
                >
                  Regresar
                </b-button>
              </div>
              <div class="level-item">
                <b-button
                  size="is-small"
                  type="is-success is-light"
                  icon-right="content-save"
                  @click="saveEdit"
                >
                  Guardar
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <!--
                <div class="columns has-text-centered">
                  <div class="column">
                    <b-field label="Fecha">
                      <b-datepicker v-model="binnacleSelect.date" inline />
                    </b-field>
                  </div>
                  <div class="column">
                    <div class="container m-2">
                      <div class="columns">
                        <div class="column">
                          <b-field label="Hora de inicio">
                            <b-timepicker v-model="binnacleSelect.hour_init" inline />
                          </b-field>
                        </div>
                        <div class="column">
                          <b-field label="Hora de finalización">
                            <b-timepicker v-model="binnacleSelect.hour_end" inline />
                          </b-field>
                        </div>
                      </div>
                    </div>
                    <br>
                    <div class="container m-2">
                      <b-field label="Vehículo">
                        <b-select v-model="binnacleSelect.idvehicle">
                          <option
                            v-for="vehicle in vehicles"
                            :key="vehicle.idvehicle"
                            :value="vehicle.idvehicle"
                          >
                            {{ vehicle.number }} - {{ vehicle.subbrand }}
                          </option>
                        </b-select>
                      </b-field>
                      <b-field label="Participantes">
                        <b-taginput
                          v-model="binnacleSelect.participants"
                          :data="filteredParticipants"
                          field="name"
                          autocomplete
                          @typing="filterData"
                        >
                          <template v-slot="props">
                            <strong>{{ props.option.name }}
                              {{ props.option.lastname }}</strong>
                          </template>
                          <template #empty>
                            Sin resultados
                          </template>
                        </b-taginput>
                      </b-field>
                    </div>
                  </div>
                </div>
                -->
        </div>
      </div>
    </div>
    <new-binnacle
      :active-modal="isActive"
      :is-extraordinary="true"
      :type="'Complaint'"
      @update="refresh"
      @close="isActive = false"
    />
    <edit-binnacle
      :active-modal="isActiveEdit"
      :id-binnacle="idBinnacle"
      :is-extraordinary="true"
      :type="'Complaint'"
      @update="refresh"
      @close="isActiveEdit = false"
    />
    <new-incident
      :active-modal="isActiveIncident"
      @close="isActiveIncident = false"
      @create="refresh"
    />
  </section>
</template>

<script>
export default {
  name: 'Complaint',
  data () {
    return {
      idPlanification: this.$route.query.id,
      hasEdit: false,
      idBinnacle: '',
      isActiveEdit: false,
      isActiveIncident: false,
      hasSelect: false,
      binnacleSelect: {},
      vehicles: [],
      participants: [],
      filteredParticipants: [],
      binnacles: [],
      tenures: [],
      isLoadingCard: false,
      isActive: false,
      zoom: 12,
      center: [0, 0],
      point: [-89.60984537598705, 20.85610769792424],
      rotation: 0,
      options: [
        {
          label: 'Finalizado',
          value: 'success'
        },
        {
          label: 'En proceso',
          value: 'warning'
        },
        {
          label: 'Programado',
          value: 'info'
        },
        {
          label: 'Sin estado',
          value: null
        }
      ]
    }
  },
  created () {},
  mounted () {
    this.getData()
    this.getVehicles()
    this.getParticipants()
  },
  methods: {
    async getData () {
      try {
        this.binnacles = await this.$store.dispatch('modules/complaint/getComplaints')
      } catch (error) {
        console.log(error)
      }
    },
    refresh () {
      this.isActive = false
      this.isActiveEdit = false
      this.isActiveIncident = false
      this.idBinnacle = ''
      this.binnacleSelect = {}
      this.getData()
    },
    editBinnacle () {
      this.isActiveEdit = true
    },
    async deleteBinnacle () {
      try {
        if (this.plan.binnacles_deleted) {
          this.plan.binnacles_deleted.push(
            this.plan.binnacles[this.indexBinnacle]
          )
        } else {
          this.plan.binnacles_deleted = [
            this.plan.binnacles[this.indexBinnacle]
          ]
        }
        await this.$store.dispatch(
          'modules/plans/createOrUpdatePlan',
          this.plan
        )
        this.$buefy.toast.open({
          message: '¡Bitácora eliminada!',
          type: 'is-success'
        })
        this.hasSelect = false
        this.binnacleSelect = {}
        this.refresh()
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente más tarde',
          type: 'is-danger'
        })
        console.log(error)
      }
    },
    async viewBinnacle (binnacle, index) {
      console.log(binnacle)
      this.isLoadingCard = true
      const tenure = await this.getTenure(binnacle.idtenure)
      const ilicit = await this.getIlicit(binnacle.idilicit_denounced)
      const gobLevel = await this.getGobLevel(binnacle.idgov_level)
      const operativeZone = await this.getOperativeZone(binnacle.idoperative_zones)
      const zone = await this.getZoning(binnacle.idzoning)
      const subZone = await this.getSubZoning(binnacle.idsubzonning)
      const dependencia = await this.getDependencia(binnacle.iddepto)
      const vegetacion = await this.getVegetable(binnacle.complaint_va)
      binnacle.ilicito = ilicit
      binnacle.tenure = tenure
      binnacle.gobierno = gobLevel
      binnacle.opZone = operativeZone
      binnacle.zone = zone
      binnacle.subZone = subZone
      binnacle.dependencia = dependencia
      binnacle.vegetacion = vegetacion
      this.hasSelect = false
      this.binnacleSelect = {}
      this.hasSelect = true
      this.binaccleSelect = binnacle
      this.idBinnacle = binnacle.idbinnacle
      this.indexBinnacle = index
      this.isLoadingCard = false
    },
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
      } catch (error) {
        console.log(error)
      }
    },
    async getVegetable (array) {
      if (array) {
        const vegetableA = []
        for (const element in array) {
          try {
            const res = await this.$store.dispacth('modules/vegetation/getInfoVegetation', element.idva)
            vegetableA.push(res)
          } catch (error) {
            console.log(error)
          }
        }
        return vegetableA
      } else {
        return null
      }
    },
    async getDependencia (id) {
      console.log(id)
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/coordinations/getInfoCoordination', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      } else {
        return 'Sin descripción'
      }
    },
    async getGobLevel (id) {
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/gobLevel/getInfoGobLevel', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      } else {
        return 'Sin descripción'
      }
    },
    async getZoning (id) {
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/zones/getInfoZone', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      } else {
        return 'Sin descripción'
      }
    },
    async getSubZoning (id) {
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/zones/getInfoSubZone', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      }
    },
    async getOperativeZone (id) {
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/zones/getInfoZone', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      }
    },
    async getIlicit (id) {
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/ilicitDenounced/getInfoIlicitDenounced', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      } else {
        return 'Sin descripción'
      }
    },
    async getTenure (id) {
      if (id) {
        try {
          const res = await this.$store.dispatch('modules/tenure/getInfoTenure', id)
          return res.description
        } catch (error) {
          console.log(error)
        }
      } else {
        return 'Sin descripción'
      }
    },
    async updateStatus () {
      try {
        await this.$store.dispatch(
          'modules/plans/createOrUpdatePlan',
          this.plan
        )
        this.$buefy.toast.open({
          message: '¡Estado actualizado!',
          type: 'is-success'
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.participants = res
      } catch (error) {
        console.log(error)
      }
    },
    filterData (text) {
      this.filteredParticipants = this.participants.filter((option) => {
        if (option.name.toString().toLowerCase().includes(text.toLowerCase())) {
          return option
        }
      })
    },
    cancelEdit () {
      this.hasEdit = false
      this.hasSelect = false
      this.refresh()
    },
    saveEdit () {
      console.log(this.binnacleSelect)
    },
    viewPoint (point) {
      this.point = [point.x, point.y]
    },
    async deletePlan () {
      try {
        console.log(this.plan)
        await this.$store.dispatch('modules/plans/deletePlan', this.plan)
        this.$buefy.toast.open({
          message: '¡Planificación eliminada!',
          type: 'is-success'
        })
        this.$router.push('/calendar')
      } catch (error) {
        console.log(error)
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente más tarde',
          type: 'is-danger'
        })
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
.card.is-principal {
  background-color: white !important;
  width: 1000px;
}
.card {
  background-color: white !important;
}
.is-card-binnacle {
  min-width: 300px;
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
.cont {
  margin-left: auto;
  margin-right: auto;
}
.animation-content.modal-content {
  max-width: 1200px !important;
}
</style>
