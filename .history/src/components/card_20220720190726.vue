<template>
  <div>
    <div class="card container">
      <div class="card-banner-img">i</div>
      <div class="card-content">
        <h1 class="card-content-title">{{ title }}</h1>
        <p class="card-content-text" :class="{ collapsed: collapsed }">
          {{ content }}
        </p>
        <div
          class="card-btn"
          :class="{ toggled: collapsed }"
          @click="collapse()"
        ></div>
      </div>
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
    content: {
      type: String,
      Default: "",
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
  border-radius: 0.5rem 0.5rem 0 0;
}
.card-content {
  background: black;
  padding: 1rem 2rem;
}
.card-content-title {
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-family: "Gotham-Bold";
  font-size: 1.5rem;
}
.card-content-text {
  color: gray;
  text-align: center;
  height: 2.5rem;
  overflow: hidden;
  margin: 1rem;
  font-family: "ProximaNova-Regular";
  font-size: 1.2rem;
  &.collapsed {
    height: 100%;
    z-index: 1;
  }
}
.card-btn {
  margin: 2rem auto 0;
  cursor: pointer;
  height: 2rem;
  position: relative;
  width: 2rem;
  background: #282626;
  border-radius: 50%;
  &:before,
  &:after {
    background: white;
    top: 1rem;
    left: 0.65rem;
    content: "";
    height: 0.1rem;
    position: absolute;
    width: 0.8rem;
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
