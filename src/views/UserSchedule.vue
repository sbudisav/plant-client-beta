<template>

<div class="services">
  <div class="container">
    <div v-for="plant in userPlants">
      <div class="col-md-10 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
        <br>
        <h2> {{plant.nickname }} ({{plant.plant}}) needs to be watered on {{plant.formatted.next_water_formatted}}</h2>
        <p style="color:black;font-size:140%;"> Was last watered {{plant.formatted.days_since}} days ago, and will need water in {{plant.formatted.days_till}} days</p>
        <form class="form-inline" v-on:submit.prevent="submit(plant)">
           <label style="color:black"> I last watered this plant: </label>
           <select class="form-control" id="last watered" v-model="updatedWatered">
            <option value="0">Today</option>
            <option value="1">Yesterday</option>
            <option value="2">3 days ago</option>
            <option value="3">4 days ago</option>
            <option value="4">5 days ago</option>
            <option value="5">6+ days ago</option>
          </select>
          <button type="submit" class="btn btn-primary"> Submit </button>
        </form>
        <hr>
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
      updatedWatered: 0,
      userPlants: [
        {
          id: "",
          plant: "",
          nickname: "",
          sun_placement: "",
          sun_pref: "",
          last_watered: "",
          images: [],
          water_freq: "",
          formatted: {
            days_since: "",
            next_water_formatted: ""
          }
        }
        ]
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/user_plants/")
    .then(response => {
      console.log(response.data);
      this.userPlants = response.data;
    });
  },
  methods: {

    submit: function(plant) {
      var params = {
        last_watered: this.updatedWatered
      };
      axios
        .patch("http://localhost:3000/api/user_plants/" + plant.id, params)
        .then(response => {
          this.userPlants = response.data;
          this.updatedWatered = 0;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }

  },
  computed: {}
};
</script>