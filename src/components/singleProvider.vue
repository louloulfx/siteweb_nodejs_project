<template>
  <div id="single-blog">
    <div class="loader" v-if="provider.name === ''">
      <img src="../assets/loader.gif" alt="" />
    </div>
    <div v-else class="animated bounceIn main_container">
      <div class="left_pannel">
        <l-map style="height: 100%; width: 100%" :zoom="15" :center="position">
          <l-tile-layer :url="url"></l-tile-layer>
          <l-marker :lat-lng="position"></l-marker>
        </l-map>
      </div>
      <div class="right_pannel">
        <div class="row">
          <router-link to="/">
            <img class="icon_arrow" src="../assets/arrow.png" />
          </router-link>
          <h1 class="name">{{ provider.name }}</h1>
          <p class="address">({{ provider.address }})</p>
        </div>
        <hr class="line_head" />
        <div class="row icons_container">
          <div class="icon_container">
            <img class="icon" src="../assets/phone.png" />
            <p>{{ provider.phone }}</p>
          </div>
          <div class="icon_container">
            <img class="icon" src="../assets/email.png" />
            <p>{{ provider.mail }}</p>
          </div>
        </div>
        <p class="desc">{{ provider.description }}</p>
        <div class="buttons_container">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#updateModal"
          >
            Modifier
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#deleteModal"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
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
            <h5 class="modal-title" id="exampleModalLabel">
              Modification du fournisseur
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-3">
                <label class="label">Nom:</label>
              </div>
              <div class="col-lg-9">
                <input
                  class="input"
                  type="text"
                  v-model.lazy="provider.name"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <label class="label">Adresse:</label>
              </div>
              <div class="col-lg-9">
                <input class="input" v-model.lazy="provider.address" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <label class="label">Téléphone :</label>
              </div>
              <div class="col-lg-9">
                <input
                  class="input"
                  type="text"
                  v-model.lazy="provider.phone"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <label class="label">Adresses mail :</label>
              </div>
              <div class="col-lg-9">
                <input
                  class="input"
                  type="text"
                  v-model.lazy="provider.mail"
                  required
                />
              </div>
            </div>
            <label class="label">Description:</label>
            <textarea
              class="textarea"
              type="text"
              v-model.lazy="provider.description"
              required
            ></textarea>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Revenir en arrière
            </button>
            <button type="button" class="btn btn-primary" v-on:click="put">
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>

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
            <h5 class="modal-title" id="exampleModalLabel">
              Etes-vous bien sûr de vouloir faire cela ?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Si vous le supprimez vous n'aurez plus accès à ces informations.
          </div>
          <div class="modal-footer footer-delete">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Revenir en arrière
            </button>
            <router-link to="/">
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="deleteData"
              >
                Supprimer
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      id: this.$route.params.id,
      provider: {
        name: "",
        description: "",
        address: "",
        phone: "",
        mail: "",
        longitude: "",
        latitude: ""
      },
      georesult: [
        {
          lon: "",
          lat: ""
        }
      ],
      headers: {
        "User-Agent": "node-nominatim"
      },
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    };
  },
  computed: {
    position() {
      return [Number(this.georesult[0].lat), Number(this.georesult[0].lon)];
    }
  },
  latlongaddr() {},
  created() {
    // Méthode pour afficher un fournisseur en fonction de son id
    this.$http
      .get("https://damp-hollows-18655.herokuapp.com/provider/" + this.id)
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.provider = data;
      });
  },
  updated() {
    this.$http
      .get(
        "https://nominatim.openstreetmap.org/search/" +
          this.provider.address +
          "?format=json&polygon=1&addressdetails=1"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.georesult = data;
      });
  },
  methods: {
    deleteData() {
      // méthode afin de supprimer un fournisseur
      this.$http
        .delete("https://damp-hollows-18655.herokuapp.com/provider/" + this.id)
        .then(function() {
          window.location.reload();
        });
    },
    put() {
    // méthode afin de modifier un fournisseur
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
.loader {
  display: flex;
  justify-content: center;
}
.icon_arrow {
  margin-top: 7px;
  width: 32px;
  height: 32px;
}
.line_head {
  background: white;
  size: 20px;
  margin-top: 4px;
}
.address {
  padding-top: 14px;
}
.icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.icon_container {
  display: flex;
  flex-direction: row;
}
.icons_container {
  display: flex;
  justify-content: space-around;
}
.buttons_container {
  display: flex;
  justify-content: space-between;
}
p {
  font-size: 20px;
}
h1 {
  font-size: 40px;
  margin-right: 10px;
}
.right_pannel {
  width: 50%;
  margin: 20px;
}
.left_pannel {
  width: 50%;
}
.main_container {
  margin: auto;
  border-radius: 25px;
  width: 90%;
  display: flex;
  background-color: #191919;
  min-height: 500px;
}
h1 {
  text-align: center;
  font-weight: bold;
}

.btn {
  border: none;
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
