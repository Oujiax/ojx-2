<template>
  <div>
    <h1>课程分类</h1>
    <router-link to="/course/fe">前端</router-link> |
    <router-link to="/course/rd">后端</router-link>
    <p>count: {{$store.state.count}}</p>
    <!-- 过渡动画 -->
    <transition name="bounce"  mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    this.axios.get('/api/list',res => {
      console.log(res);
    })
  },
};
</script>

<style lang="scss" scoped>
  .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>