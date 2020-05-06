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
          <div class="text-left">
            <button uk-icon="icon: reply; ratio: 1.5" @click="back"/>
          </div>

          <h2 class="">Регистрация</h2>
          <form class="text-left">
            <div class="row mb-3">
              <div class="col">
                <input type="text" class="form-control" id="exName" placeholder="Имя">
              </div>
              <div class="col">
                <input type="text" class="form-control" id="exSurname" placeholder="Фамилия">
              </div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" id="exAge" aria-describedby="emailHelp" placeholder="Возраст">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
            </div>
            <div class="form-group">

              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Пароль">
            </div>
            <button type="" class="btn btn_color text-white" v-on:click="registration" style="">Регистрация</button>

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
    back(){
      this.$router.push('/login')
    },
    registration(){
      firebase.auth().createUserWithEmailAndPassword(document.getElementById('exampleInputEmail1').value, document.getElementById('exampleInputPassword1').value).catch(error=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Ваш аккаунт существует!")
      }).then(()=>{
        db.collection('users').add({
          name:document.getElementById('exName').value,
          surname:document.getElementById('exSurname').value,
          email:document.getElementById('exampleInputEmail1').value,
          age:document.getElementById('exAge').value,
          interests:['Игры','Музыка'],
          createdAt:new Date()
        })
        this.$router.push('/');
      })
    },
  }
}
</script>

<style lang="css" scoped>
.btn_color{
  background-color:#A4EDBF
}
</style>
