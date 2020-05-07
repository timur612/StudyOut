<template lang="html">
  <div class="back_blue uk-animation-toggle" style="height:800px;width:auto" tabindex="0">
    <div class="row " id="anim">
      <div class="col-sm-3" style="margin-top:15%">
        <img class=" " style="" src="@/assets/MainIcon.png" alt="" height="300" width="300">
      </div>
      <div class="col-sm-3" style="margin-top:20%;">
          <h1 class="text-white display-3" style="" data-aos="fade-down">Study Out</h1>
      </div>
      <div class="col-sm-6" style="margin-top:13%">
        <div class="bg-white p-5 rounded-left " style="">
          <h2 class="">Вход</h2>
          <form class="text-left">
            <div class="form-group">

              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
              <small id="emailHelp" class="form-text text-muted">Укажите свою почту, которую использовали при регистрации</small>
            </div>
            <div class="form-group">

              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Пароль">
            </div>
            <button type="" class="btn btn_color text-white" v-on:click="login" style="">Войти</button>
            <button type="" class="btn btn_color text-white ml-2" @click="toReg">Нет аккаунта?</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'
import firebase from 'firebase'
export default {
  data(){
    return{

    }
  },
  methods:{
    login(){
      firebase.auth().signInWithEmailAndPassword(document.getElementById('exampleInputEmail1').value, document.getElementById('exampleInputPassword1').value).catch(error=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)


      }).then(()=>{
        document.getElementById('anim').classList.add('uk-animation-slide-top');
        document.getElementById('anim').classList.add('uk-animation-reverse');
        db.collection('users').onSnapshot((querySanpshot)=>{
          querySanpshot.forEach(doc => {
              if(doc.data().email == document.getElementById('exampleInputEmail1').value){
                db.collection('users').doc('tz220404@gmail.com').update({
                  online: true
                })
              }
          });

        })
        setTimeout(()=>{
          this.$router.push('/')
        },350);
      });

    },
    toReg(){
      this.$router.push('/registration')
    }

  }
}
</script>

<style lang="css" scoped>
.btn_color{
  background-color:#A4EDBF
}
</style>
