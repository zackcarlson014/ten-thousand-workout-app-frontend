import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    muscleGroups: [],
    exercises: [],
  },
  modules,
  mutations,
  actions,
})
