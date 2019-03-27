<template>
  <div id="add-blog">
    <h2>Ajout d'un nouveau fournisseur</h2>
    <form v-if="!submitted">
      <label>Nom de l'entreprise:</label>
      <input type="text" v-model.lazy="provider.name" required>
      <label>Description: </label>
      <textarea v-model.lazy="provider.description"></textarea>
      <label>Adresse:</label>
      <input type="text" v-model.lazy="provider.address" required>
      <label>Numéro de téléphone:</label>
      <input type="text" v-model.lazy="provider.phone" required>
      <label>Mail:</label>
      <input type="text" v-model.lazy="provider.mail" required>
      <button v-on:click.prevent="post">Ajout d'un fournisseur</button>
    </form>
    <div v-if="submitted">
      <h3>Vous avez ajouté un fournisseur</h3>
    </div>
    <div id="preview">
      <h3>Preview Fournisseur</h3>
      <p>Nom de l'entreprise: {{provider.name}}</p>
      <p>Description:</p>
      <p>{{provider.description}}</p>
      <p>Adresse: {{provider.address}}</p>
      <p>Numéro de téléphone:: {{provider.phone}}</p>
      <p>Mail: {{provider.mail}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provider: {
        name: "",
        description: "",
        address: "",
        phone: "",
        mail: ""
      },
      submitted: false
    };
  },
  methods: {
    post() {
      this.$http
        .post("https://damp-hollows-18655.herokuapp.com/provider", this.provider).then(function(){
            this.submitted = true;
        })
    }
  }
};
</script>

<style>
</style>
