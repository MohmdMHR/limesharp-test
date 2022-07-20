<template>
  <div class="card container">
    <div class="card-banner-img">i</div>
    <h1 class="card-title">{{ title }}</h1>
    <p class="card-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste et ullam
      voluptatibus a molestiae deleniti necessitatibus dolor.
    </p>
    <div class="card-btn" :class="{ collapsed: collapsed }"></div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: {
    title: {
      type: String,
      Default: "Block",
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
