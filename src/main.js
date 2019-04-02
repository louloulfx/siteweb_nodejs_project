import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

Vue.use(LMap);
Vue.use(LTileLayer);
Vue.use(LMarker);
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
