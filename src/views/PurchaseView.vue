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

<template>
<h1>Now its time for the actual website...</h1>

<div v-if="responses" class="Movies">
      <h1 id="title">Title: {{ response.title }}</h1>
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
      <p>{{ genre.name }}</p>
      </div>
      </div>
</template>

<style scoped>

</style> -->