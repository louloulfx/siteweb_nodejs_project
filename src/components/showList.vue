<template>
  <div id="show-list">
    <h1>Voici la liste des fournisseurs</h1>
    <div class="container">
      <div class="row">
        <div v-for="provider in providers" class="single-blog col-lg-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <router-link v-bind:to="'/provider/' + provider._id">
                <h2>{{ provider.name }}</h2>
              </router-link>
            </div>
            <div class="card-body">
              <article class="card-text">{{ provider.description }}</article>
            </div>
          </div>
        </div>
      </div>
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
