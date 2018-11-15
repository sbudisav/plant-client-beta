<template>
  <div class="gallery">
    <div class="container" style="color:black;">
      <router-link to="/Plants" class="btn btn-primary btn-lg">Add More Plants</router-link>
      <hr size="30">
    <div class="card">
      <div class="card-body">
        <div class="col-md-12">
          <div v-for="plant in userPlant">
            <h1>{{ plant.nickname }} the {{plant.plant}}</h1>
            <img v-bind:src="plant.image" style="width:180px;"/> 
            <h3> You last watered this {{ plant.formatted.days_since }} days ago</h3>
            <h4> This plant is getting a {{ plant.sun_placement }} amount of sunlight</h4>
            <router-link class="btn btn-primary btn-lg" v-bind:to="'/userplants/'+ plant.id"> Edit Plant </router-link>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      userPlant:{
          plant: "",
          nickname: "",
          sun_placement: "",
          sun_pref: "",
          last_watered: "",
          formatted: {
            formatted_last_water: "",
            days_since: ""
          },
          image:""
          }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/user_plants/")
    .then(response => {
      console.log(response.data);
      this.userPlant = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>