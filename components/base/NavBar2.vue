<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/cuxtal/RC_V.png" width="auto" height="auto">
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-dropdown label="Catálogo">
        <b-navbar-item tag="router-link" :to="{ path: '/vehicles' }">
          Vehículos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/participants' }">
          Participantes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/departaments' }">
          Departamentos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/zones' }">
          Zonas
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/charges' }">
          Cargos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/adscriptionsAreas' }">
          Areas
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Coordenadas
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Reportes">
        <b-navbar-item href="#">
          General
        </b-navbar-item>
        <b-navbar-item href="#">
          Denuncias
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Recorridos">
        <b-navbar-item tag="router-link" :to="{ path: '/calendar' }">
          Planificación
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/binnacle' }">
          Bitácoras
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-danger" @click="logout"> Cerrar sesión </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar2',
  methods: {
    logout () {
      this.$buefy.toast.open({
        message: 'Cerrando sesión...',
        type: 'is-danger',
        queue: false
      })
      this.$store.dispatch('modules/auth/logout').then(() => {
        window.location.reload()
      })
    }
  }
}
</script>
