<template>
  <v-app>
    <app-bar />

    <nav-drawer />

    <default-view />
  </v-app>
</template>

<script>
import NavDrawer from './NavDrawer'
import AppBar from './AppBar'
import DefaultView from './View.vue'


export default {
  components: {
    AppBar,
    NavDrawer,
    DefaultView
  },
  data: () => ({
  }),

}
</script>

<style>

</style>
