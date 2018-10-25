<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      plant: {
          description: [],
          sun_pref: "",
          water_pref: "",
          images: []
          }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/plants/" + this.$route.params.id)
    .then(response => {
      this.recipe = response.data;
    });
  },
  methods: {},
  computed: {}
};
<script>