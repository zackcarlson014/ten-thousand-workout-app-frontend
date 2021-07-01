<template>
  <v-app>
    <div>
      <Dashboard :muscleGroups="muscleGroups"/>
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    Dashboard
  },
  created () {
    this.$store
      .dispatch('fetchMuscleGroups')
  },
  computed: {
    ...mapState({
      muscleGroups: state => state.muscleGroups
    })
  }
}
</script>
