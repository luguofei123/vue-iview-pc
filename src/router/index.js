import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: resolve => require(['@/views/Login'], resolve)
  },
  {
    path: '/step',
    name: 'step',
    component: resolve => require(['@/views/Step'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
