/* eslint-disable no-new */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './router/routers'
Vue.use(VueRouter)

// createApp(App).mount('#app')

// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes: routers
// })
// new Vue({
//   router: routers
// }).$mount('#app')
new Vue({
  el: '#app',
  router: routers,
  render: h => h(App)
})
