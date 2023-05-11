<template>
  <section class="hero is-cuxtal">
    <div class="container">
      <div class="card is-principal m-2">
        <div class="card-header">
          <div class="card-header-title">
            <p class="subtitle">
              Recorrido para las fechas {{ plan.start_date }} -
              {{ plan.end_date }}
            </p>
          </div>
        </div>
        <div class="card-content">
          <div class="level">
            <div class="level-left" />
            <div class="level-right">
              <div class="level-item">
                <b-button @click="isActive = true">
                  Nueva bitácora
                </b-button>
              </div>
              <div class="level-item">
                <b-button type="is-danger">
                  Eliminar recorrido
                </b-button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p class="subtitle">
                      Bitácoras
                    </p>
                  </div>
                </div>
                <div class="card-content scroll">
                  <div
                    v-for="binnacle in plan.binnacles"
                    :key="binnacle.idbinnacle"
                    class="container"
                  >
                    <div class="card" @click="viewBinnacle(binnacle)">
                      <div class="card-content">
                        <p>Bitácora {{ binnacle.idbinnacle }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6 has-text-centered">
              <div v-if="hasSelect" class="card is-card-binnacle">
                <div class="card-header">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <p class="card-header-title">
                          Bitácora {{ binaccleSelect.idbinnacle }}
                        </p>
                      </div>
                    </div>
                    <div class="level-right has-text-left">
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
                <div v-if="!hasEdit" class="card-content">
                  <p class="subtitle">
                    Fecha: {{ binaccleSelect.date }}
                  </p>
                  <p class="subtitle">
                    Hora de inicio: {{ binaccleSelect.hour_init }}
                  </p>
                  <p class="subtitle">
                    Hora de finalización {{ binaccleSelect.hour_end }}
                  </p>
                  <p>
                    Vehículo:
                    {{
                      binaccleSelect.idvehicle
                        ? binaccleSelect.idvehicle
                        : 'No asignado'
                    }}
                  </p>
                  <br>
                  <div v-if="binaccleSelect.participants.length > 0">
                    <p class="subtitle">
                      Participantes:
                    </p>
                    <div
                      v-for="participant in binaccleSelect.participants"
                      :key="participant.id"
                    >
                      <p>{{ participant.name }} {{ participant.lastname }}</p>
                    </div>
                  </div>
                  <div v-else>
                    No hay participantes asociados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <new-binnacle
      :active-modal="isActive"
      :id-plan="idPlanification"
      @update="refresh"
      @close="isActive = false"
    />
  </section>
</template>

<script>
export default {
  name: 'EditPlanification',
  data () {
    return {
      idPlanification: this.$route.query.id,
      plan: {},
      hasEdit: false,
      hasSelect: false,
      binnacleSelect: {},
      vehicles: [],
      participants: [],
      isActive: false
    }
  },
  created () {},
  mounted () {
    this.getPlan()
  },
  methods: {
    async getPlan () {
      try {
        const res = await this.$store.dispatch(
          'modules/plans/readPlan',
          this.idPlanification
        )
        this.plan = res
      } catch (error) {
        console.log(error)
      }
    },
    refresh () {
      this.isActive = false
      this.getPlan()
    },
    viewBinnacle (binnacle) {
      this.hasSelect = false
      this.binnacleSelect = {}
      this.hasSelect = true
      this.binaccleSelect = binnacle
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
  width: 700px;
}
.card {
  background-color: white !important;
}
.card-header {
  width: 100%;
}
.is-card-binnacle {
  width: 300px;
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
</style>
