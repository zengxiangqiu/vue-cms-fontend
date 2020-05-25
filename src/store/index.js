import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)

const host = process.env.VUE_APP_ROOT_API+'/entries'

export default new Vuex.Store({
  state: {
    entries: [],
    entry: {},
    pagination: {},
    customPosts: [],
    header: '',
    menu: [],
    tags: [],
    visiable : true
  },
  mutations: {
    SET_ARTICLES: (state, articles) => {
      state.entries = articles
    },
    SET_ARTICLE: (state, article) => {
      state.entry = article
    },
    SET_PAGINATION: (state, pagination) => {
      state.pagination = pagination
    },
    SET_CUSTOMPOSTS: (state, news)=>{
      state.customPosts = news;
    },
    SET_HEADER: (state, header) => {
      state.header = header
    },
    SET_MENU: (state, menu)=>{
      state.menu = menu;
    },
    SET_TAGS: (state, tags)=>{
      state.tags = tags;
    },
    SET_VISIABLE: (state, visiable)=>{
        state.visiable = visiable;
    }
  },
  actions: {
    FETCH_ARTICLES: ({ commit }, qJson) => {
      // commit('SET_ARTICLES', )
      commit('SET_VISIABLE',false);
      const query = qs.stringify(qJson)
      axios.get(new URL(`?${query}`, host)).then((res) => {
        if(qJson.s!=null)
        {
          commit('SET_HEADER',"Search Results for " + qJson.s);
        }
        else  
        {
          if(res.data.entries.length==0){
            commit('SET_HEADER','Nothing to be found');
          }
          else{
            commit('SET_HEADER',res.data.header);
          }
        }
        commit('SET_ARTICLES', res.data.entries)
        commit('SET_PAGINATION', res.data.pagination)
        // eslint-disable-next-line no-debugger
        commit('SET_VISIABLE',true);
      })
    },
    FETCH_ARTICLE: ({ commit }, id) => {
      commit('SET_VISIABLE',false);
      axios.get(host+`/${id}`).then((res) => {
        commit('SET_ARTICLE', res.data.entry);
        commit('SET_VISIABLE',true);
      })
    },
    FETCH_CUSTOMPOSTS:({commit})=>{
      axios.get(host+'/news').then(res=>{
        commit('SET_CUSTOMPOSTS',res.data.entries);
      });
    },
    FETCH_MENU: ({commit}) =>{
      axios.get(host+'/menu').then(res=>{
        commit('SET_MENU', res.data.menu);
      });
    },
    FETCH_TAGS: ({commit})=>{
      axios.get(host+'/tags').then(res=>{
        commit('SET_TAGS',res.data.tags);
      })
    }
  },
  modules: {
  }
})
