<template>
    <div>
        <h1>vuex</h1>
        <p>count:{{$store.state.count}}</p>
        <p>count:{{count}}</p>
        <p>result:{{result}}</p>
        <button @click="add">+1</button>
        <button @click="addFun(5)">+5</button>
        <button @click="reduceFun">-1</button>
    </div>
</template>
<script>
import { mapState,mapMutations,mapActions, mapGetters} from "vuex";
export default {
    computed: {
        ...mapState(['count']),
        ...mapGetters(['result'])
        
    },
    methods: {
        ...mapMutations(['add','addFun']),
        ...mapActions(['reduceFun']),

        // add(){
        //     this.$store.commit('add')
        // },
        // addFun(n){
        //     this.$store.commit('addFun',n)
        // }
        
    },
}
</script>