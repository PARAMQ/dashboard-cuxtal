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
                  Nuevo usuario
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="user in usuarios"
                    :key="user.idusers"
                    class="container"
                  >
                    <div class="card" @click="viewUser(user)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon
                                  icon="account-circle"
                                  custom-size="default"
                                />
                                {{ user.name }} {{ user.lastname }}
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
                v-if="selectUser && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <!--
                      <div class="level-item">
                        <p class="card-header-title">
                          Número de identificación: {{ vehicle.number }}
                        </p>
                      </div>
                      -->
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="editUser"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteUser"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <p><strong>Nombre completo:</strong> {{ user.name }} {{ user.lastname }}</p>
                  <p><strong>Correo electrónico:</strong> {{ user.email }}</p>
                  <p><strong>Día de registro:</strong> {{ user.date_register | shortDate }}</p>
                </div>
              </div>
              <div
                v-else-if="selectUser && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <!--
                        <p class="card-header-title">
                          Número de identificación: {{ vehicle.number }}
                        </p>
                        -->
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
                    <b-field label="Nombre de usuario">
                      <b-input
                        v-model="user.username"
                        name="Nombre de usuario"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field label="Nombre(s)">
                      <b-input
                        v-model="user.name"
                        name="placa"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field label="Apellido(s)">
                      <b-input
                        v-model="user.lastname"
                        name="modelo"
                        type="text"
                        required
                      />
                    </b-field>
                    <b-field label="Correo electrónico">
                      <b-input
                        v-model="user.email"
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
                    Selecciona un usuario
                  </h1>
                  <p class="is-size-5">
                    Si deseas ver la información de un usuario haz click sobre
                    su tarjeta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-user
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      selectUser: false,
      isActive: false,
      usuarios: [],
      hasEdit: false,
      user: {},
      isLoading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    viewUser (user) {
      this.user = user
      this.selectUser = true
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/vehicles/createOrUpdateVehicle',
          this.user
        )
        this.hasEdit = false
        this.selectUser = false
        this.user = {}
        this.getData()
        this.$buefy.toast.open({
          message: '¡Cambios guardados!',
          type: 'is-success'
        })
        this.isLoading = false
      } catch (error) {
        // // console.log(error)
      }
      // // console.log()
    },
    cancelEdit () {
      this.hasEdit = false
      this.selectUser = false
      this.user = {}
      this.getData()
    },
    deleteUser () {
      this.$swal({
        title: '¿Deseas borrar este usuario?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const temporalObject = {
            idusers: this.user.idusers
          }
          try {
            await this.$store.dispatch(
              'modules/users/deleteUser',
              temporalObject
            )
            this.getData()
            this.selectUser = false
            this.user = {}
            this.$buefy.toast.open({
              message: 'Eliminado!',
              type: 'is-success'
            })
          } catch (error) {
            // // console.log(error)
          }
        }
      })
    },
    editUser () {
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
        const res = await this.$store.dispatch('modules/users/getUsers')
        // // console.log(res)
        this.usuarios = res
        this.isLoading = false
      } catch (error) {
        // // console.log(error)
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
