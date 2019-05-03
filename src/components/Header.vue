<template>
  <nav class="navbar">
    <router-link to="/">
      <a class="navbar-brand">
        <img src="../assets/viabrico.png" width="200" height="45" alt />
      </a>
    </router-link>
    <router-link to="/login">Se déconnecter</router-link>
  </nav>
</template>

<script>
export default {};
</script>
<style scoped>
.navbar {
  background-color: #474747;
  margin-bottom: 4rem;
  padding-left: 20%;
}
</style>
