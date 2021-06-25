const setMuscleGroups = (state, muscleGroups) => {
  console.log(muscleGroups.data)
  return state.muscleGroups = muscleGroups.data
}

export default {
  setMuscleGroups,
}