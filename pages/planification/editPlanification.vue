<template>
  <section class="hero is-cuxtal">
    <div class="container mt-4">
      <div class="card m-2"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditPlanification',
  data () {
    return {
      idPlanification: this.$route.query.id
    }
  },
  created () {
  },
  mounted () {
    console.log(this.$route.query.id)
  },
  methods: {
    getPlan () {
      console.log('hola')
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
