<template>
  <div>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu">
            <h1>{{muscle}}</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-row>
                <v-col v-for="(exercise, i) in exercises" :key="i" cols="12" sm="3">
                  <DashboardExerciseTile :exercise="exercise"/>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>

import DashboardExerciseTile from './DashboardExerciseTile.vue'

export default {
  name: 'MuscleGroupDashboardDropdown',
  components: {
    DashboardExerciseTile
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