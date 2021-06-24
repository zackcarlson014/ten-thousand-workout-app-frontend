<template>
  <div>
    <h1>
      {{title}}
    </h1>
    <h3>
      {{keyToSuccess}}
    </h3>
    <MuscleGroup v-for="(muscle, i) in muscleGroups" :key="i" :muscle="muscle"/>
  </div>
</template>

<script>

import MuscleGroup from './MuscleGroup.vue'

export default {
  name: "Dashboard",
  components: {
    MuscleGroup
  },
  data: () => ({
    title: 'Ten Thousand Reps',
    keyToSuccess: 'You gotta want it!',
    muscleGroups: [
      'Legs',
      'Back',
      'Shoulders',
      'Chest',
      'Core',
      'Arms',
    ]
  })
}
</script>

<style>

</style>