import Vue from 'vue'
import VueRouter from 'vue-router'
import Tv from '../views/Tv.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Chat from '../views/Chat.vue'
import TvDetails from '../views/TvDetails.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: '剧集', component: Tv },
    { path: '/music', name: '音乐', component: Music },
    { path: '/book', name: '书籍', component: Book },
    { path: '/chat', name: '聊天', component: Chat },
    { path: '/tvdetails/:id', name: '剧集详情', component: TvDetails },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
