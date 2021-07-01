<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/course">Course</router-link> |
      <!-- <router-link :to="{path:'/user', query:{id:1001,name:'lisi'}}">用户详情页</router-link> | -->
      <router-link :to="{name:'User', params:{id:1001,name:'lisi'}}">用户详情页</router-link> |
      <router-link to="/details/201/1600">课程详情页</router-link> |
      <!-- <router-link to="/test">测试页面</router-link> -->
      <router-link to="/test/301/1800">测试页面</router-link> |
      <router-link to="/Count">vuex</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
