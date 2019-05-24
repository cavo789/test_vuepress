<template>
  <div>
    <p>
      Images coming from
      <a :href="url">{{ url }}</a>. Refresh the page to get a newer one (the API only return one person at a time).
    </p>
    <!-- Only process 10 records of items -->
    <div v-for="(item, index) in items.slice(0,10)">
      <div style="float:clear;">
        <h2>{{ index+1 }}. {{ item.name.first }} {{ item.name.last }}</h2>
        <img style="float:left;padding:10px;" :src="item.picture.large">
        <ul style="list-style:none;">
          <li>Birthdate: {{ item.dob.date }}</li>
          <li>location: {{ item.location.street }} {{ item.location.postcode }} {{ item.location.city }}</li>
          <li>email: {{ item.email }}</li>
          <li>login: {{ item.login.username }}</li>
          <li>password: {{ item.login.password }}</li>
        </ul>
      </div>
      <hr style="float:clear">
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "ProcessPictures",
  props: {
    url: {
      type: String,
      required: false,
      default: "https://picsum.photos/v2/list"
    }
  },
  data() {
    return {
      items: []
    };
  },
  beforeMount() {
    axios
      .get(this.url, {
        headers: {
          "Content-Type": "text/html"
        }
      })
      .then(response => {
        this.$data.items = response.data.results;
        console.log(this.$data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
