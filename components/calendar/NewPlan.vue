<template>
  <div>
    <b-modal v-model="isActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              Login
            </p>
            <button type="button" class="delete" @click="$emit('close')" />
          </header>
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input
                type="email"
                :value="email"
                placeholder="Your email"
                required
              />
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                :value="password"
                password-reveal
                placeholder="Your password"
                required
              />
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <b-button label="Close" @click="$emit('close')" />
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
