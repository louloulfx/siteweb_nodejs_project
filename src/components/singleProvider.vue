<template>
  <div id="single-blog">
    <h1>{{provider.name}}</h1>
    <article>Description: {{provider.description}}</article>
    <ul>
      <li>Adresse: {{provider.address}}</li>
      <li>Numéro de téléphone: {{provider.phone}}</li>
      <li>Email: {{provider.mail}}</li>
    </ul>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#updateModal"
    >Modifier</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title noirrrr" id="exampleModalLabel">Modification du fournisseur</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body noirrrr">
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
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Revenir en arrière</button>
            <button type="button" class="btn btn-primary" v-on:click="put">Modifier</button>
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#deleteModal"
    >Supprimer</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title noirrrr"
              id="exampleModalLabel"
            >Etes-vous bien sûr de vouloir faire ça?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            class="modal-body noirrrr"
          >Si vous le supprimer vous n'aurez plus accès à ses informations</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Revenir en arrière</button>
            <router-link to="/providers">
              <button type="button" class="btn btn-primary" v-on:click="deleteData">Supprimer</button>
            </router-link>
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
      id: this.$route.params.id,
      provider: {
        name: "",
        description: "",
        address: "",
        phone: "",
        mail: ""
      }
    };
  },
  created() {
    this.$http
      .get("https://damp-hollows-18655.herokuapp.com/provider/" + this.id)
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.provider = data;
      });
  },
  methods: {
    deleteData() {
      this.$http
        .delete("https://damp-hollows-18655.herokuapp.com/provider/" + this.id)
        .then(function() {
          window.location.reload();
        });
    },
    put() {
      this.$http
        .put(
          "https://damp-hollows-18655.herokuapp.com/provider/" + this.id,
          this.provider
        )
        .then(function() {
          window.location.reload(
            "/add"
          );
        });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
}

.btn {
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #ff5722;
}

.noirrrr {
  color: black;
}
</style>

