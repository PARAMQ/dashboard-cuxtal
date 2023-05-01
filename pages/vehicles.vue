<template>
  <section class="hero is-cuxtal">
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
                    :key="vehiculo"
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
              <div v-if="selectVehicle" id="info-vehicle" class="card">
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
                          @click="editVehicle(vehicle)"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteVehicle(vehicle)"
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
      vehiculosFake: [
        {
          id: 1,
          model: 'Sedan',
          number: 1234,
          brand: 'Toyota',
          subbrand: 'Corolla',
          plates: 5678
        },
        {
          id: 2,
          model: 'SUV',
          number: 5678,
          brand: 'Honda',
          subbrand: 'CR-V',
          plates: 9012
        },
        {
          id: 3,
          model: 'Hatchback',
          number: 9012,
          brand: 'Ford',
          subbrand: 'Focus',
          plates: 3456
        },
        {
          id: 4,
          model: 'Coupe',
          number: 3456,
          brand: 'Chevrolet',
          subbrand: 'Camaro',
          plates: 7890
        },
        {
          id: 5,
          model: 'Pickup',
          number: 7890,
          brand: 'Dodge',
          subbrand: 'Ram',
          plates: 2345
        }
      ],
      vehicle: {},
      params: {
        _t: Date.now()
      }
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
    deleteVehicle (vehicle) {
      this.$swal({
        title: '¿Deseas borrar ese vehículo?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch('modules/vehicles/deleteVehicle', vehicle)
            this.getData()
            this.$swal('Eliminado!')
          } catch (error) {
            console.log(error)
          }
        }
      })
    },
    editVehicle (vehicle) {
      console.log(vehicle)
    },
    updateView () {
      this.isActive = false
      this.getData()
    },
    async getData () {
      try {
        this.vehiculos = []
        const res = await this.$store.dispatch('modules/vehicles/getVehicles')
        this.vehiculos = res
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
