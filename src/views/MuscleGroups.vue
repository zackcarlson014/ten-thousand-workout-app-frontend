<template>
  <v-container>
    <v-row >
      <v-col 
        v-for="(muscle, i) in  muscleGroups" 
        :key="i"
        cols="12"
      >
        <MuscleGroupViewCard 
          :muscle="muscle.name"
          :exercises="muscle.exercises"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import MuscleGroupViewCard from '@/components/MuscleGroupsViewCard.vue'
import { mapState } from 'vuex';

export default {
  name: 'MuscleGroups',
  components: {
    MuscleGroupViewCard,
  },
  computed: {
    ...mapState({
      muscleGroups: state => state.muscleGroups
    })
  }
}
</script>