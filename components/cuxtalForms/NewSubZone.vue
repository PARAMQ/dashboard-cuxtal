<template>
  <b-modal v-model="activeModal" :destroy-on-hide="false">
    <b-loading v-model="isLoading" :is-full-page="true" :can-cancel="false" />
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Nueva subzonificación PM
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit.prevent="submit">
            <b-field horizontal label="Descripción breve">
              <b-input
                v-model="form.description"
                name="Nombre de indentificación"
                type="text"
                required
              />
            </b-field>
            <b-field horizontal label="Zona legal relacionada">
              <b-autocomplete
                v-model="text"
                :data="options"
                icon="magnify"
                clearable
                field="description"
                @typing="filteredDataArray"
                @select="selectZone"
              >
                <template #empty>
                  No hay resultados
                </template>
              </b-autocomplete>
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
  name: 'NewSubZone',
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
      legalZones: [],
      text: '',
      options: []
    }
  },
  mounted () {
    this.getZones()
  },
  methods: {
    async createZone () {
      // // console.log(this.form)
      try {
        this.isLoading = true
        await this.$store.dispatch(
          'modules/zones/createOrUpdateSubZone',
          this.form
        )
        this.form = {}
        this.text = ''
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Zona guardada!',
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
    async getZones () {
      try {
        const res = await this.$store.dispatch('modules/zones/getZones')
        this.legalZones = res
        // // console.log(this.legalZones)
      } catch (error) {
        // // console.log(error)
      }
    },
    filteredDataArray () {
      // // // console.log(this.text)
      this.options = this.legalZones.filter((option) => {
        return option.description.toString().toLowerCase().includes(this.text.toLowerCase())
      })
    },
    selectZone (option) {
      if (option && option !== '') {
        this.form.idzoning = option.idzoning
      }
    }
  }
}
</script>
