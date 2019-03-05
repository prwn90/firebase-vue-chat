import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

 var config = {
    apiKey: "AIzaSyB0goHBLq-8RCOr3G-5WTgGWl2eER6kAJU",
    authDomain: "fir-vue-chat-6682a.firebaseapp.com",
    databaseURL: "https://fir-vue-chat-6682a.firebaseio.com",
    projectId: "fir-vue-chat-6682a",
    storageBucket: "fir-vue-chat-6682a.appspot.com",
    messagingSenderId: "1053944659321"
  };
  firebase.initializeApp(config);

var db = firebase.firestore();

window.db= db;

db.settings({
	timestampsInSnapshots: true
});




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
