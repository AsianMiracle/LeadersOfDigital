import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../components/Signin.vue'
import Main from '../components/Main.vue'
import Com2010 from '../components/2010.vue'
import Com2011 from '../components/2011.vue'
import Com2012 from '../components/2012.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/1',
    name: 'Com2010',
    component: Com2010
  },

  
  {
    path: '/2',
    name: 'Com2011',
    component: Com2011
  },

  
  {
    path: '/3',
    name: 'Com2012',
    component: Com2012
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

