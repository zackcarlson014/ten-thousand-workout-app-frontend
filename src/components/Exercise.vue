<template>
  <div>
    <img :src="exercise" alt=""/>
  </div>
</template>

<script>

export default {
  name: 'Exercise',
  props: {
    exercise: String
  }
}
</script>

<style scoped>

</style>