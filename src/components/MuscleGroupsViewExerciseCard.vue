<template>
  <v-containder>
    <v-row dense>
      <v-col cols="12">
        <v-card
          color="#385F73"
          dark
        >
          <v-card-title class="text-h5">
            {{exercise.name}}
          </v-card-title>

          <v-card-subtitle>
            Listen to your favorite artists and albums whenever and wherever, online and offline.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn                    
              class="ml-2 mt-5"
              outlined
              rounded
              small
            >
              Start Set
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-containder>
</template>

<script>
export default {
  name: 'MuscleGroupsViewExerciseCard',
  props: {
    exercise: Object
  }
}
</script>

<style>

</style>