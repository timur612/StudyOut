<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light  back_blue">
    <a class="navbar-brand text-white" href="#">
      <img src="@/assets/MainIcon.png" width="60" height="60" alt="">
      StudyOut
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav justify-content-center">
        <li class="nav-item active">

          <router-link class="nav-link text-white" to="/">Главная</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about">Soft Skills</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">{{name}}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" @click="exit">Выход</a>
        </li>
        </ul>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
import Router from 'vue-router'
export default {
  data(){
    return{
      name:'',
      authUser:{},
    }
  },
  methods:{
    fetchUser(){
      db.collection('users').orderBy('createdAt').onSnapshot((querySanpshot)=>{
        querySanpshot.forEach(doc=>{
            if(doc.data().email==this.authUser.email){
                this.name = doc.data().name
            }
            this.$emit('take-name',this.name)
            console.log(doc.data().email)
            console.log(this.authUser.email)
        })
      })
    },
    exit(){
      firebase.auth().signOut().then(function() {
        db.collection('users').onSnapshot((querySanpshot)=>{
          querySanpshot.forEach(doc => {
              if(doc.data().email==this.authUser.email){
                
              }
          });

        })
        this.$router.push('/login')
      }).catch(function(error) {
        // An error happened.
      });
    }

  },
  created(){

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.authUser=user;
      }else{
        this.authUser={}
      }
    })

    this.fetchUser()
  },
}
</script>

<style lang="css" scoped>
  .white_txt{
      color:white;
  }
</style>
