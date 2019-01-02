import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
//import { routes } from './routes'

/*
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});
*/

axios.defaults.baseURL = 'https://sample-api-78c77.firebaseio.com'

new Vue({
  el: '#app',
  //router,
  render: h => h(App),
})
