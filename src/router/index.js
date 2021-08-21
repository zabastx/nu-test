import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const path = require('path')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layers',
    name: 'Layers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "layers" */ '../views/Layers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: path.resolve('/', 'nu-test', 'dist'),
  routes
})

export default router
