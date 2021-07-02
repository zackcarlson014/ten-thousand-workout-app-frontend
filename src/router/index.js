import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MuscleGroups from '../views/MuscleGroups.vue'
import Exercises from '../views/Exercises.vue'
import Profile from '../views/Profile.vue'
import Exercise from '../components/Exercise.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/muscle-groups',
    name: 'MuscleGroups',
    component: MuscleGroups
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/exercise/:id',
    name: 'Exercise',
    component: Exercise
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
