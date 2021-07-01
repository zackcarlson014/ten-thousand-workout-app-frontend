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
        <v-row justify="center">
          <v-expansion-panels 
            v-for="(muscle, i) in muscleGroups" 
            :key="i" 
            accordion
          >
            <DashboardMuscleGroupDropdown 
              :muscle="muscle.name" 
              :exercises="muscle.exercises"
            />
          </v-expansion-panels>
        </v-row>
      </v-col>  
    </v-container>
  </div>
</template>

<script>

import DashboardMuscleGroupDropdown from './DashboardMuscleGroupDropdown.vue'

export default {
  name: "Dashboard",
  components: {
    DashboardMuscleGroupDropdown
  },
  props: {
    muscleGroups: Array
  },
  data: () => ({
    title: 'Ten Thousand Reps',
    keyToSuccess: 'You gotta want it!',
  }),
}
</script>

<style scoped>

</style>