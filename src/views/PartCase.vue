<template lang="html">
  <div class="">
    <div id="nav">
      <Header/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'PartCase',
  data(){
    return{
      
    }
  },
  component:{
    Header,Footer
  }
}
</script>

<style lang="css" scoped>

</style>
