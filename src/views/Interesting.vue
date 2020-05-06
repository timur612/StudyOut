<template lang="html">
  <div class="back_blue uk-animation-toggle" style="height:800px;width:auto;padding-top:7%" tabindex="0">
    <h1 class="text-white text-center" >Выберите свои интересы</h1>
    <div class="container" style="margin-top:9%">
      <div class="row">
        <div class="col-sm-6">
          <div class="p-3 rounded-pill bg-white" id="game" v-on:click="addGame">
            <p class="h5" id="games">Игры</p>
          </div>
          <div class="p-3 rounded-pill bg-white" style="margin-top:15%" v-on:click="addMusic">
            <p class="h5" id="music">Музыка</p>
          </div>
        </div>
        <div class="col-sm-6" >
          <div class="p-3 rounded-pill bg-white" v-on:click="addDrawing">
            <p class="h5" id="draw">Живопись</p>
          </div>
          <div class="p-3 rounded-pill bg-white" style="margin-top:15%" v-on:click="addDancing">
            <p class="h5" id="dance">Танцы</p>
          </div>
        </div>
      </div>
      <div class="mt-4 float-right">
        <button class="btn btn-primary"
         @click="toMain"
         type="button" name="button">Готово</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      interests: []
    }
  },
  methods:{
    toMain(){
      this.$router.push('/')
    },
    addGame(){
        this.interests.push(document.getElementById("games").innerHTML)
        console.log(this.interests)
    },
    addMusic(){
      this.interests.push(document.getElementById("music").innerHTML)
      console.log(this.interests)
    },
    addDrawing(){
      this.interests.push(document.getElementById("draw").innerHTML)
      console.log(this.interests)
    },
    addDancing(){
      this.interests.push(document.getElementById("dance").innerHTML)
      console.log(this.interests)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
