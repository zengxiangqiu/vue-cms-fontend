import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/error.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

import store from './store'
import routes from './route'

var router = new VueRouter({
  mode: 'history',
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')