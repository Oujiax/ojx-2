<template>
  <div>
      <h1>用户详情</h1>
      <p>用户名：{{query.name}}</p>
      <p>用户id：{{query.id}}</p>

      <!-- <p>用户名：{{params.name}}</p>
      <p>用户id：{{params.id}}</p> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            query:this.$route.query,
            // params:this.$route.params
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('to',to);
        console.log('from',from);
        console.log('next',next);
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('to',to);
        console.log('from',from);
        console.log('next',next);
        next()

    }
}
</script>

<style lang="scss" scoped>

</style>