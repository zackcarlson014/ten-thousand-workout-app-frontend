<template>
  <div>
    <img :src="exercise" alt="" width="200px"/>
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