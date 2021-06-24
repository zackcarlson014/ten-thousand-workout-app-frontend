<template>
  <div>
    <h2>{{exercise.name}}</h2>
  </div>
</template>

<script>

export default {
  name: 'DashboardExerciseTile',
  props: {
    exercise: String
  }
}
</script>

<style scoped>

</style>