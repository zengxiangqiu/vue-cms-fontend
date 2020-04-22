import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)

const host = 'http://localhost:3000/api/entrys'

export default new Vuex.Store({
  state: {
    entries: [],
    entry: {},
    pagination: {}
  },
  mutations: {
    SET_ARTICLES: (state, articles) => {
      state.articles = articles
    },
    SET_ARTICLE: (state, article) => {
      state.article = article
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories
    },
    SET_PAGINATION: (state, pagination) => {
      state.pagination = pagination
    }
  },
  actions: {
    FETCH_ARTICLES: ({ commit }, qJson) => {
      // commit('SET_ARTICLES', )
      const query = qs.stringify(qJson)
      axios.get(new URL(`/articles?${query}`, host)).then((res) => {
        commit('SET_ARTICLES', res.data.data)
        commit('SET_PAGINATION', res.data.pagination)
      })
    },
    FETCH_ARTICLE_EDIT: ({ commit }, { id, callback }) => {
      axios.get(new URL(`/articles/${id}/raw`, host)).then((res) => {
        console.debug(res.data.article)
        commit('SET_ARTICLE', res.data.article)
        callback(res.data.article)
      })
    },
    FETCH_CATEGORIES: ({ commit }) => {
      axios.get(new URL('/articles/categories', host)).then((res) => {
        console.debug(res.data)
        commit('SET_CATEGORIES', res.data)
      })
    },
    SET_ARTICLE: ({ commit }, { article, callback }) => {
      axios.put(new URL(`/articles/${article.id}`, host), article).then(res => {
        callback()
      })
    }
  },
  modules: {
  }
})
