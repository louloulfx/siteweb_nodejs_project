import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueDarkMode from "vuedarkmode";

Vue.use(VueDarkMode);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + "...";
});
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
