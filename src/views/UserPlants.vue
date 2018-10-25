<template>
  <div class="user-plants">
    <div v-for="plant in userPlant">
      <h1>{{ plant.nickname }} the {{plant.plant}}</h1>
      <h4> Is getting a {{ plant.sun_placement }} amount of sunlight</h4>
      <ol>
        <li> You last watered this {{plant.last_watered}} days ago</li>
        <li> Sunlight Preference: {{plant.sun_pref}} </li>
      </ol>
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