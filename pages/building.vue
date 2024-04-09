<template>
  <section class="hero mt-4">
    <div class="card">
      <div class="card-container">
        <h1 class="title">
          En construcción.
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Building',
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
