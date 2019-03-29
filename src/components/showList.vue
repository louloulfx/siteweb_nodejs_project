<template>
  <div id="show-list">
    <h1>Voici la liste des fournisseurs</h1>
    <input type="text" v-model="search" placeholder="Recherche de fournisseur">
    <div class="container">
      <div class="row">
        <div class="single-blog col-lg-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <article class="card-text">ADD HERE</article>
            </div>
          </div>
        </div>
        <div v-for="provider in filteredProviders" class="single-blog col-lg-4">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              <router-link v-bind:to="'/provider/' + provider._id">
                <h2 class="provider-name">{{ provider.name }}</h2>
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
import searchMixin from '../mixins/searchMixins';
export default {
  data() {
    return {
      providers: [],
      search: ""
    };
  },
  mixins: [searchMixin],
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

.card {
  background-color: #191919;
  height: 18rem;
  margin-bottom: 20%
}

.provider-name {
  font-weight: bold;
  color: #fff;
}

</style>
