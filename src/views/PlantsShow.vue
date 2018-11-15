<template>
  <div class="plants-show" style="color:black;">
    <h1>{{ plant.name }}</h1>
    <h4> {{ plant.bionominal }}</h4>
    <form  v-on:submit.prevent="submit()">
      <button type="submit" id="btn-form-contact">Add This Plant to My Plants</button>
    </form>
    <ol>
      <li> {{plant.description}} </li>
      <li> Sunlight Preference: {{plant.sun_pref}} </li>
    </ol>

    <br>
    <ul id="image_urls">
      <li v-for="index in plant.images"> <img v-bind:src="index.url" style="width:350px;"> </li>
    </ul>
  </div>

</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      plant:{
          description: "",
          sun_pref: "",
          water_pref: 0,
          images: []
          }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/plants/" + this.$route.params.id)
    .then(response => {
      this.plant = response.data;
    });
  },
  methods: {

    submit: function() {
      var params = {
        plant_id: this.$route.params.id
      };
      axios
        .post("http://localhost:3000/api/user_plants", params)
        .then(response => {
          this.$router.push("/userplants");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }


  },
  computed: {}
};
</script>