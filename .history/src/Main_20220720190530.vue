<template>
  <div class="main container">
    <h1 class="main-title">Experienced & Multi-Talented</h1>
    <hr class="spacer" />
    <div class="main-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem
      facere beatae atque reprehenderit voluptas, cupiditate laborum distinctio
      architecto dignissimos odit alias neque deserunt quia?
    </div>
    <div class="cards-container">
      <card
        v-for="(card, index) in numberOfCards"
        :key="index"
        title="block"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "./components/card.vue";
import CardsData from "./dummy/cardsData";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      numberOfCards: 8,
    };
  },
};
</script>
<style>
@font-face {
  font-family: "Gotham-Bold";
  src: url("./assets/fonts/Gotham-Bold.ttf");
}
@font-face {
  font-family: "ProximaNova-Regular";
  src: url("./assets/fonts/ProximaNova-Regular.ttf");
}
</style>
<style lang="scss" scoped>
.main {
  padding: 5rem 2rem;
  background-color: rgb(46, 45, 45);
}
.main-title {
  color: white;
  text-align: center;
  font-family: "Gotham-Bold";
  font-size: 2rem;
}
.spacer {
  border-top: solid white;
  width: 3rem;
}
.main-content {
  color: gray;
  text-align: center;
  margin: 1rem 2rem;
  font-family: "ProximaNova-Regular";
  font-size: 1rem;
  width: 50rem;
  margin: 2rem auto;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  row-gap: 4rem;
  justify-content: center;
}
</style>
