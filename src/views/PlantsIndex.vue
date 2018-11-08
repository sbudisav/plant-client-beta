<template>
 <div class="gallery">
   <div class="container">
    <div v-for="plant in plants">
      <div class="col-md-4">
        <router-link class="nav-link" v-bind:to="'/plants/'+ plant.id">
        <figure class="effect-marley">
          <img v-bind:src="plant.default_image_url" alt="" class="img-responsive" style="width:480px;height:360px;"/> 
          <figcaption>
            <h4> {{plant.name}} </h4>
            <p> {{plant.description}} </p>
          </figcaption>
        </figure>
      </router-link>
      </div>
    </div> 
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
  methods: {


    submit: function() {
      var params = {
        plant: this.id,
      };
      axios
        .post("/api/user_plants", params)
        .then(response => {
          this.$router.push("/recipes/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }


    
  },
  computed: {}
};
</script>