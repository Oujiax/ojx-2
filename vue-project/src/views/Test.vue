<template>
    <div>
        <h1>测试页面</h1>
        <button @click="goBack">后退</button>
    </div>
</template>
<script>
export default {
    methods: {
        goBack(){
            this.$router.back();
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('to',to);
        console.log('from',from);
        console.log('next',next);
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('to',to);
        console.log('from',from);
        console.log('next',next);
        next();
    }
}
</script>