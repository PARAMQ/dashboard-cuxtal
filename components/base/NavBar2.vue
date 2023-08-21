<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/cuxtal/RC_V.png" width="auto" height="auto">
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-dropdown label="Catálogos">
        <b-navbar-item tag="router-link" :to="{ path: '/vehicles' }">
          Vehículos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/coordinations' }">
          Dependencias
        </b-navbar-item>
        <!--
        <b-navbar-item tag="router-link" :to="{ path: '/coordinations' }">
          Coordinaciones
        </b-navbar-item>
        -->
        <b-navbar-item tag="router-link" :to="{ path: '/operativeZones' }">
          Zonas operativas
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/legalZones' }">
          Zonas legales
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/subZones' }">
          Sub-zonas
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/applicantType' }">
          Tipos de solicitantes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/applicationMethod' }">
          Métodos de aplicación
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/requestMotive' }">
          Motivos de solicitud
        </b-navbar-item>
        <!--
        <b-navbar-item tag="router-link" :to="{ path: '/adscriptionsAreas' }">
          Áreas
        </b-navbar-item>
        -->
        <b-navbar-item tag="router-link" :to="{ path: '/vegetationAffected' }">
          Vegetación
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/subZones' }">
          Sub-zonas
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/tenure' }">
          Tipos de tenencias
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/ilicits' }">
          Tipos de ilícitos denunciables
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/gobLevels' }">
          Niveles de gobierno
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Administrativo">
        <b-navbar-item tag="router-link" :to="{ path: '/participants' }">
          Participantes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/charges' }">
          Cargos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/departaments' }">
          Coordinaciones
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/users' }">
          Usuarios
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Seguimiento">
        <b-navbar-item tag="router-link" :to="{ path: '/tracking/technicalOp' }">
          Opiniones técnicas
        </b-navbar-item>
        <!--
        <b-navbar-item tag="router-link" :to="{ path: '/tracking/programmed' }">
          Programados
        </b-navbar-item>
        -->
        <b-navbar-item tag="router-link" :to="{ path: '/tracking/complaint' }">
          Denuncias
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Recorridos">
        <b-navbar-item tag="router-link" :to="{ path: '/calendar' }">
          Recorridos programados
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/binnacle' }">
          Bitácoras
        </b-navbar-item>
        <!--
        <b-navbar-item tag="router-link" :to="{ path: '/coordinates' }">
          Coordenadas registradas
        </b-navbar-item>
        -->
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
