<template>
  <section class="hero is-cuxtal">
    <b-modal v-model="activeModal">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">
            Programado para el {{ dateNow | shortDate }}
          </p>
        </div>
        <div class="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, reiciendis sunt consectetur iure perferendis accusantium assumenda neque, quis sint, eum fugit nihil magni ipsum ad. Doloremque autem cupiditate accusamus molestiae.</p>
        </div>
      </div>
    </b-modal>
    <new-plan :is-active="activeFormModal" />
    <div class="container mt-4">
      <div class="card p-2">
        <div class="card-content">
          <nav class="level">
            <div class="level-left" />
            <div class="level-right">
              <p class="level-item">
                <b-button type="is-primary" @click="openModal" outlined>Nuevo registro</b-button>
              </p>
            </div>
          </nav>
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p class="subtitle">
                      Recorridos programados - {{ dateNow | shortDate }}
                    </p>
                  </div>
                </div>
                <div class="card-content scroll">
                  <div v-for="plan in fakePlan" :key="plan" class="container">
                    <div class="card" @click="openModal">
                      <div class="card-content">
                        <div class="container">
                          <div class="columns">
                            <div class="column">
                              <p><b-icon icon="account" custom-size="default" /> Personal: {{ plan.idusers }}</p>
                            </div>
                            <div class="column">
                              <p><b-icon icon="calendar-today" custom-size="default" /> Programado para: {{ plan.start_date }}</p>
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
              class="column is-flex is-flex-direction-row is-justify-content-center"
            >
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p class="subtitle">
                      Calendario
                    </p>
                  </div>
                </div>
                <div class="card-content">
                  <b-datepicker v-model="dateNow" inline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      activeModal: false,
      activeFormModal: false,
      fakePlan: [
        {
          idusers: 16,
          start_date: '12/26/2022',
          end_date: '6/16/2022',
          binnacles: [{}, {}]
        },
        {
          idusers: 5,
          start_date: '4/4/2023',
          end_date: '8/15/2022',
          binnacles: [{}, {}, {}]
        },
        {
          idusers: 4,
          start_date: '11/9/2022',
          end_date: '5/25/2022',
          binnacles: [{}, {}]
        },
        {
          idusers: 4,
          start_date: '7/7/2022',
          end_date: '12/1/2022',
          binnacles: [{}, {}, {}]
        }
      ],
      dateNow: new Date()
    }
  },
  methods: {
    openModal () {
      this.activeFormModal = true
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
</style>
