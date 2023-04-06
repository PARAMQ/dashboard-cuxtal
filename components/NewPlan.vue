<template>
  <div>
    <b-modal v-model="isActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              Nuevo registro
            </p>
            <button type="button" class="delete" @click="isActive = false" />
          </header>
          <section class="modal-card-body">
            <b-field label="Personal">
              <b-input
                type="text"
                :value="email"
                placeholder="Escribe el nombre del personal"
                required
              />
            </b-field>

            <b-field label="Vehiculo">
              <b-input
                type="text"
                :value="email"
                placeholder="Escribe el nombre del personal"
                required
              />
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <b-button label="Close" @click="isActive = false" />
            <b-button label="Login" type="is-primary" />
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Newplan',
  props: {
    isActive: {
      default: false,
      type: Boolean
    }
  }
}
</script>
