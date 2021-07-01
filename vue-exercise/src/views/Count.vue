<template>
  <div>
      <h1>vuex</h1>
      <p>count: {{$store.state.count}}</p>
      <p>count: {{count}}</p>
      <p>result: {{result}}</p>
      <!-- <button @click="addNum">+1</button>
      <button @click="add(5)">+5</button> -->

      <button @click="add">+1</button>
      <button @click="addFun(5)">+5</button>
      <button @click="reduceFun">-1</button>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
export default {
  computed: {
    // 对state进行映射
    ...mapState(["count"]),
    // 对getters进行映射
    ...mapGetters(["result"])
  },
  methods: {
    // 对mutations进行映射
    ...mapMutations(["add","addFun"]),
    // 对actions进行映射
    ...mapActions(["reduceFun"])

    // addNum(){
    //   this.$store.commit("add")
    // },
    // add(num){
    //   this.$store.commit("addFun",num)
    // }
  },
};
</script>

<style>

</style>