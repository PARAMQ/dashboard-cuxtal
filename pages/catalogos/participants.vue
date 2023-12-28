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
                  Nuevo participante
                </b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content scroll">
                  <div
                    v-for="participante in participantes"
                    :key="participante.idparticipants"
                    class="container"
                  >
                    <div class="card" @click="viewParticipant(participante)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon icon="account" custom-size="default" />
                                {{ participante.name }}
                                {{ participante.lastname }}
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
                v-if="selectParticipant && !hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          Nombre completo: {{ participant.name }}
                          {{ participant.lastname }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-info is-light"
                          icon-right="pencil-outline"
                          @click="editParticipant(participant)"
                        />
                      </div>
                      <div class="level-item">
                        <b-button
                          size="is-small"
                          type="is-danger is-light"
                          icon-right="delete"
                          @click="deleteParticipant(participant)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <p class="is-size-2">
                    Dirección:
                  </p>
                  <p class="is-size-3">
                    - Calle: {{ participant.street }}
                  </p>
                  <p class="is-size-3">
                    - Número de predio: {{ participant.number }}
                  </p>
                  <p class="is-size-3">
                    - Colonia: {{ participant.settle }}
                  </p>
                  <p class="is-size-3">
                    - Municipio: {{ participant.municipality }}
                  </p>
                  <p class="is-size-3">
                    - Código postal: {{ participant.zip_code }}
                  </p>
                </div>
              </div>
              <div
                v-else-if="selectParticipant && hasEdit"
                id="info-vehicle"
                class="card"
              >
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          Nombre completo: {{ participant.name }}
                          {{ participant.lastname }}
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
                  <b-field horizontal label="Nombre">
                    <b-input
                      v-model="participant.name"
                      name="Nombre"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Apellido">
                    <b-input
                      v-model="participant.lastname"
                      name="Nombre"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Calle">
                    <b-input
                      v-model="participant.street"
                      name="Calle"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Número">
                    <b-input
                      v-model="participant.number"
                      name="Número"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Colonia">
                    <b-input
                      v-model="participant.settle"
                      name="Colonia"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Municipio">
                    <b-input
                      v-model="participant.municipality"
                      name="Municipio"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Estado">
                    <b-input
                      v-model="participant.state"
                      name="Estado"
                      type="text"
                      required
                    />
                  </b-field>
                  <b-field horizontal label="Código postal">
                    <b-input
                      v-model="participant.zip_code"
                      name="Código postal"
                      type="text"
                      required
                    />
                  </b-field>
                  <section>
                    <b-field horizontal label="Cargo">
                      <b-select v-model="participant.idcharge" placeholder="Seleccione uno">
                        <option
                          v-for="option in roles"
                          :key="option.idcharge"
                          :value="option.idcharge"
                        >
                          {{ option.description }}
                        </option>
                      </b-select>
                    </b-field>
                    <b-field horizontal label="Departamento">
                      <b-select v-model="participant.iddepto" placeholder="Seleccione uno">
                        <option
                          v-for="option in departaments"
                          :key="option.iddepto"
                          :value="option.iddepto"
                        >
                          {{ option.description }}
                        </option>
                      </b-select>
                    </b-field>
                    <b-field horizontal label="Área">
                      <b-select v-model="participant.idadscription_area" placeholder="Seleccione uno">
                        <option
                          v-for="option in areasAdsc"
                          :key="option.idadscription_area"
                          :value="option.idadscription_area"
                        >
                          {{ option.description }}
                        </option>
                      </b-select>
                    </b-field>
                  </section>
                </div>
              </div>
              <div v-else class="card">
                <div class="card-content">
                  <h1 class="is-size-3">
                    Selecciona un participante
                  </h1>
                  <p class="is-size-5">
                    Si deseas ver la información de un participante haz click
                    sobre su tarjeta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-participant
      :active-modal="isActive"
      @close="isActive = false"
      @create="updateView"
    />
  </section>
</template>

<script>
export default {
  name: 'Participants',
  data () {
    return {
      selectParticipant: false,
      isActive: false,
      participantes: [],
      participant: {},
      hasEdit: false,
      departaments: [],
      charge: [],
      areasAdsc: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.getData()
    this.getDepartaments()
    this.getAreasAdsc()
    this.getRoles()
  },
  methods: {
    viewParticipant (participant) {
      this.participant = participant
      this.selectParticipant = true
    },
    deleteParticipant (participant) {
      this.$swal({
        title: '¿Deseas borrar este participante?',
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.$store.dispatch(
              'modules/participants/deleteParticipant',
              participant
            )
            this.getData()
            this.participant = {}
            this.selectParticipant = false
            this.$buefy.toast.open({
              message: '¡Eliminado!',
              type: 'is-success'
            })
          } catch (error) {
            // // console.log(error)
          }
        }
      })
    },
    editParticipant () {
      this.hasEdit = true
    },
    async saveEdit () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/participants/createOrUpdateParticipant',
          this.participant
        )
        this.hasEdit = false
        this.selectParticipant = false
        this.participant = {}
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
      this.selectParticipant = false
      this.participant = {}
      this.getData()
    },
    updateView () {
      this.isActive = false
      this.getData()
    },
    async getData () {
      try {
        this.participantes = []
        const res = await this.$store.dispatch(
          'modules/participants/getParticipants',
          this.params
        )
        // // console.log(res)
        this.participantes = res
      } catch (error) {
        // // console.log(error)
      }
    },
    async getDepartaments () {
      try {
        this.departaments = await this.$store.dispatch(
          'modules/deptos/getDeptos'
        )
      } catch (error) {
        // // console.log(error)
      }
    },
    async getRoles () {
      try {
        this.roles = await this.$store.dispatch('modules/charges/getCharges')
      } catch (error) {
        // // console.log(error)
      }
    },
    async getAreasAdsc () {
      try {
        this.areasAdsc = await this.$store.dispatch(
          'modules/adscriptions/getAdscriptions'
        )
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
