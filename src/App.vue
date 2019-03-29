<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/Header.vue'

export default {
  components: {
    'app-header': header
  }
}


</script>

<style>

body {
  font-family: 'Montserrat', sans-serif;
  background-color: #000;
  color: #fff;
}

</style>
