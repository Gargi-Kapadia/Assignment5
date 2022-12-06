<!-- <script setup>
import { ref } from "vue";
import axios from "axios"

const responses = ref(null);

const response = (
  await getData("https://api.themoviedb.org/3/trending/movie/week", {
    params: {
        api_key: "354ab13223b58e3243b70a0085da1b2e",
    },
  })
).data;

const getData = async (url, params) => {
   try {
      return await axios.get(url, params);
    } catch (error) {
       console.log(error)
   }
};
</script>
</style> -->

<script setup>
   import { ref } from "vue";
   import axios from "axios"
   const Movies = ref("");
   const response = ref(null);
    
   const getMovies = async () => {
   console.log(Movies.value)
   console.log(response.value)
   response.value = (await getData(`https://api.themoviedb.org/3/trending/movie/week`, {
     params: {
       api_key: "354ab13223b58e3243b70a0085da1b2e",
   }
 })).data
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
  <div id="div1" :style="{'background-image':'url(https://images.pexels.com/photos/7605490/pexels-photo-7605490.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)'}">
    <h1 id="movies"> Movies </h1>
    <!-- <label id="label" for="Movies">Select Movies here:</label>
    <select name="Movies" id="Movies" v-model="Movies">
    <option value="384018">Fast and Furious 9</option>
    <option value="497698">Black Widow</option>
    <option value="634649">Spider-Man: No Way Home</option>
    <option value="438148">Minions: The Rise of Gru</option>
    <option value="512195">Red Notice</option>
    <option value="455207">Crazy Rich Asians</option>
    <option value="705861">Hustle</option>
    <option value="772">Home Alone 2: Lost in New York</option>
    <option value="284054">Black Panther</option>
    <option value="864">Cool Runnings</option>  
    </select> -->
    <button id=get @click="getMovies()">Get</button>
  <div v-if="response" class="Movies">
    <div v-for="results in response.target">
    <p>{{results.original_title}}</p>
    </div>
       </div>
    </div>

      <!-- <h1 id="title">Title: {{ response.title }}</h1>
      <p id="runtime">Runtime: {{ response.runtime }}</p>
      <p id="overview">Overview: {{ response.overview }}</p>
      <p id="release_date">Release date: {{ response.release_date }}</p>
      <p id="tagline"> {{ response.tagline }}</p>
      <p id="vote_count">Vote Count: <br>{{ response.vote_count }}</p>
      <p id="vote_average">Vote Average: <br>{{ response.vote_average }}</p>
      <p id="popularity">Popularity: <br>{{ response.popularity }}</p>
      <p id="revenue">Revenue: $ {{ response.revenue }}</p>
      <img v-bind:src="'https://image.tmdb.org/t/p/w500' + response.poster_path" /> 
    <div v-for="genre in response.genres">
      <p>{{ genre.name }}</p> -->
  <!-- </div> -->
  <!-- </div> -->
</template>
 
<style>
</style>