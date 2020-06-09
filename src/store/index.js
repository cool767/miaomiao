import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityId: window.localStorage.getItem('cityid') || 0,
    citynm: window.localStorage.getItem('citynm') || '北京'
  },
  mutations: {
    CityInfo(state,payload){
      state.cityId = payload.id
      state.citynm = payload.nm
    }
  },
  actions: {
  },
  modules: {
  }
})
