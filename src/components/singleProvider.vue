<template>
  <div id="single-blog">
    <h1>Nom: {{provider.name}}</h1>
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
      data-target="#exampleModal"
    >Supprimer ce fournisseur</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
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
            <router-link to="/">
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="deleteData(provider, provider._id)"
              >Supprimer</button>
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
      provider: {}
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
    deleteData(provider, _id) {
      this.$http
        .delete("https://damp-hollows-18655.herokuapp.com/provider/" + this.id)
        .then(function() {
          window.location.reload();
        });
    }
  }
};
</script>

<style scoped>

</style>

