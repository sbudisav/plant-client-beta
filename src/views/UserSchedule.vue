<template>

<div class="services">
  <div class="container">
    <div v-for="plant in userPlant">
<!--        <img src="https://visualpharm.com/assets/501/Potted%20Plant-595b40b75ba036ed117d8359.svg" height="70">  come back to this-->
        <div class="col-md-10 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
          <br>
          <h2> {{plant.nickname }}, last watered {{plant.formatted.days_since}} days ago</h2>
          <p style="color:black;"> Needs to be watered in {{plant.water_freq}} days.
            <form class="form-inline" v-on:submit.prevent="submit()">
               <label style="color:black"> I last watered this plant: </label>
               <select class="form-control" id="last watered" v-mode="last_watered">
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="3 days">3 days ago</option>
                <option value="4 days">4 days ago</option>
                <option value="5 days">5 days ago</option>
                <option value="6 days+">6+ days ago</option>
              </select>
              <button type="submit" class="btn btn-primary"> Submit </button>
            </form>
          </p>
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
          images: [],
          water_freq: ""
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
  methods: {
    submit: function() {
      var params = {
        last_watered: this.last_watered
      };
      axios
        .patch("/api/user_plants", params)
        .then(response => {
          this.$router.push("/user_plants/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }

  },
  computed: {}
};
</script>