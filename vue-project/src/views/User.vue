<template>
    <div>
        <h1>用户详情</h1>
        <p>用户名：{{$route.params.name}}</p>
        <p>用户id：{{$route.params.id}}</p>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            // params:this.$route.query,
            params:this.$route.params,
            
            
        }
    },
}
</script>