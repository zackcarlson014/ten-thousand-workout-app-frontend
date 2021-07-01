<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        {{muscle}}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-for v-for="(exercise, i) in exercises" :key="i"> 
      <MuscleGroupsViewExerciseCard :exercise="exercise"/>
    </v-for>

      

  </v-card>
</template>

<script>

import MuscleGroupsViewExerciseCard from './MuscleGroupsViewExerciseCard'


export default {
  name: 'MuscleGroupsViewCard',
  components: {
    MuscleGroupsViewExerciseCard
  },
  props: {
    muscle: String,
    exercises: Array
  }
}
</script>

<style>

</style>