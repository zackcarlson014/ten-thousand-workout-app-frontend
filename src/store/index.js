import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
// import mutations from './mutations.js'
// import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    muscleGroups: [],
    exercises: [],
  },
  getters: {
    
  },
  mutations: {
    setMuscleGroups (state, muscleGroups) {
      console.log(muscleGroups.data)
      return state.muscleGroups = muscleGroups.data
    }
  },
  actions: {
    fetchMuscleGroups (store) {
      axios
        .get('http://localhost:3000/api/v1/muscle_groups')
        .then(response => {
          store.commit('setMuscleGroups', response)
          return store.state.muscleGroups
        })
    }

  
  }
  // actions: {
  //   fetchMuscleGroups: () => {
  //     return fetch('http://localhost:3000/api/v1/muscle_groups')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       return this.state.muscleGroups = data
  //     })
  //   }
  // },
})
