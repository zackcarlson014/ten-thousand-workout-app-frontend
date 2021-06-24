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
        <MuscleGroup v-for="(muscle, i) in muscleGroups" :key="i" :muscle="muscle.name" :exercises="muscle.exercises"/>
      </v-col>  
    </v-container>
  </div>
</template>

<script>

import MuscleGroup from './MuscleGroup.vue'

export default {
  name: "Dashboard",
  components: {
    MuscleGroup
  },
  data: () => ({
    title: 'Ten Thousand Reps',
    keyToSuccess: 'You gotta want it!',
    muscleGroups: [
      {
        name: 'Legs',
        exercises: [
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
        ],
      },
      {
        name: 'Back',
        exercises: [
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
        ],
      },
      {
        name: 'Shoulders',
        exercises: [
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
        ],
      },
      {
        name: 'Chest',
        exercises: [
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
        ],
      },
      {
        name: 'Core',
        exercises: [
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
        ],
      },
      {
        name: 'Arms',
        exercises: [
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
          "https://thumbs.dreamstime.com/b/body-stretch-fit-man-stretching-back-doing-yoga-workout-gym-black-male-athlete-doing-back-extension-stretch-exercise-lying-157467114.jpg",
        ]
      },
    ]
  })
}
</script>

<style scoped>

</style>