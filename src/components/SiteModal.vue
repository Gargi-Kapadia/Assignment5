<script setup>
import { ref } from "vue";
import axios from "axios"
const response = ref(null);
const video = ref(null);
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const getMovie = async (Movies) => {
   console.log(response.value)
   response.value = (await getData(`https://api.themoviedb.org/3/movie/${Movies}`, {
     params: {
       api_key: "354ab13223b58e3243b70a0085da1b2e",
       append_to_response: "videos",
      }
      
    })).data
     video.value = response.value.videos.results.filter((video) => video.type === "Trailer").at(0).key;
     console.log(video.value)
}


const getData = async (url, params) => {
   try {
      return await axios.get(url, params);
    } catch (error) {
       console.log(error)
   }
};

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div v-if="getMovie(props.id)" class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1 id="title">Title: {{ response.title }}</h1>
        <p id="release_date">Release date: {{ response.release_date }}</p>
        <iframe v-bind:src=" 'https://www.youtube.com/embed' + video" frameborder="0"></iframe>
        </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}
.modal-outer-container .modal-inner-container {
  background-color: #1F2123;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
  border-radius: 0.5px;
}
.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>