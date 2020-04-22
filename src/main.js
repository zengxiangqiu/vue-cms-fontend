import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false

import EntryList from "./components/EntryList.vue";
import Entry from "./components/Entry.vue";

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)


import store from './store'

const routes = [{
    path: "/",
    component: EntryList
  },
  {
    path: "/:id",
    component: Entry
  },
  {
    path:'/page/:page',
    component: EntryList
  }
]

var router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')