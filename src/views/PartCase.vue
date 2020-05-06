<template lang="html">
  <div class="back_blue uk-animation-toggle" tabindex="0">
    <div id="nav">
      <Header/>
    </div>
    <div class="back_blue " style="height:auto">
      <div class="container ">
        <div class="row">
          <div class="col-sm-7 bg-white p-4 rounded mt-5" id="left">
            <h2 style="font-family:monospace">Кейс</h2>
            <hr >
            <h3>{{ cases[runRanNum].title }}</h3>
            <p class="h4">{{cases[runRanNum].about}}</p>
            <hr class="uk-divider-icon">
            <p class="h5">Награда: +{{cases[runRanNum].reward}} к {{cases[runRanNum].softSkill}}</p>
          </div>

          <div class="col bg-white p-4 rounded mt-5 ml-5" id="right">
            <h2 style="font-family:monospace">Собеседник</h2>
            <hr >
            <h3
             >{{sobes[runRanSob].name}} {{sobes[runRanSob].surname}}</h3>
             <h5 class="mt-2">{{sobes[runRanSob].age}} лет</h5>
            <h4 class=" uk-text-bold mt-2">Интересы:</h4>
             <ul class="uk-list text-left"
             v-for="interest of sobes[runRanSob].interests ">
               <li class="h5 mt-5">{{interest}}</li></ul>
          </div>
        </div>
        <div class="">
          <a @click="toCase"
           class=" btn_color rounded-pill btn text-white  p-4 mt-3"
            style="font-size:35px;width:45%">Готов</a>
        </div>

      </div>
    </div>
    <Footer class=""/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import firebase from "firebase"
export default {
  name: 'PartCase',
  data(){
    return{
      interest:null,
      cases:[],
      sobes:[],
      authUser:{},
      ranNumSob:0,
      ranNumCase: 0,

    }
  },
  methods:{
    fetchCases(){
      db.collection('cases').onSnapshot((querySanpshot)=>{
        let cases=[]
        querySanpshot.forEach(doc=>{
          cases.push(doc.data())
        })

        this.cases = cases
        console.log(this.cases)
      });
    },
    fetchSobes(){
      db.collection('users').onSnapshot((querySanpshot)=>{
        let users=[]
        querySanpshot.forEach(doc=>{
          if(doc.data().email != this.authUser.email){
            users.push(doc.data())
          }


        })

        this.sobes = users
        console.log(this.sobes)

      });
    },
    toCase(){
      document.getElementById('left').classList.add('uk-animation-slide-left')
      document.getElementById('left').classList.add('uk-animation-reverse')
      document.getElementById('right').classList.add('uk-animation-slide-right')
      document.getElementById('right').classList.add('uk-animation-reverse')

      setTimeout(()=>{
        this.$router.push('/case-chat')
      },350)
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

    this.fetchCases()
    this.fetchSobes()
  },
  computed:{
    runRanNum(){
      this.ranNumCase = Math.floor(Math.random() * this.cases.length)
      console.log(this.ranNumCase)
      console.log(this.cases.length)
      return this.ranNumCase
    },
    runRanSob(){
      this.ranNumSob = Math.floor(Math.random() * this.sobes.length)
      return this.ranNumSob
    }
  },
  components:{
    Header,Footer
  }
}
</script>

<style lang="css" scoped>
#nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background-color: #9999FF
}
.btn_color{
  background-color:#A4EDBF
}
</style>
