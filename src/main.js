import Vue from 'vue'
import App from './App.vue'
//Utilisation du module vue-ressource
import VueResource from 'vue-resource'
//Utilisation du module vue-router
import VueRouter from 'vue-router'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { router } from './_helpers/router'
import { store } from './_store'

Vue.use(VueResource);
Vue.use(VueRouter);

// Map

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// méthode permettant de mettre un nombre de caractères restreints pour la description sur la page showList, en ajoutant "..." à la fin
Vue.filter("snippet", function (value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
