<template>
  <div class="container">
    <div class="user-plant-edit" style="color:black;">
      <h2> {{ userPlant.nickname }} is currently getting {{ userPlant.sun_placement}} amount of sunlight</h2> <br>
      <h3> Add Image! </h3>
      <form v-on:submit.prevent="submit()">
        <div>
          Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
        </div>
        <input type="submit" value="add image" class="btn btn-primary btn-lg">
      </form> <br>

      <form  v-on:submit.prevent="edit()">
        <input type="text" v-model="nickname" class="font-alt form-control required" id="nickname" placeholder="New nickname">
        <h3> How much sunlight is this plant getting? </h3>
        <select class="form-control" id="sun_placement" v-model="sun_placement">
          <option value="low">Low</option>
          <option value="med">Med</option>
          <option value="high">High</option>
        </select>
        <button type="submit" id="btn-form-contact">Add Changes</button> <br>
      </form>

      <form v-on:submit.prevent="deleteplant()"> <br>
        <button type="submit" name="Live Demo" class="btn btn-primary btn-lg"> DELETE FOREVER (NOT A JOKE) </button>
      </form> <br>
    </div>
  </div>

</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      userPlant: {
          plant: "",
          nickname: "",
          sun_placement: "",
          image: ""
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
        plant_id: this.$route.params.id,
        nickname: this.nickname,
        sun_placement: this.sun_placement,
        image: this.image
      };
      axios
        .patch("http://localhost:3000/api/user_plants/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/userplants/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    deleteplant: function() {
      var params = {
        plant_id: this.$route.params.id,
      };
      axios
        .delete("http://localhost:3000/api/user_plants/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/userplants/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },


    submit: function() {
      var formData = new FormData();
      formData.append("image", this.image);
      axios.patch("http://localhost:3000/api/user_plants/" +this.$route.params.id, formData).then(response => {
        this.$refs.fileInput.value = "";
        this.user_plants = response.data;
      });
    },
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    }


  },
  computed: {}
};
</script>