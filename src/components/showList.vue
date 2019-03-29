<template>
  <div id="show-list">
    <h1 class="title">Liste des fournisseurs</h1>
    <input class="search" type="text" v-model="search" placeholder="Recherche de fournisseur">
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
          <div class="card">
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

.title {
  text-align: center;
}

.search {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 3%;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #474747;
  width: 300px;
  height: 40px;
  text-align: center;
  color: #fff;
}

.card {
  background-color: #191919;
  width: 18rem;
  height: 18rem;
  margin-bottom: 20%;
  border: 2px solid #474747;
}

.card-header {
  border-bottom: 2px solid #474747;
}

.provider-name {
  font-weight: bold;
  color: #fff;
}

</style>
