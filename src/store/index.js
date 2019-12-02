import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forecast: []
  },
  mutations: {
    setForecast (state, forecast) {
      state.forecast = forecast;
    }
  },
  actions: {
  },
  modules: {
  }
})
