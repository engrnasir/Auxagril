<template>
  <div class="home">
    <main>
      <div class="hero-qoute" v-if="searchKey.length==0">
        <h1>The safety of the people shall be the highest law. </h1>
        <h3>– Marcus Tullius Cicero</h3>
      </div>
      <div class="cards">
        <div class="card" v-for="(card, index) in cards" :key="index" @click="$router.push('/quizstart')">
          <h3 class="title">{{card.title}}</h3>
          <p class="summary">{{card.summary}}</p>
        </div>
        <div class="empty" v-if="cards.length<=0">
          <h1>No Data availale</h1>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters, mapState } from 'vuex';
export default {
    name: "HomeView",
    components: { Navbar },
    computed:{
      ...mapState([
        'searchKey'
      ]),
      ...mapGetters([
        'cards'
      ])
    }
}
</script>
<style lang="scss" scoped>
  main{
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    .hero-qoute{
      max-width: 800px;
      font-weight: 700;
      font-size: 26px;
      line-height: 72px;
      letter-spacing: 0.01em;
      color: #000000;
      @media only screen and (max-width:780px){
        font-size: 20px;
        line-height: 50px;
        padding: 30px;
        
      }
    }
    .cards{
      padding: 50px 20px;
      .card{
        max-width: 800px;
        width: 100%;
        border-radius: 20px;
        background-color: #fff;
        padding: 15px 20px;
        margin-bottom: 20px;
      }
    }

  }
 

</style>
