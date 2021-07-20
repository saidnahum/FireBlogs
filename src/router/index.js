import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts";
import Login from "../views/Login";
import Register from "../views/Register";
import ForgotPassword from "../views/ForgotPassword";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Inicio"
    }
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: {
      title: "Posts"
    }
  },
  {
    path: "/acceso",
    name: "Login",
    component: Login,
    meta: {
      title: "Acceso"
    }
  },
  {
    path: "/registro",
    name: "Register",
    component: Register,
    meta: {
      title: "Registro"
    }
  },
  {
    path: "/pass-olvidada",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Contraseña olvidada"
    }
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title} | FireBlogs`
  next()
})

export default router;
