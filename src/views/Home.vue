<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlobPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Posts Más Recientes</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>No te pierdas ningun Post. Registrate tu cuenta gratis ahora!!</h2>
        <router-link class="router-button" to="#">
          Registrarse a FireBlogs <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
import BlogCard from '../components/BlogCard'
import Arrow from '../assets/Icons/arrow-right-light.svg'
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data(){
    return {
      welcomeScreen: {
        title: "Bienvenidos!",
        blogPost: "Bienvenidos al blog de PixelWeb, un blog donde se tocan los temas mas actuales y sobresalientes del ámbito del diseño/desarrollo web. Registrate ahora para no perderte de los mejores temas de programación y desarrollo tecnológico",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlobPost: [
        {
          title: "Título del post 1",
          blogHTML: "HTML del post",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "Título del post 2",
          blogHTML: "HTML del post 2",
          blogCoverPhoto: "designed-for-everyone"
        }
      ]
    }
  },
  computed: {
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards
    },
    user(){
      return this.$store.state.user
    }
  }
  
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap {

    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }

  .updates {
    .container {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media(min-width: 800px){
        padding: 125px 25px;
        flex-direction: row;
      }

      .router-button {
        display: flex;
        font-size: 14px;
        @media(min-width: 800px){
          margin-left: auto;
        }
      }

      h2 {
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        //text-transform: uppercase;
        @media(min-width: 800px){
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>