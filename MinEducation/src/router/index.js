import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../components/Signin.vue'
import Main from '../components/Main.vue'


import VueApexCharts from 'vue-apexcharts'



Vue.component('apexchart', VueApexCharts)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

