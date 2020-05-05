<template>
  <div class="home">
    <MainLink/>
    <SoftCards class="position-absolute" style="top:40%;left:6.5%"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MainLink from "@/components/MainLink"
import SoftCards from "@/components/SoftCards"

export default {
  name: 'Home',
  components: {
    Header, Footer, MainLink,SoftCards
  }
}
</script>
