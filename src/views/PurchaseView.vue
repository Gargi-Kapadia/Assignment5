<script setup>
import Footer from "../components/SiteFooter.vue";
import SiteModal from '../components/SiteModal.vue';
   import { ref } from "vue";
   import axios from "axios"
 
const showModal = ref(false);
const selectedId = ref(0);
const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};
const closeModal = () => {
  showModal.value = false;
};
   const movies = ref("");
   const response = ref(null);
    
   const getMovies = async () => {
   console.log(movies.value)
   console.log(response.value)
   response.value = (await getData(`https://api.themoviedb.org/3/trending/movie/week`, {
     params: {
       api_key: "354ab13223b58e3243b70a0085da1b2e",
       append_to_response: "videos",
   }
 })).data['results']
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
    <h1 id="movies"> Movies </h1>
  <div v-if="getMovies()" v-for="result in response" class="Movies-contanier">
      <!-- <h1 id="title">Title: {{ result.title }}</h1>
      <p id="runtime">Runtime: {{ result.runtime }}</p>
      <p id="overview">Overview: {{ result.overview }}</p>
      <p id="release_date">Release date: {{ result.release_date }}</p>
      <p id="tagline"> {{ result.tagline }}</p>
      <p id="vote_count">Vote Count: <br>{{ result.vote_count }}</p>
      <p id="vote_average">Vote Average: <br>{{ result.vote_average }}</p>
      <p id="popularity">Popularity: <br>{{ result.popularity }}</p>
      <p id="revenue">Revenue: $ {{ result.revenue }}</p> -->
      <img @click="openModal(result.id)" v-bind:src="'https://image.tmdb.org/t/p/w500' + result.poster_path" /> 
    <!-- <div v-for="genre in response.genres">
      <p>{{ genre.name }}</p> --> 
<SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</div>
<div class="footer">
<Footer></Footer>
</div>
</template>
 
<style>
.Movies-contanier {
  display: flex;
  display: inline-grid;
  align-content: space-evenly;
  padding: 10px;
  gap: 10px;
  margin-bottom: -300px;
  padding-bottom: -50px;
  margin-right: -10px;
  margin-left: 15px;
}
img {
 height: 50%;
 border-radius: 1rem;
 padding: 10px;
}
h1 {
  text-align: center;
  font-size: 100px;
}
.footer {
  text-align: center;
  padding-top: 60px;
}
</style> 