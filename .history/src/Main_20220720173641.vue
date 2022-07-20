<template>
  <div class="container">
    <h1 class="main-title">Experienced & multi-talented</h1>
    <div class="spacer"></div>
    <div class="main-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem
      facere beatae atque reprehenderit voluptas, cupiditate laborum distinctio
      architecto dignissimos odit alias neque deserunt quia?
    </div>
    <div class="cards-container">
      <card
        v-for="(card, index) in numberOfCards"
        :key="index"
        :title="block"
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
};
</script>

<style lang="scss" scoped>
.main-title {
  color: #fff;
  text-align: center;
}
.spacer {
}
.main-content {
  color: gray;
  text-align: center;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 25rem);
  justify-content: center;
}
</style>
