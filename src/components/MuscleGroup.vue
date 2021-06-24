<template>
  <div>
    <v-app-bar
      dense
    >
      {{muscle}}
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="text-right"></v-app-bar-nav-icon>
    </v-app-bar><br/>
  </div>
</template>

<script>

export default {
  props: {
    muscle: String
  }
}
</script>

<style scoped>

</style>