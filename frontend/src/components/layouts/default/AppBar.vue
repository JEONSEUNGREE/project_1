<template>
  <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  computed: {
    drawer: {
      get () {
        return this.$store.getters['drawer/getDrawer']
      },
      set (value) {
        return this.$store.commit('drawer/setDrawer', value)
      }
    }
  }
}
</script>

<style>

</style>
