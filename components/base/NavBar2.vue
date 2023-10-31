<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/cuxtal/RC_V.png" width="auto" height="auto">
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-dropdown label="Catálogos">
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/vehicles' }">
          Vehículos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/coordinations' }">
          Dependencias
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/vegetationAffected' }">
          Vegetación
        </b-navbar-item>
        <hr class="navbar-divider">
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/operativeZones' }">
          Zonas de vigilancia
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/legalZones' }">
          Zonificación PM
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/subZones' }">
          Subzonificación PM
        </b-navbar-item>
        <hr class="navbar-divider">
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/applicantType' }">
          Tipo de promovente
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/applicationMethod' }">
          Medio de solicitud
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/requestMotive' }">
          Motivo de solicitud
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/MotiveDescription' }">
          Descripción de motivo
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/tenure' }">
          Tenencias de predio
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/ilicits' }">
          Tipos de ilícitos denunciables
        </b-navbar-item>
        <hr class="navbar-divider">
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/gobLevels' }">
          Niveles de gobierno
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/legalEntity' }">
          Persona moral
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/typeLegalEntity' }">
          Tipo de persona moral
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/typeResponseOp' }">
          Respuestas (para opiniones técnicas)
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/typeResponse' }">
          Respuestas (para denuncias)
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown label="Administrativo">
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/participants' }">
          Participantes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/charges' }">
          Cargos
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/departaments' }">
          Coordinaciones
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/catalogos/users' }">
          Usuarios
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Seguimiento">
        <b-navbar-item tag="router-link" :to="{ path: '/tracking/technicalOp' }">
          Opiniones técnicas
        </b-navbar-item>
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
