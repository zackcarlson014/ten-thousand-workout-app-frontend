<template>
  <div>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu">
            <h1>{{muscle}}</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <Exercise v-for="(exercise, i) in exercises" :key="i" :exercise="exercise"/>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>

import Exercise from './Exercise.vue'

export default {
  name: 'MuscleGroup',
  components: {
    Exercise
  },
  props: {
    muscle: String,
    exercises: Array
  },
  data: () => ({

  }),
}
</script>

<style scoped>

</style>