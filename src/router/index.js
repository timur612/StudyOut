import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Interesting from '../views/Interesting.vue'
import PartCase from '../views/PartCase.vue'
import CaseChat from '../views/CaseChat.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Regist
  },
  {
    path: '/interesting',
    name: 'Interesting',
    component: Interesting
  },
  {
    path: '/case',
    name: 'Partipicient',
    component: PartCase
  },
  {
    path: '/case-chat',
    name: 'CaseChat',
    component: CaseChat
  },
]

const router = new VueRouter({
  routes
})

export default router
