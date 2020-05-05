import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

require("firebase/firestore");

var firebaseConfig = {
   apiKey: "AIzaSyC_Foy3tflpkdUHQjymsyoIUi188xBeQLw",
   authDomain: "mpit2020.firebaseapp.com",
   databaseURL: "https://mpit2020.firebaseio.com",
   projectId: "mpit2020",
   storageBucket: "mpit2020.appspot.com",
   messagingSenderId: "701239825930",
   appId: "1:701239825930:web:db2b77068f0f7ffc2db1f3",
   measurementId: "G-V79XSS069S"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
  var db = firebase.firestore();

  window.db=db;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
