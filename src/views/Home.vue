<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlobPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost'
export default {
  name: "Home",
  components: {BlogPost},
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
  }
};
</script>
