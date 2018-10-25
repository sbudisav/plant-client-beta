<template>
  <div class="plants-show">
    <h1>{{ plant.name }}</h1>
    <h4> {{ plant.bionominal }}</h4>
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
  methods: {},
  computed: {}
};
</script>