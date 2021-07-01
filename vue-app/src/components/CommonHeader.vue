<template>
  <header id="header" :style="{backgroundColor: curMenu.bgColor}">
    <span class="home" @click="goHome">首页</span>
    {{curMenu.name}}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      this.$router.push("/");
      this.setCurMenu({
        name: "剧集",
        bgColor: "#6699ff",
        });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  color: #fff;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: red;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  .home {
    position: absolute;
    left: 0;
    padding-left: 5px;
  }
}
</style>
