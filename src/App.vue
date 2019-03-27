<template>
  <div>
    <show-list></show-list>
  </div>
</template>

<script>
import showList from './components/showList.vue'
// import addProvider from './components/addProvider.vue'

export default {
  components: {
    'show-list': showList
    // 'add-provider': addProvider
  }
}
</script>

<style>
</style>
