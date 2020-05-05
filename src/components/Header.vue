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
      <ul class="navbar-nav">
        <li class="nav-item active">

          <router-link class="nav-link text-white" to="/" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about" >About</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .white_txt{
      color:white;
  }
</style>
