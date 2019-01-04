import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://sample-api-78c77.firebaseio.com'

new Vue({
  el: '#app',
  //router,
  render: h => h(App),
})
