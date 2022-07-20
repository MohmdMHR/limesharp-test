<template>
  <div class="main container">
    <h1 class="main-title">Experienced & multi-talented</h1>
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
<style scoped>
@font-face {
  font-family: <name_u_choose>;
  src: url("~@/assets/fonts/<static_font_file>.ttf");
}
</style>
<style lang="scss" scoped>
.main {
  padding: 15rem 2rem;
  background-color: rgb(46, 45, 45);
}
.main-title {
  color: white;
  text-align: center;
  font-size: 3rem;
}
.spacer {
  border-top: 3px solid white;
  width: 5rem;
}
.main-content {
  color: gray;
  text-align: center;
  margin: 1rem 2rem;
  font-size: 2rem;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  justify-content: center;
}
</style>
