<template>
    <div>
        <h1>课程分类</h1>
        <router-link to="/course/fe">前端</router-link> |
        <router-link to="/course/rd">后端</router-link>
        <p>count:{{$store.state.count}}</p>
        <router-view></router-view>
    </div>
</template>