import Home from '@/components/HelloWorld.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/views/homepage')
  },
  {
    path: '/',
    name: '404',
    component: () => import('@/views/404')
  }
]
export default new Router({
  routes: routers
})
