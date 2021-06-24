<template>
  <div>
    <img :src="exercise" alt="" width="200px"/>
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