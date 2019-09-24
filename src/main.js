// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Portfolio from './components/body/Portfolio'
import Api from './components/body/Api'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Portfolio },
  { path: '/Api', component: Api }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  router, // short for `router: router`
  el: '#app',
  components: { App },
  template: '<App/>'
})
