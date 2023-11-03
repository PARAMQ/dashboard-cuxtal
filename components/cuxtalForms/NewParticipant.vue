<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <b-loading
      v-model="isLoading"
      :is-full-page="true"
      :can-cancel="false"
    />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nuevo participante
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Nombre">
              <b-input
                v-model="form.name"
                name="Nombre"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Apellido">
              <b-input
                v-model="form.lastname"
                name="Nombre"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Calle">
              <b-input
                v-model="form.street"
                name="Calle"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Número">
              <b-input
                v-model="form.number"
                name="Número"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Colonia">
              <b-input
                v-model="form.settle"
                name="Colonia"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Municipio">
              <b-input
                v-model="form.municipality"
                name="Municipio"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Estado">
              <b-input
                v-model="form.state"
                name="Estado"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Código postal">
              <b-input
                v-model="form.zip_code"
                name="Código postal"
                type="text"
                required
              />
            </b-field>
            <section>
              <b-field horizontal label="Cargo">
                <b-select v-model="form.idcharge" placeholder="Seleccione uno">
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
                <b-select v-model="form.iddepto" placeholder="Seleccione uno">
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
                <b-select v-model="form.idadscription_area" placeholder="Seleccione uno">
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
          </form>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <b-button @click="$emit('close')">
              Cancelar
            </b-button>
          </div>
          <div class="card-footer-item">
            <b-button type="is-success" @click="createParticipant">
              Guardar
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'NewParticipant',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isLoading: false,
      form: {
        date_register: new Date(),
        estatus: 'PR'
      },
      departaments: [],
      roles: [],
      areasAdsc: []
    }
  },
  mounted () {
    this.getDepartaments()
    this.getAreasAdsc()
    this.getRoles()
  },
  methods: {
    async createParticipant () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/participants/createOrUpdateParticipant',
          this.form
        )
        this.$buefy.toast.open({
          message: '¡Participante guardado!',
          type: 'is-success'
        })
        this.$emit('create')
        this.isLoading = false
      } catch (error) {
        // console.log(error)
      }
    },
    async getDepartaments () {
      try {
        this.departaments = await this.$store.dispatch(
          'modules/deptos/getDeptos'
        )
      } catch (error) {
        // console.log(error)
      }
    },
    async getRoles () {
      try {
        this.roles = await this.$store.dispatch('modules/charges/getCharges')
      } catch (error) {
        // console.log(error)
      }
    },
    async getAreasAdsc () {
      try {
        this.areasAdsc = await this.$store.dispatch(
          'modules/adscriptions/getAdscriptions'
        )
      } catch (error) {
        // console.log(error)
      }
    }
  }
}
</script>
