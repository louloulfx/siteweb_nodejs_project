<template>
  <div id="show-list">
    <h1 class="title">Liste des fournisseurs</h1>
    <input class="search" type="text" v-model="search" placeholder="Recherche de fournisseurs">
    <div class="container">
      <div class="row">
        <div class="single-blog col-lg-4">
          <div class="card c3 text-center">
            <div class="card-body">
              <router-link to="/add">
                <img class="plus" src="../assets/plus.png">
              </router-link>
            </div>
          </div>
        </div>
        <div v-for="provider in filteredProviders" class="single-blog col-lg-4">
          <div class="card c1">
            <div class="card-header">
              <router-link v-bind:to="'/provider/' + provider._id">
                <h3 class="provider-name">{{ provider.name }}</h3>
              </router-link>
            </div>
          </div>
          <div class="card c2">
            <div class="card-body">
              <article class="card-text">{{ provider.description | snippet }}</article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixins";
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
  font-weight: bold;
}

.c1 {
  background-color: #191919;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-bottom: 0.5rem;
  width: 18rem;
  height: 4rem;
  border-right: 2px solid #474747;
  border-left: 2px solid #474747;
  border-top: 2px solid #474747;
}

.c2 {
  background-color: #191919;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-bottom: 20%;
  width: 18rem;
  height: 11.5rem;
  border-right: 2px solid #474747;
  border-left: 2px solid #474747;
  border-bottom: 2px solid #474747;
}

.c3 {
  background-color: #191919;
  border-radius: 25px;
  width: 18rem;
  height: 16rem;
  margin-bottom: 20%;
  border: 2px solid #474747;
}

.plus {
  margin-top: 75px;
}

.provider-name {
  font-weight: bold;
  color: #fff;
}

h3:hover { 
  text-decoration: underline #ff5722;
}

.search {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 3%;
  border: 2px solid #474747;
  border-radius: 5px;
  background-color: #191919;
  width: 300px;
  height: 40px;
  text-align: center;
  color: #fff;
}

</style>
