<template>
  <div class="create-post">
    <div class="container">
      <div :class="{invisible: !error}" class="err-message">
        <p><span>Error: {{ this.errorMsg }}</span></p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="Ingresa el Título del Post" v-model="blogTitle">
        <div class="upload-file">
          <label for="blog-photo">Subir Foto de Portada</label>
          <input type="file" ref="blogPhoto" id="blog-photo"  accept=".png, .jpg, .jpeg, .gif"/>
          <button class="preview" :class="{'button-inactive': !this.$store.state.blogPhotoFileURL}">Vista Previa</button>
          <span>Nombre del archivo: {{this.$store.state.blogPhotoName}}</span>
        </div>
      </div>
      <div class="editor">
        <Vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler/>
      </div>
      <div class="blog-actions">
        <button>Publicar Post</button>
        <router-link to="#" class="router-button">Previsualizar Post</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "CreatePost",
  data(){
    return {
      file: null,
      error: null,
      errorMsg: null,
      editorSettings: {
        ImageResize: {}
      }
    }
  },
  methods: {
    fileChange(){
      this.file = this.$refs.blogPhoto.files[0]
      const fileName = this.file.name
      this.$store.commit("fileNameChange", fileName)
      this.$store.commit("createFileURL", URL.createObjectURL(this.file))

    }
  },
  computed: {
    profileId(){
      return this.$store.state.profileId
    },
    blogCoverPhotoName(){
      return this.$store.state.blogCoverPhotoName
    },
    blogTitle: {
      get(){
        return this.$store.state.blogTitle
      },
      set(payload){
        this.$store.commit("updateBlogTitle", payload)
      }
    },
    blogHTML: {
      get(){
        return this.$store.state.blogHTML
      },
      set(payload){
        this.$store.commit("newBlogPost", payload)
      }
    }
  }
}
</script>

<style lang="scss">
.create-post{
  position: relative;
  height: 100%;

  .button {
    margin-top: 0px;
  }

  .router-button {
    text-decoration: none;
    color: #fff;
  }

  label,
  button,
  .router-button {
    transition: 500ms ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;

    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }

  // Estilos del error
  .invisible {
    opacity: 0!important;
  }

  .error-message {
    widows: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;

    p {
      font-size: 14px;
    }

    span {
      font-weight: 600;
    }
  }

  .blog-info {
    display: flex;
    margin-bottom: 32px;

    input:nth-child(1){
      min-width: 300px
    }

    input {
      transition: .5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid #303030;

      &:focus {
        outline: none;
        box-shadow: 0px 1px 0px 0px #303030;
      }
    }

    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;
      align-items: center;

      input {
        display: none;
      }

      .preview {
        margin-top: 0px;
        margin-left: 16px;
        text-transform: initial;
      }

      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }

  .blog-actions {
    button {
      margin-right: 16px;
    }
  }

  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;

    .quilWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ql-container {
      display: flex;
      flex-direction: column;
      // height: 100%;
      overflow : scroll;
      height: 400px;
    }

    .quillWrapper .ql-toolbar.ql-snow .ql-formats {
      vertical-align: baseline;
    }
  }
}
</style>