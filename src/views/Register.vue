<template>
  <div class="form-wrap">
    <form action="register">
      <p class="login-register">
        ¿Ya tienes cuenta?
        <router-link class="router-link" :to="{name: 'Login'}">Accede</router-link>
      </p>
      <h2>Crea tu cuenta de FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Nombre" v-model="firstName">
          <User class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Apellidos" v-model="lastName">
          <User class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Nombre de usuario" v-model="userName">
          <User class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <Email class="icon"/>
        </div>
        <div class="input">
          <input type="password" placeholder="Contraseña" v-model="password">
          <Password class="icon"/>
        </div>
        <div class="error" v-show="error">{{this.errorMsg}}</div>
      </div>
      <button @click.prevent="register">Registrarse</button>
      <div class="angle"></div>
    </form>
    <div class="background">

    </div>
  </div>
</template>

<script>
import Email from '../assets/Icons/envelope-regular.svg'
import Password from '../assets/Icons/lock-alt-solid.svg'
import User from '../assets/Icons/user-alt-light.svg'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit"

export default {
  name: "Register",
  components: {Email, Password, User},
  data(){
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: null,
      errorMsg: ""
    }
  },
  methods: {
    async register(){
      if(
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.userName !== "" 
      ) {
        this.error = false
        this.errorMsg = ""
        const firebaseAuth = await firebase.auth()
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid)
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email
        })
        this.$router.push({name: 'Home'})
        return
      }
      this.error = true
      this.errorMsg = "Por favor llenar todos los campos"
      return
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>