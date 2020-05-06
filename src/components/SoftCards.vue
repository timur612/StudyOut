<template lang="html">
  <div class="">
    <div class="row">
    <div class="col-sm-3">
      <div class="card cardBack hoverable p-2 uk-animation-toggle" style="width: 18rem;">
        <img src="@/assets/comm_icon.png" class="card-img-top mx-auto" alt="" style="height:auto;width:50%">
        <div class="card-body">
          <h5 class="card-title">Коммуникации</h5>
          <p  class="card-text">Онлайн: 2</p>
          <router-link
          to="/case"

          class="btn text-white button_take_p uk-animation-slide-bottom dispN">Участвовать</router-link>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card cardBack hoverable p-2 uk-animation-toggle" style="width: 18rem;" tabindex="0">
        <img src="@/assets/networking_icon.png" class="card-img-top mx-auto" alt="" style="height:auto;width:50%">
        <div class="card-body">
          <h5 class="card-title">Нетворкинг</h5>
          <p class="card-text">Онлайн: 3</p>
          <a href="#" class="btn disabled text-muted text-white button_take_p uk-animation-slide-bottom dispN">Участвовать</a>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card cardBack hoverable p-2 uk-animation-toggle" style="width: 18rem;" tabindex="0">
        <img src="@/assets/rel_icon.png" class="card-img-top mx-auto" alt="" style="height:auto;width:50%">
        <div class="card-body">
          <h5 class="card-title">Самоконтроль</h5>
          <p class="card-text">Онлайн: 0</p>
          <a href="#" class="btn disabled text-muted text-white button_take_p uk-animation-slide-bottom dispN">Участвовать</a>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card cardBack hoverable p-2 uk-animation-toggle" style="width: 18rem;" tabindex="0">
        <img src="@/assets/tm_icon.png" class="card-img-top mx-auto" alt="" style="height:auto;width:50%">
        <div class="card-body">
          <h5 class="card-title">Тайм менеджемент</h5>
          <p class="card-text">Онлайн: 6</p>
          <a href="#" class="btn disabled text-muted text-white button_take_p uk-animation-slide-bottom dispN">Участвовать</a>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import Router from 'vue-router'

export default {
  data(){
    return{

    }
  },
  methods:{
    takePart(){
      this.$router.push('/case')
    },
  },
}
</script>


<script>
$(document).ready(function() {
  $( ".card" ).hover(
    function() {
      $(this).addClass('shadow-lg');

    }, function() {
      $(this).removeClass('shadow-lg');

    }
  );
  $(".btn").hover(
    function(){
      $(this).removeClass('dispN');
    }, function(){
      $(this).addClass('dispN');
    }
  );
});
</script>

<style lang="css" scoped>
  .cardBack{
    background-color: #A4EDBF;
  }
  .button_take_p{
    font-family: monospace;
    background-color: #FF8989;
  }
  .dispN{
    opacity: 0;
  }
</style>
