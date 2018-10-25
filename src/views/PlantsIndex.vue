<template>
  <div class="home">
    <h1>{{message}}</h1>
      <div v-for="plant in plants">
      <router-link class="nav-link" v-bind:to="'/plants/'+ plant.id"> <h2> {{plant.name}} </h2> </router-link>
      <h3> {{plant.description}} </h3> 

    </div> 

  </div>
</template>

<style>
</style>

<script>

var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Plant.me",
      plants: []
    };
  },
  created: function() {
    
    axios
      .get("http://localhost:3000/api/plants")
      .then(function(response) {
      console.log(response);
      this.plants = response.data;
    }.bind(this));

  },
  methods: {},
  computed: {}
};
</script>