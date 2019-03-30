<template>
  <div id="show-list">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="title">Liste des fournisseurs</h1>
          <dm-input placeholder="Recherche de fournisseur" left-icon="search" v-model="search" class="search2" name="small" value="value" full-width="false" ></dm-input>
        </div>
      </div>
    </div>
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
              <router-link v-bind:to="'/provider/' + provider._id">
          <div class="card c1">
            <div class="card-header">
                <h3 class="provider-name">{{ provider.name }}</h3>
              
            </div>
          </div></router-link>
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
.col-lg-4{
  padding-left:4rem;
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
  margin-top: 55px;
}

.provider-name {
  font-weight: bold;
  color: #fff;
}

.search2{
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  margin-top: 2%;
  margin-bottom: 3%;
}

.title {
  text-align: center;
}
</style>
