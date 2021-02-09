import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'



Vue.config.productionTip = false

let firebaseConfig = {
  apiKey: "AIzaSyBzolzkmtXfcs1Xa1T_1h_qieavqUIHTWY",
  authDomain: "mini-shop-300a9.firebaseapp.com",
  projectId: "mini-shop-300a9",
  storageBucket: "mini-shop-300a9.appspot.com",
  messagingSenderId: "813718231393",
  appId: "1:813718231393:web:831cfe1115c12237ba8d20"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
