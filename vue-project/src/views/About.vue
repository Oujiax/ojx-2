<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goForward">前进</button>
    <button @click="goGo">后退两个页面</button>
    <button @click="goHome">返回首页</button>
  </div>
</template>
<script>
export default {
  methods: {
    goForward() {
      this.$router.forward();
    },
    goGo() {
      this.$router.go(-2);
    },
    // goHome(){
    //   this.$router.push('/');

    // },
    goHome() {
      this.$router.push({
        name: "User",
        params: {
          name:'wangwu',
          id:1005
        },
      });
    },
  },
};
</script>
