<template>
  <div>
    <v-container>
      <v-col>
        <h1>
          {{title}}
        </h1>
        <h3>
          {{keyToSuccess}}
        </h3>
      </v-col>
      <v-col>
        <MuscleGroup v-for="(muscle, i) in muscleGroups" :key="i" :muscle="muscle"/>
      </v-col>  
    </v-container>
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

<style scoped>

</style>