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
                    :key="participante"
                    class="container"
                  >
                    <div class="card" @click="viewParticipant(participante)">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column has-text-centered">
                              <p>
                                <b-icon
                                  icon="account"
                                  custom-size="default"
                                />
                                {{ participante.name }} {{ participante.lastname }}
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
              <div v-if="selectParticipant" id="info-vehicle" class="card">
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          Nombre completo: {{ participant.name }} {{ participant.lastname }}
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
                  <p class="is-size-3">
                    {{ participant }}
                  </p>
                </div>
              </div>
              <div v-else class="card">
                <div class="card-content">
                  <h1 class="is-size-3">
                    Selecciona un participante
                  </h1>
                  <p class="is-size-5">
                    Si deseas ver la información de un participante haz click sobre
                    su tarjeta
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
            await this.$store.dispatch('modules/participants/deleteParticipant', participant)
            this.getData()
            this.participant = {}
            this.selectParticipant = false
            this.$swal('Eliminado!')
          } catch (error) {
            console.log(error)
          }
        }
      })
    },
    editParticipant (participant) {
      console.log(participant)
    },
    updateView () {
      this.isActive = false
      this.getData()
    },
    async getData () {
      try {
        this.participantes = []
        const res = await this.$store.dispatch('modules/participants/getParticipants', this.params)
        this.participantes = res
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
