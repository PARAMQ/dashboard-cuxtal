<template>
  <section class="hero is-cuxtal">
    <div v-if="!hasEdit" class="cont">
      <div class="card is-principal m-2">
        <div class="card-header">
          <div class="card-header-title">
            <p class="subtitle">
              <strong>Programadas</strong>
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
              <div class="level-item">
                <b-button @click="isActive = true">
                  Nueva bitácora programada
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
                        <p><strong>Folio:</strong> {{ binnacle.number }}</p>
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
                    <div class="level-right">
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
                  <div>
                    <div class="divider">
                      <p>Datos generales</p>
                    </div>
                    <p>
                      <strong>Estado actual de la bitácora:</strong>
                      {{ binaccleSelect.status | statusBinnacle }}
                    </p>
                    <p><strong>Fecha:</strong> {{ binaccleSelect.date }}</p>
                    <p>
                      <strong>Hora de inicio:</strong>
                      {{ binaccleSelect.hour_init | getTime }}
                    </p>
                    <p>
                      <strong>Hora de finalización</strong>
                      {{ binaccleSelect.hour_end | getTime }}
                    </p>
                  </div>
                  <div class="divider">
                    <p>Vehículos</p>
                  </div>
                  <div>
                    <div
                      v-if="
                        binaccleSelect.list_vehicle &&
                          binaccleSelect.list_vehicle.length > 0
                      "
                    >
                      <p class="subtitle">
                        Vehículos:
                      </p>
                      <div
                        v-for="vehicle in binaccleSelect.list_vehicle"
                        :key="vehicle.idvehicle"
                      >
                        <b-taglist attached class="m-2">
                          <b-tag type="is-light">
                            {{ vehicle.number }}
                          </b-tag>
                          <b-tag type="is-info">
                            {{ vehicle.model }} - {{ vehicle.brand }}
                          </b-tag>
                        </b-taglist>
                      </div>
                    </div>
                    <div v-else>
                      No hay vehiculos asociados
                    </div>
                  </div>
                  <div class="divider">
                    <p>Participantes</p>
                  </div>
                  <div>
                    <div
                      v-if="
                        binaccleSelect.participants &&
                          binaccleSelect.participants.length > 0
                      "
                    >
                      <p class="subtitle">
                        Participantes:
                      </p>
                      <div
                        v-for="participant in binaccleSelect.participants"
                        :key="participant.idparticipant"
                        class="has-text-centered"
                      >
                        <p>{{ participant.name }} {{ participant.lastname }}</p>
                      </div>
                    </div>
                    <div v-else>
                      No hay participantes asociados
                    </div>
                  </div>
                  <div class="divider">
                    <p>Coordenadas</p>
                  </div>
                  <div>
                    <div v-if="binaccleSelect.coordinates_binnacle">
                      <div class="columns">
                        <div class="column is-3">
                          <div
                            v-for="coordinate in binaccleSelect.coordinates_binnacle"
                            :key="coordinate.idcoordinates"
                          >
                            <b-tag class="m-2" @click="viewPoint(coordinate)">
                              {{ coordinate.name }}
                            </b-tag>
                          </div>
                        </div>
                        <div class="column is-9">
                          <vl-map
                            :load-tiles-while-animating="true"
                            :load-tiles-while-interacting="true"
                            data-projection="EPSG:4326"
                            style="height: 400px"
                          >
                            <vl-view
                              :zoom="zoom"
                              :center.sync="point"
                              :rotation="rotation"
                            />

                            <vl-layer-tile id="osm">
                              <vl-source-osm />
                            </vl-layer-tile>

                            <vl-feature
                              id="point"
                              :properties="{ prop: 'value', prop2: 'value' }"
                            >
                              <vl-geom-point :coordinates="point" />
                            </vl-feature>
                          </vl-map>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      sd No hay coordenadas asociadas
                    </div>
                  </div>
                  <div class="divider">
                    <p>Evidencias</p>
                  </div>
                  <div>
                    <div
                      v-if="
                        binaccleSelect.list_image &&
                          binaccleSelect.list_image.length > 0
                      "
                    >
                      <b-carousel :indicator-inside="false">
                        <b-carousel-item
                          v-for="item in binaccleSelect.list_image"
                          :key="item.idimage"
                        >
                          <b-image class="image" :src="item.path" />
                        </b-carousel-item>
                        <template #indicators="props">
                          <b-image
                            class="al image"
                            :src="props.path"
                            :title="props.description"
                          />
                        </template>
                      </b-carousel>
                    </div>
                    <div v-else>
                      No hay evidencias
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <p>Selecciona una bitácora</p>
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
      :type="'programmed'"
      @update="refresh"
      @close="isActive = false"
    />
    <edit-binnacle
      :active-modal="isActiveEdit"
      :id-binnacle="idBinnacle"
      :is-extraordinary="true"
      :type="'programmed'"
      @update="refresh"
      @close="isActiveEdit = false"
    />
  </section>
</template>

<script>
export default {
  name: 'Programmed',
  data () {
    return {
      idPlanification: this.$route.query.id,
      hasEdit: false,
      idBinnacle: '',
      isActiveEdit: false,
      hasSelect: false,
      binnacleSelect: {},
      vehicles: [],
      participants: [],
      filteredParticipants: [],
      binnacles: [],
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
        const res = await this.$store.dispatch(
          'modules/binnacles/getBinnacles'
        )
        const filterBinnacles = res.filter(x => x.isextraordinary && x.type === 'programmed')
        this.binnacles = filterBinnacles
      } catch (error) {
        // // console.log(error)
      }
    },
    refresh () {
      this.isActive = false
      this.isActiveEdit = false
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
        // // console.log(error)
      }
    },
    viewBinnacle (binnacle, index) {
      this.hasSelect = false
      this.binnacleSelect = {}
      this.hasSelect = true
      this.binaccleSelect = binnacle
      this.idBinnacle = binnacle.idbinnacle
      // // console.log(this.binaccleSelect)
      this.indexBinnacle = index
    },
    async getVehicles () {
      try {
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehicles = res
      } catch (error) {
        // // console.log(error)
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
        // // console.log(error)
      }
    },
    async getParticipants () {
      try {
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants'
        )
        this.participants = res
      } catch (error) {
        // // console.log(error)
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
      // // console.log(this.binnacleSelect)
    },
    viewPoint (point) {
      this.point = [point.x, point.y]
    },
    async deletePlan () {
      try {
        // // console.log(this.plan)
        await this.$store.dispatch('modules/plans/deletePlan', this.plan)
        this.$buefy.toast.open({
          message: '¡Planificación eliminada!',
          type: 'is-success'
        })
        this.$router.push('/calendar')
      } catch (error) {
        // // console.log(error)
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
