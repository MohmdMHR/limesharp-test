<template>
  <div class="card container">
    <div class="card-banner-img">i</div>
    <div class="card-content">
      <h1 class="card-content-title">{{ title }}</h1>
      <p class="card-content-text" :class="{ collapsed: collapsed }">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste et ullam
        voluptatibus a molestiae deleniti necessitatibus dolor.
      </p>
      <div
        class="card-btn"
        :class="{ toggled: collapsed }"
        @click="collapse()"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  data() {
    return {
      collapsed: false,
    };
  },
  props: {
    title: {
      type: String,
      Default: "Block",
    },
  },
  methods: {
    collapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 0.5rem;
  position: relative;
  margin: 0.5rem;
}
.card-banner-img {
  overflow: hidden;
  background-color: gray;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 6rem;
  font-weight: bold;
  font-style: italic;
  font-size: 5rem;
}
.card-content {
  background: black;
  padding: 1rem 2rem;
}
.card-content-title {
  color: white;
  text-transform: uppercase;
  text-align: center;

  font-size: 1.5rem;
}
.card-content-text {
  color: gray;
  text-align: center;
  height: 3rem;
  overflow: hidden;
  margin: 1rem;
  font-family: "proxima-nova", sans-serif;
  font-size: 1.2rem;
  &.collapsed {
    height: 100%;
    z-index: 1;
  }
}
.card-btn {
  margin: 1rem auto;
  cursor: pointer;
  height: 2rem;
  position: relative;
  width: 2rem;
  &:before,
  &:after {
    background: white;
    content: "";
    height: 0.5rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 2rem;
    transition: transform 500ms ease;
  }
  &:after {
    transform-origin: center;
  }
  &.toggled {
    &:after {
      transform: rotate(90deg);
    }
    &:before {
      transform: rotate(180deg);
    }
  }
}
</style>
