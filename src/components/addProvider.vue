<template>
  <div id="add-blog" class="container">
    <form v-if="!submitted" class="form">
      <div class="row container_row">
        <h2>Ajouter un fournisseur: </h2>
      </div>
      <div class="row container_row">
        <label class="label">Nom du fournisseur :</label>
        <input class="input row1" type="text" v-model.lazy="provider.name" required>
      </div>
      <div class="row container_row">
        <label class="label">Adresse :</label>
        <input class="input row2" v-model.lazy="provider.address">
      </div>
      <div class="row container_row">
        <label class="label">Téléphone :</label>
        <input class="input row3" type="text" v-model.lazy="provider.phone" required>
      </div>
      <div class="row container_row">
        <label class="label">Adresses mail :</label>
        <input class="input row4" type="text" v-model.lazy="provider.mail" required>
      </div>
      <label class="label">Description:</label>
      <textarea class="textarea" type="text" v-model.lazy="provider.description" required></textarea>
      <div class="buttons_container">
        <button type="button" class="btn">Annuler</button>
        <button
          type="button"
          class="btn"
          v-on:click.prevent="post"
        >Ajout d'un fournisseur</button>
      </div>
    </form>
    <div v-if="submitted">
      <h2>Vous avez ajouté un fournisseur !</h2>

      <div id="preview">
        <h3>Voici les informations que vous avez renseigner:</h3>
        <p>Nom de l'entreprise: {{provider.name}}</p>
        <p>Description:</p>
        <p>{{provider.description}}</p>
        <p>Adresse: {{provider.address}}</p>
        <p>Numéro de téléphone:: {{provider.phone}}</p>
        <p>Mail: {{provider.mail}}</p>
      </div>
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
        .post(
          "https://damp-hollows-18655.herokuapp.com/provider",
          this.provider
        )
        .then(function() {
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
button{
  background-color: #FF9800;
  color: white;
}
.row1 {
  width: 76%;
}
.row2 {
  width: 89%;
}
.row3 {
  width: 86%;
}
.row4 {
  width: 83%;
}
.input {
  border-style: none;
  color: white;
  -webkit-appearance: none;
  background-color: #585858;
  border-color: #474747;
  border-radius: 10px;
}
.label {
  margin-right: 10px;
  color: white;
}
.buttons_container {
  display: flex;
  justify-content: space-between;
}
.textarea {
  background-color: #585858;
  border-color: #474747;
  border-radius: 25px;
  margin-bottom: 30px;
  height: 100px;
}
.container_row {
  margin-bottom: 30px;
}
.container {
  background-color: #171717;
  border-color: #474747;
  border-radius: 25px;
  width: 800px;
}
.form {
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 991px) {
  .input {
    width: 100%;
  }
}
</style>
