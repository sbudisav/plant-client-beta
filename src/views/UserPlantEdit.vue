<template>
  <div class="user-plant-edit" style="color:black;">
    <h1>{{ userPlant.plant }}</h1>
    <h4> {{ userPlant.nickname }}</h4>
    <h4> {{ userPlant.sun_placement }} </h4>
    <form  v-on:submit.prevent="edit()">
      <input type="text"  v-model="nickname" class="font-alt form-control required" id="nickname" placeholder="Nickname">
      <input type="text"  v-model="sun_placement" class="font-alt form-control required" id="sun_placement" placeholder="Sun placement">
      <button type="edit" id="btn-form-contact">Add Changes</button> <br>
      <button type="delete" id="btn-form-contact"> DELETE FOREVER (NOT A JOKE) </button>
    </form>

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
          images: []
          }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/user_plants/" + this.$route.params.id)
    .then(response => {
      this.userPlant = response.data;
    });
  },
  methods: {

    edit: function() {
      var params = {
        plant_id: this.$route.params.id
      };
      axios
        .patch("http://localhost:3000/api/user_plants", params)
        .then(response => {
          this.$router.push("/user_plants");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }


  },
  computed: {}
};
</script>