<template>
  <div id="show-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="title">Liste des fournisseurs</h1>
          <input
            class="search"
            type="text"
            v-model="search"
            placeholder="Recherche de fournisseurs"
          >
        </div>
      </div>
    </div>
    <div v-if="providers === 'loader' " class="loader">
      <img src="../assets/loader.gif" alt="">
    </div>
    <div v-else class="animated bounceIn container">
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
        <!-- Affichage de tout les fournisseurs avec seulement leurs noms et une partie de leurs descriptions -->
        <div v-for="provider in filteredProviders" class=" animated bounceIn single-blog col-lg-4">
          <router-link v-bind:to="'/provider/' + provider._id">
            <div class="card c1">
              <div class="card-header">
                <h4 class="provider-name">{{ provider.name }}</h4>
              </div>
            </div>
          </router-link>
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
      providers: "loader",
      search: ""
    };
  },
  mixins: [searchMixin],
  methods: {},
  created() {
    // méthode permettant d'afficher la liste des fournisseurs
    this.$http
      .get("https://damp-hollows-18655.herokuapp.com/provider")
      .then(function(data) {
        this.providers = data.body;
      });
  }
};
</script>

<style scoped>
  .loader{
    display: flex;
    justify-content: center;
  }
.card-header{
  border-bottom: 1px solid #171717;
}
.title {
  font-weight: bold;
}

.col-lg-4 {
  padding-left: 4rem;
  padding-right: 4rem;
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

.c1:hover {
  text-decoration: underline #ff5722;
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
  margin-top: 28%;
}

.provider-name {
  font-weight: bold;
  color: #fff;
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
