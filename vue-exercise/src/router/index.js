import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Fe from '../views/Fe.vue'
import Rd from '../views/Rd.vue'
import User from '../views/User.vue'
import Details from '../views/Details'
import Error from '../views/Error'
import Test from '../views/Test'
import Count from '../views/Count'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    /* 如果没有重定向的test页面，可以把已有的页面起别名 */
    alias:'/aaa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
    children: [
      {
        path: 'fe',
        component: Fe
      },
      {
        path: 'rd',
        component: Rd
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/details/:id/:price',
    name: 'Details',
    component: Details
  },
  {
    path: '/test',
    // path: '/test/:id/:price',
    name: 'Test',
    component: Test,
    // redirect: '/'
    // redirect: '/details/:id/:price'
    beforeEnter: (to, from, next) => {
      console.log('to',to);
      console.log('from',from);
      console.log('next',next);
      next()
    }
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

/* 
  mode:
    history:/  依赖HTML5 history api和服务器配置
    hash:# 使用URL hash值做路由，支持所有浏览器，包括不支持html5 history api的浏览器
*/
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
