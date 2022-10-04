<template>
  <Navbar/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import FooterComp from './components/Footer.vue';
export default {
  
  components:{
    Navbar,
    FooterComp,
}
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap');
*,*::after,*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  html{
    font-family: 'Poppins', sans-serif;
    background: #E8E8E8;
  }
</style>
