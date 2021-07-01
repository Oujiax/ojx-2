<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goBack">后退</button>
    <button @click="goTwo">后退两个页面</button>
    <button @click="goHome">跳转到首页</button>
    <button @click="goAdd">跳转到参数页面</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack(){
      this.$router.back()
    },
    goTwo(){
      this.$router.go(-2)
    },
    goHome(){
      this.$router.push('/')
    },
    goAdd(){
      this.$router.push({
        path:'/user',
        query:{
          id:1005,
          name:'wangwu'
        }
      })
    }
  },
}
</script>