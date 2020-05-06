import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false

import EntryList from "./components/EntryList.vue";
import Entry from "./components/Entry.vue";
const Search = ()=>import('./components/Search.vue');
import Paginate from 'vuejs-paginate'
const Aside = ()=>import('./components/Aside.vue');
Vue.component('paginate', Paginate)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/error.png',
  loading: '/loading.gif',
  attempt: 1
})

import store from './store'

const routes = [{
  path: "/",
  components: {default:EntryList, aside: Aside},
  children: [{
    path: 'tag/:tag',
    children: [{
      path: 'page/:page'
    }]
  }, {
    path: 'category/:category',
    children: [{
      path: 'page/:page'
    }]
  }, {
    path: 'page/:page',
  }]
}
,{
  path: "/search",
  component: Search 
},
{
  path: "/:id([0-9]*)",
  components: { default:Entry,aside: Aside}
} 
]

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