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
            <h5 class="modal-title" id="exampleModalLabel">Modification du fournisseur</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
            <h5 class="modal-title" id="exampleModalLabel">Etes-vous bien sûr de vouloir faire ça?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Si vous le supprimer vous n'aurez plus accès à ses informations</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Revenir en arrière</button>
            <button type="button" class="btn btn-primary" v-on:click="deleteData">Supprimer</button>
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
          window.location.reload("/add");
        });
    }
  }
};
</script>

<style scoped>
.close {
  color: #fff;
}

.modal-header {
  border-bottom: 3px solid #000000;
}

.modal-footer {
  border-top: 3px solid #000000;
}

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
  border-radius: 20px;
}

.modal-content {
  background-color: #171717;
}

.row {
  margin-bottom: 20px;
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

.textarea {
  background-color: #585858;
  border-color: #474747;
  border-radius: 25px;
  margin-bottom: 30px;
  height: 200px;
  color: #fff;
  padding: 2%;
  width: 100%;
}
</style>

