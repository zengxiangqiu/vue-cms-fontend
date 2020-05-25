import EntryList from "../views/EntryList.vue";
const Entry = () => import("../views/Entry.vue");
const Search = () => import('../views/Search.vue');
const Aside = () => import('../components/Aside.vue');

const routes = [{
    path: "/",
    name: 'home',
    components: {
      default: EntryList,
      aside: Aside
    },
    children: [
      {
        path: 'tag/:tag',
        children: [{
          path: 'page/:page'
        }]
      }, 
      {
        path: 'category/:category',
        name:'category',
        children: [{
          path: 'page/:page'
        }]
      },
      {
        path: 'page/:page',
      }
    ]
  }, {
    path: "/search",
    component: Search
  },
  {
    path: "/:id([0-9]*)",
    name:'entry',
    components: {
      default: Entry,
      aside: Aside
    }
  }, 
  {
    path: "*",
    redirect: '/',
    name:'error',
    components: {
      default: EntryList,
      aside: Aside
    }
  }
]

export default routes;