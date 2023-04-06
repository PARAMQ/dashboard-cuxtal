<template>
    <section class='hero mt-4'>
        <div class='container'>
            <div class='card p-2'>
                <div class='card-content'>
                    <div class='columns'>
                        <div class='column'>
                            <div class='card'>
                                <div class='card-header'>
                                    <div class="card-header-title">
                                        <p class='subtitle'>
                                            Recorridos programados - {{ dateNow | shortDate }}
                                        </p>
                                    </div>
                                </div>
                                <div class='card-content scroll'>
                                    <div v-for="plan in fakePlan" :key="plan" class="container">
                                        <div class="card">
                                                <div class="card-content">
                                                    {{ plan }}
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='column is-flex is-flex-direction-row is-justify-content-center'>
                            <div class='card'>
                                <div class='card-header'>
                                    <div class='card-header-title'>
                                        <p class='subtitle'>Calendario</p>
                                    </div>
                                </div>
                                <div class='card-content'>
                                    <b-datepicker
                                    v-model="dateNow"
                                    inline></b-datepicker>
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
      fakePlan: [
        { idusers: 16, start_date: '12/26/2022', end_date: '6/16/2022', binnacles: [{}, {}] },
        { idusers: 5, start_date: '4/4/2023', end_date: '8/15/2022', binnacles: [{}, {}, {}] },
        { idusers: 4, start_date: '11/9/2022', end_date: '5/25/2022', binnacles: [{}, {}] },
        { idusers: 4, start_date: '7/7/2022', end_date: '12/1/2022', binnacles: [{}, {}, {}] }
      ],
      dateNow: new Date()
    }
  }
}
</script>

<style>
    .scroll {
        height: 400px;
        overflow-y: scroll;
    }
</style>
