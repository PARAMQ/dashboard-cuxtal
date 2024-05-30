<script>
import { MonthPicker } from 'vue-month-picker'

export default {
  name: 'MonthPickerFilter',
  components: {
    MonthPicker
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      date: {
        from: null,
        to: null,
        month: null,
        year: null
      },
      meses: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ]
    }
  },
  methods: {
    showDate (date) {
      // console.log(date)
      this.date = date
      this.date.month = this.meses.findIndex(x => x === this.date.month)
    }
  }
}
</script>

<template>
  <b-modal v-model="isOpen" :can-cancel="false">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Filtrar por año y mes
        </p>
        <button
          type="button"
          class="delete"
          @click="$emit('close')"
        />
      </header>
      <div class="modal-card-body is-flex is-flex-direction-row is-justify-content-center">
        <month-picker @change="showDate" :lang="'es'" />
      </div>
      <footer class="modal-card-foot">
        <b-button
          label="Filtrar"
          @click="$emit('getData', date.month, date.year)"
        />
      </footer>
    </div>
  </b-modal>
</template>
