<template>
  <div class="gallery">
  <div class="container" style="color:black;">
  <router-link to="/Plants">Add More Plants</router-link>
    <div class="col-md-12">
    <div v-for="plant in userPlant">
      <h1>{{ plant.nickname }} the {{plant.plant}}</h1>
      <h4> Is getting a {{ plant.sun_placement }} amount of sunlight</h4>
      <ul>
        <li> You last watered this {{plant.formatted.days_since}} days ago</li>
        <li> Sunlight Preference: {{plant.sun_pref}} </li>
      </ul>
      <router-link class="nav-link" v-bind:to="'/user_plants/'+ plant.id"> Edit Plant </router-link>
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
            days_since: ""
          },
          images: []
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