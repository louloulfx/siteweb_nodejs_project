<template>
  <div id="add-blog" class="animated fadeIn container">
    <!-- Formulaire permmettant de renseigner un nouveau fournisseur -->
    <form v-if="!submitted" class="form">
      <div class="row container_row">
        <h2>Ajouter un fournisseur:</h2>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <label class="label">Nom:</label>
        </div>
        <div class="col-lg-9">
          <input class="input" type="text" v-model.lazy="provider.name" required>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <label class="label">Adresse:</label>
        </div>
        <div class="col-lg-9">
          <input class="input" v-model.lazy="provider.address">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <label class="label">Téléphone :</label>
        </div>
        <div class="col-lg-9">
          <input class="input" type="text" v-model.lazy="provider.phone" required>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <label class="label">Adresses mail :</label>
        </div>
        <div class="col-lg-9">
          <input class="input" type="text" v-model.lazy="provider.mail" required>
        </div>
      </div>
      <label class="label">Description:</label>
      <textarea class="textarea" type="text" v-model.lazy="provider.description" required></textarea>
      <div class="buttons_container">
        <!-- router-link sert à faire un lien sur une autre page, ici c'est vers la page principale -->
        <router-link to="/">
          <button type="button" class="btn">Annuler</button>
        </router-link>
        <!-- Utilisation de la méthode post pour ajouter un fournisseur dans la base de donnée -->
        <button type="submit" class="btn" v-on:click.prevent="post">Ajout d'un fournisseur</button>
      </div>
    </form>
    <div v-if="submitted">
      <div class="container validAdd">
        <!-- Affichage du contenu envoyé après avoir cliqué sur le bouton Ajout d'un fournisseur -->
        <h2 class="text-center">Vous avez ajouté un fournisseur !</h2>

        <div id="preview">
          <h3 class="text-center">Voici les informations que vous avez renseigner:</h3>
          <div class="contenu col-lg-12">
            <p>Nom de l'entreprise: {{provider.name}}</p>
            <p>Description:</p>
            <p>{{provider.description}}</p>
            <p>Adresse: {{provider.address}}</p>
            <p>Numéro de téléphone:: {{provider.phone}}</p>
            <p>Mail: {{provider.mail}}</p>
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
      // Liste des champs du modèle provider
      provider: {
        name: "",
        description: "",
        address: "",
        phone: "",
        mail: "",
        longitude: "",
        latitude: ""
      },
      submitted: false
    };
  },
  methods: {
    // Méthode permettant d'ajouter un fournisseur
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
h3 {
  margin-bottom: 30px;
}
.row {
  margin-bottom: 20px;
}
button {
  background-color: #ff9800;
  color: white;
}

.validAdd {
  padding: 20px 20px 20px 20px;
}
.input {
  border-style: none;
  color: white;
  -webkit-appearance: none;
  background-color: #585858;
  border-color: #474747;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
}
.buttons_container {
  display: flex;
  justify-content: space-between;
}

.btn {
  background-color: #ff5722;
  border-radius: 20px;
}

.textarea {
  background-color: #585858;
  border-color: #474747;
  border-radius: 25px;
  margin-bottom: 30px;
  height: 200px;
  color: #fff;
  padding: 2%;
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
