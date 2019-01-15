<template>
  <div class="signup">
    <div class="container" style="color:black;">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Username:</label>
          <input type="username" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <label>Zip Code:</label>
          <input type="text" v-model="zip" maxlength="5" placeholder="ex: 94301" class="form-control"/>
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      username: "",
      password: "",
      passwordConfirmation: "",
      zip: "",
      errors: []
    };
  },
  methods: {

  getCity: function() {
    let self = this;
    $.getJSON("https://ZiptasticAPI.com/" + this.zip, function(result) {
      if (result.error) {
        self.error = "zip code not found";
        self.city = "";
        $(".error").addClass("no");
      } else {
        self.city = result.city + "," + result.state;
        $(".display").addClass("animated fadeInDown");
      }
      console.log(result);
    });
  },
    mounted: function(){
      this.getCity();
  },


    submit: function() {
      var params = {
        name: this.name,
        username: this.username,
        password: this.password,
        location: this.zip,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  watch: {
    zip: function() {
      if (this.zip.length === 5) {
        this.getCity();
        this.error = "";
        $(".error").removeClass("no");
      }
      if (this.zip.length < 5) {
        this.city = "";
        this.error = "please enter a valid zipcode";
        $(".error").addClass("no");
      }
    }
  }
};
</script>