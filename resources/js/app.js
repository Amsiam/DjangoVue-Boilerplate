import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
Vue.use(VueRouter)

Vue.component('App', require('./src/App.vue').default)
const router = new VueRouter({
    routes,
    mode:"history"
  })

let vue = new Vue({
  router
}).$mount('#app')