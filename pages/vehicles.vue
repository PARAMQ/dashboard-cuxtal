<template>
  <section class="hero is-cuxtal">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="true" />
    <div class="container mt-4">
      <div class="card p-2">
        <div class="card-content">
          <nav class="level">
            <div class="level-left" />
            <div class="level-right">
              <p class="level-item">
                <b-button type="is-primary" outlined @click="isActive = true">
                  Nuevo vehículo
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="vehiculo in vehiculos"
                    :key="vehiculo.idvehicle"
                    class="container"
                  >
                    <div class="card" @click="viewVehicle(vehiculo)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon
                                  icon="car-estate"
                                  custom-size="default"
                                />
                                {{ vehiculo.number }} - {{ vehiculo.subbrand }}
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
              class="column is-8 is-flex is-justify-content-center has-text-centered"
            >
              <div
                v-if="selectVehicle && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          Número de identificación: {{ vehicle.number }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="editVehicle"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteVehicle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <p class="is-size-3">
                    Modelo: {{ vehicle.model }}
                  </p>
                  <p class="is-size-4">
                    Marca: {{ vehicle.brand }} - {{ vehicle.subbrand }}
                  </p>
                  <p class="is-size-4">
                    Placa: {{ vehicle.plates }}
                  </p>
                </div>
              </div>
              <div
                v-else-if="selectVehicle && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          Número de identificación: {{ vehicle.number }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-light"
                          icon-right="keyboard-return"
                          @click="cancelEdit"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-success is-light"
                          icon-right="content-save"
                          @click="saveEdit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <section>
                    <b-field label="Número de identificación">
                      <b-input
                        v-model="vehicle.number"
                        name="Nº identificación"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field label="Placa del vehículo">
                      <b-input
                        v-model="vehicle.plates"
                        name="placa"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field label="Modelo del vehículo">
                      <b-input
                        v-model="vehicle.model"
                        name="modelo"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field label="Marca del vehículo">
                      <b-input
                        v-model="vehicle.brand"
                        name="marca"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field
                      label="Línea del vehículo"
                      message="Ejemplo: Pickup, Sedan"
                    >
                      <b-input
                        v-model="vehicle.subbrand"
                        name="marca"
                        type="text"
                        required
                      />
                    </b-field>
                  </section>
                </div>
              </div>
              <div v-else class="card">
                <div class="card-content">
                  <h1 class="is-size-3">
                    Selecciona un vehículo
                  </h1>
                  <p class="is-size-5">
                    Si deseas ver la información de un vehículo haz click sobre
                    su tarjeta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-vehicle
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'Vehicles',
  data () {
    return {
      selectVehicle: false,
      isActive: false,
      vehiculos: [],
      hasEdit: false,
      vehicle: {},
      isLoading: false
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.getData()
  },
  methods: {
    viewVehicle (vehicle) {
      this.vehicle = vehicle
      this.selectVehicle = true
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/vehicles/createOrUpdateVehicle',
          this.vehicle
        )
        this.hasEdit = false
        this.selectVehicle = false
        this.vehicle = {}
        this.getData()
        this.$buefy.toast.open({
          message: 'Cambios guardados!',
          type: 'is-success'
        })
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
      console.log()
    },
    cancelEdit () {
      this.hasEdit = false
      this.selectVehicle = false
      this.vehicle = {}
      this.getData()
    },
    deleteVehicle () {
      this.$swal({
        title: '¿Deseas borrar ese vehículo?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch(
              'modules/vehicles/deleteVehicle',
              this.vehicle
            )
            this.getData()
            this.selectVehicle = false
            this.vehicle = {}
            this.$buefy.toast.open({
              message: 'Eliminado!',
              type: 'is-success'
            })
          } catch (error) {
            console.log(error)
          }
        }
      })
    },
    editVehicle () {
      this.hasEdit = true
    },
    updateView () {
      this.isActive = false
      this.getData()
    },
    async getData () {
      try {
        this.isLoading = true
        this.vehiculos = []
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehiculos = res
        this.isLoading = false
      } catch (error) {
        console.log(error)
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
#slice-card {
  min-width: 200px;
}
#info-vehicle {
  min-width: 400px;
}
#info-vehicle .level {
  width: 100%;
}
</style>
