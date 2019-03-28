<template>
  <div id="show-list">
    <h1>Voici la liste des fournisseurs</h1>
    <div v-for="provider in providers" class="single-blog">
      <router-link v-bind:to="'/provider/' + provider._id">
        <h2>{{ provider.name }}</h2>
      </router-link>
      <article>{{ provider.description }}</article>
      <div v-if="!submitted">
        <button v-on:click="deleteData(provider, provider._id)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      providers: [],
      submitted: false
    };
  },
  methods: {
    deleteData(providers, _id) {
      this.$http
        .delete("https://damp-hollows-18655.herokuapp.com/provider/" + _id)
        .then(function() {
          this.providers;
          this.submitted = true;
          alert("are you sure ?")
          window.location.reload();
        });
    }
  },
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
