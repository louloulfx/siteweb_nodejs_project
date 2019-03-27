<template>
  <div id="show-list">
    <h1>Voici la liste des fournisseurs</h1>
    <div v-for="provider in providers" class="single-blog">
      <router-link v-bind:to="'/provider/' + provider._id">
        <h2>{{ provider.name }}</h2>
      </router-link>
      <article>{{ provider.description }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      providers: []
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://damp-hollows-18655.herokuapp.com/provider")
      .then(function(data) {
        this.providers = data.body;
      });
  }
};
</script>

<style scoped>
</style>
