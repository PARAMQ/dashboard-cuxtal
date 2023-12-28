<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nueva dependencia
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Descripción breve">
              <b-input
                v-model="form.description"
                name="Descripción de la dependencia"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Incidencias que atieneden">
              <b-taginput
                v-model="tags"
                :data="filteredTypes"
                icon="label"
                field="type"
                :open-on-focus="true"
                placeholder="Escoje al menos una"
                autocomplete
                aria-close-label="Delete this tag"
                @typing="getFilteredTypes"
              />
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
            <b-button type="is-success" @click="createVeg">
              Guardar
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
const types = [
  { id: 42, type: 'ruido' },
  { id: 17, type: 'suelo' },
  { id: 89, type: 'agua' },
  { id: 53, type: 'electricidad' },
  { id: 71, type: 'aire' }
]

export default {
  name: 'NewZone',
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
      tags: [],
      text: '',
      filteredTypes: types
    }
  },
  methods: {
    async createVeg () {
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/coordinations/createOrUpdateCoordination',
          this.form
        )
        this.form = {}
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Dependencia guardada!',
          type: 'is-success'
        })
        this.$emit('create')
      } catch (error) {
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Ocurrió un error, intente nuevamente',
          type: 'is-danger'
        })
        // // console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    getFilteredTypes (text) {
      this.filteredTypes = this.filteredTypes.filter((option) => {
        if (
          option.description &&
          option.description
            .toString()
            .toLowerCase()
            .includes(text.toLowerCase())
        ) {
          return option
        }
      })
    }
  }
}
</script>
