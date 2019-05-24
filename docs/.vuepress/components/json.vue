<template>
  <div>
    <p>
      This is the JSON answer of
      <a :href="url">{{ url }}</a>
    </p>
    <pre><code>{{ json }}</code></pre>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "json",
  props: {
    url: {
      type: String,
      required: false,
      default: "https://reqres.in/api/users"
    }
  },
  data() {
    return {
      json: ""
    };
  },
  beforeMount() {
    axios
      .get(this.url)
      .then(response => {
        this.$data.json = response;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
