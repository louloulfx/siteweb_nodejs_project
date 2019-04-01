<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form @submit.prevent="login">
          <h1>Connexion</h1>
          <div class="form-group">
            <label for="username">username</label>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="entrer un username"
            >
          </div>
          <div class="form-group">
            <label for="password">password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="entrer un password"
            >
          </div>
              <router-link to="/providers">
          <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Connexion</button></router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
      }
    };
  },
  methods: {},
  signup(context, creds, redirect) {
    context.$http
      .post("https://damp-hollows-18655.herokuapp.com/user", creds, data => {
        localStorage.setItem("id_token", data.id_token);
        localStorage.setItem("access_token", data.access_token);

        this.user.authenticated = true;

        if (redirect) {
          router.go(redirect);
        }
      })
      .error(err => {
        context.error = err;
      });
  }
};
</script>
<style scoped>
</style>