<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/course">Course</router-link> |
      <!-- 
        路由传参
          path + query: 刷新页面时，参数【不会】丢失，地址栏【可以】看到参数
          name + params: 刷新页面时，参数【会】丢失，地址栏【不可以】看到参数
          url + params: 刷新页面时，参数【不会】丢失，地址栏【可以】看到参数
       -->
      <router-link :to="{ path:'/user', query:{ name:'lisi', id:1001} }">User</router-link> |
      <!-- <router-link :to="{ name:'User', params:{ name:'lisi', id:1001} }">User</router-link> -->
      <router-link to="/details/201/14500">Details</router-link> |
      <router-link to="/test">Test</router-link> |
      <!-- <router-link to="/test/203/5310">Test</router-link> -->
      <router-link to="/count">Vuex</router-link>

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
