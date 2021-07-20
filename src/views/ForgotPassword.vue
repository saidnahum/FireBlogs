<template>
  <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal"/>
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form class="reset">
        <h2>Restablecer Contraseña</h2>
        <p>¿Olvidaste tu contraseña? Ingresa tu email para restablecerla</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <Email class="icon"/>
          </div>
        </div>
        <button>Restablecer</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Email from '../assets/Icons/envelope-regular.svg'
import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'
export default {
  name: "ForgotPassword",
  data(){
    return {
      email: null,
      modalActive: null,
      modalMessage: "",
      loading: null
    }
  },
  components: {
    Email, Modal, Loading
  },
  methods: {
    closeModal(){
      this.modalActive = !this.modalActive;
      this.email = "";
    }
  }
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
        font-size: 35px;
      }

      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>

