<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form id="loginForm">
          <h1>- ViaBrico -</h1>
          <div class="form-group">
            <!-- <label for="username">Username</label> -->
            <input
              type="text"
              name="username"
              placeholder="Username"
            >
            <!-- class="form-control" -->
          </div>
          <div class="form-group">
            <!-- <label for="password">Password</label> -->
            <input
              type="password"
              name="password"
              placeholder="Password"
            >
            <!-- class="form-control" -->
          </div>
              <router-link to="/providers">
          <button @click.prevent="login" class="btn btn-lg btn-primary btn-block" type="submit">Connexion</button></router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    post: function(){
        let formData = new FormData(document.getElementById("loginForm"));
        this.$http.post("https://damp-hollows-18655.herokuapp.com/user", formData)
    }
  }
  
};
</script>

<style scoped>

form {
  text-align: center;
  margin-top: 18%;
}

input {
  margin-top: 2%;
  text-align: center;
  width: 100%;
  height: 50px;
  border: 2px solid #474747;
  border-radius: 5px;
  background-color: #191919;
  text-align: center;
  color: #fff;
}

button {
  border: solid 2px #ff5722;
  display: block;
  margin-top: 4%;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  background-color: #ff5722;
  border-radius: 20px;
}

button:hover {
  background-color: #ff5722;
  border: solid 2px #fff;
  text-decoration: underline #ff5722;
}

</style>