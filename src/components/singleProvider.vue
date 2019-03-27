<template>
  <div id="single-blog">
    <h1>{{provider.name}}</h1>
    <article>{{provider.description}}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      provider: {}
    }
  },
  created(){
      this.$http.get('https://damp-hollows-18655.herokuapp.com/provider/' + this.id).then(function(data){
          return data.json();
      }).then(function(data){
          this.provider = data;
      })
  }
};
</script>
