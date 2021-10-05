import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'startbootstrap-freelancer/dist/css/styles.css'
import router from './router'
import axios from 'axios';
import VueSimpleAlert from "vue-simple-alert";
import './index.css'


axios.defaults.timeout = 400000;
axios.interceptors.request.use((request) => {
  // LoadingBar.start();
  // set token and other headers


  request.headers['Access-Control-Allow-Origin'] = '*';

  // request.headers['Authorization'] =  'Bearer '+ currentUser.token;
  if (!request.headers.responseType) {
      request.headers['Content-Type'] = 'application/json';
  }
  return request;
}, error => {
  window.console.log('failed to intercept request');
  Promise.reject(error);
})


// import vuelidate from 'vuelidate'

createApp(App).use(router).mount('#app')
createApp(App).use(VueSimpleAlert).mount('#app')




