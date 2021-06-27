<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="exercise.image ? exercise.image : 'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
      :key="exercise.id"
    ></v-img>

    <v-card-title>{{exercise.name}}</v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        class="d-flex justify-center"
        color="purple"
        text
        @click="reserve"
      >
        Start Set
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'DashboardExerciseTile',
  props: {
    exercise: String
  }
}
</script>

<style scoped>

</style>