<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import firebase from 'firebase'
import Router from 'vue-router'

export default {
  name: 'Home',
  data(){
    return{
      name: '',
      surname:''
    }
  },
  components: {
    Header, Footer
  },
  beforeRouteEnter(to,from,next){
    next(vm=>{
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          next();
        }else{
          vm.$router.push('/login')
        }
      })
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.back_blue{
  background-color: #9999FF
}
</style>
