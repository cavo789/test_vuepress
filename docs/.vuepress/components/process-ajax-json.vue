<template>
  <div>
    <p>
      Users coming from
      <a :href="url">{{ url }}</a>. The list of users is thus dynamically built with a
      <strong>v-for</strong>.
    </p>
    <p>Using a "getAddress()" own methods for creating the address block.</p>
    <hr>
    <div v-for="(item, index) in items">
      <h2>{{ index+1 }}. {{item.name}} (aka {{ item.username }})</h2>
      <small>{{ item.email }}</small>
      <blockquote>
        <address v-html="getAddress(item)"/>
      </blockquote>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "ProcessAjaxJson",
  props: {
    url: {
      type: String,
      required: false,
      default: "https://jsonplaceholder.typicode.com/users"
    }
  },
  data() {
    return {
      items: []
    };
  },
  beforeMount() {
    axios
      .get(this.url)
      .then(response => {
        this.$data.items = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    getAddress(item) {
      var sReturn = "";

      if (item.hasOwnProperty("address")) {
        if (item.address.hasOwnProperty("street")) {
          sReturn = item.address.street + "<br/>";
        }
        if (item.address.hasOwnProperty("suite")) {
          sReturn += item.address.suite + "<br/>";
        }
        if (item.address.hasOwnProperty("zipcode")) {
          sReturn += item.address.zipcode + "&nbsp;";
        }
        if (item.address.hasOwnProperty("city")) {
          sReturn += item.address.city + "<br/>";
        }
      }
      return sReturn;
    }
  }
};
</script>
