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
          Nueva persona jurídica
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Descripción breve">
              <b-input
                v-model="form.description"
                name="Descripción breve"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Tipo de entidad">
              <b-select v-model="form.idtype_legal_entity" placeholder="Selecciona una opción">
                <option
                  v-for="option in types"
                  :key="option.idtype_legal_entity"
                  :value="option.idtype_legal_entity"
                >
                  {{ option.description }}
                </option>
              </b-select>
            </b-field>
          </form>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">
            <b-button @click="$emit('close')">
              Cancelar
            </b-button>
          </div>
          <div class="card-footer-item">
            <b-button type="is-success" @click="createZone">
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
  name: 'NewLegalEntity',
  props: {
    activeModal: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      isLoading: false,
      form: {},
      types: []
    }
  },
  mounted () {
    this.getTypes()
  },
  methods: {
    async createZone () {
      try {
        this.isLoading = true
        await this.$store.dispatch('modules/legalEntity/createOrUpdateLegalEntity', this.form)
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Guardado!',
          type: 'is-success'
        })
        this.$emit('create')
      } catch (error) {
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        // // console.log(error)
      }
    },
    async getTypes () {
      try {
        this.types = await this.$store.dispatch('modules/legalEntity/getTypeLegalEntitys')
      } catch (error) {
        // console.log(error)
      }
    }
  }
}
</script>
