<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-for="(muscle, i) in  muscleGroups" :key="i">{{muscle.name}}</h1>
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