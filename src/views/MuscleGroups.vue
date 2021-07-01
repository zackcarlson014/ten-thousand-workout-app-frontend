<template>
  <div>
    <v-row>
      <h1 v-for="(muscle, i) in  muscleGroups" :key="i">{{muscle.name}}</h1>
    </v-row>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'MuscleGroups',
  computed: {
    ...mapState({
      muscleGroups: state => state.muscleGroups
    })
  }
}
</script>