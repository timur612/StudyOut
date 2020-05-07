<template>
  <div class="home">
    <div id="nav">
      <Header/>
    </div>
    <MainLink/>
    <SoftCards class="position-absolute" style="top:40%;left:6.5%"/>
    <div class="container text-center" style="margin-top:13%;margin-bottom:10%">
      <h1 class="text-bold">Прокачай свои Soft Skills!</h1>
      <p class=" h4 mt-3">Общайся и получай гибкие навыки</p>
      <RecomendDivs class="mt-5"/>
    </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MainLink from "@/components/MainLink"
import SoftCards from "@/components/SoftCards"
import RecomendDivs from "@/components/RecomendDivs"

export default {
  name: 'Home',
  data(){
    return{
      authUser:{}
    }
  },
  components: {
    Header, Footer, MainLink,SoftCards,RecomendDivs
  },
  methods:{
    setUserOnline(){
      db.collection('users').onSnapshot((querySanpshot)=>{
        querySanpshot.forEach(doc => {
          if(doc.data().email == this.authUser.email){
            db.collection('users').doc(this.authUser.email).update({
              online:true
            })
          }
        });

      })
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
    this.setUserOnline()
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
