import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts";
import Login from "../views/Login";
import Register from "../views/Register";
import ForgotPassword from "../views/ForgotPassword";
import Profile from '../views/Profile'
import Admin from '../views/Admin'
import CreatePost from '../views/CreatePost'


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
  },
  {
    path: "/perfil",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Perfil"
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin"
    }
  },
  {
    path: "/crear-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: "Crear Post"
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
