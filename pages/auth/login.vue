<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <section class="hero is-fullheight">
      <div class="hero-body" >
        <div class="login">
          <div class="card box">
            <div class="has-text-centered">
              <figure class="p-5 avatar">
                <img
                  class="logo"
                  tag="img"
                  src="../../assets/cuxtal/cuxtal_merida.png"
                  width="200px"
                  alt="Logo"
                />
              </figure>
            </div>
            <form @submit="false">
              <BInputWithValidation
                v-model="form.username"
                label="Correo electrónico"
                placeholder="Correo electrónico"
                message="Ingresa tu correo electrónico"
                name="correo electrónico"
                icon="account"
                rules="required"
                expanded
                autofocus
                :normal="true"
              />
              <BInputWithValidation
                v-model="form.password"
                label="Contraseña"
                placeholder="Contraseña"
                message="Ingresa tu contraseña"
                expanded
                type="password"
                name="contraseña"
                icon="lock"
                rules="required"
                password-reveal
                :normal="true"
              />
              <hr />
              <b-field>
                <b-button
                  expanded
                  native-type="submit"
                  type="is-primary"
                  :class="{ 'is-loading': isLoading }"
                  @click.prevent="handleSubmit(submit)"
                >
                  Ingresar
                </b-button>
              </b-field>
              <!-- <small class="has-text-dark">
                ¿No tienes cuenta?&nbsp;·&nbsp;
                <strong>
                  <nuxt-link class="link" to="/auth/register">
                    Regístrate
                  </nuxt-link>
                </strong>
              </small> -->
            </form>
          </div>
        </div>
        <!--
        <vue-particles
          class="particles"
          color="#dedede"
          :particle-opacity="0.7"
          :particles-number="80"
          shape-type="circle"
          :particle-size="3"
          lines-color="#dedede"
          :lines-width="1"
          :line-linked="true"
          :line-opacity="0.4"
          :lines-distance="150"
          :move-speed="0.4"
          :hover-effect="true"
          hover-mode="grab"
          :click-effect="true"
          click-mode="push"
        />
        -->
      </div>
    </section>
  </ValidationObserver>
</template>

<script>
import redirect from '@/mixins/redirect'
export default {
  name: 'Login',
  layout: 'full-page',
  mixins: [redirect],
  data () {
    return {
      isLoading: false,
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    async submit () {
      this.alert = null
      this.isLoading = true
      try {
        await this.$store.dispatch('modules/auth/login', this.form)
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })
      } catch (error) {
        this.$buefy.snackbar.open({
          message: 'Credenciales incorrectas',
          type: 'is-danger'
        })
      } finally {
        this.isLoading = false
      }
    }
  },
  head () {
    return {
      title: 'Iniciar sesión — Cuxtal'
    }
  }
}
</script>

<style scoped>
.button {
  transition: 0.6s;
}

.button:hover {
  background: rgba(162, 0, 123, 0.8);
  transition: 0.6s;
}

.link {
  color: rgb(104, 103, 103);
}

.link:hover {
  color: rgb(240, 184, 94);
}

.login {
  max-width: 700px;
  position: fixed;
}

.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.particles {
  width: 100%;
}

.hero {
  background-color: #0403039a;
  background-image: url('assets/cuxtal/background.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-origin: content-box;
  background-position: center;
}
.box {
  max-width: 400px;
  background-color: white;
}
</style>
