<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Username:</label>
          <input type="Username" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        username: this.username,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/userplants");
        })
        .catch(error => {
          this.errors = ["Invalid Username or password."];
          this.username = "";
          this.password = "";
        });
    }
  }
};
</script>