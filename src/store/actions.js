import axios from 'axios';

const fetchMuscleGroups = (store) => {
  axios
    .get('http://localhost:3000/api/v1/muscle_groups')
    .then(response => {
      store.commit('setMuscleGroups', response)
      return store.state.muscleGroups
    })
}

export default {
  fetchMuscleGroups
}