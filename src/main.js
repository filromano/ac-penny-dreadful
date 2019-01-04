import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import { store } from './store/store';

axios.defaults.baseURL = 'https://sample-api-78c77.firebaseio.com';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
