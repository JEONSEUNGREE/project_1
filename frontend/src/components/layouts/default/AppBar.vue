<template>
  <v-app-bar
    app
    color="primary"
    dark
    flat
  >
    <v-app-bar-nav-icon
      app
      @click="drawer = !drawer"
    />
    <v-toolbar-title
      class="text-uppercase black--text"
    >
      <span
        class="font-weight-light"
      >Work
      </span>
      <span class="font-weight-bold">
        Space
      </span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      icon
      color="white"
      class="ml-1"
    >
      <v-icon>mdi-calendar-month</v-icon>
    </v-btn>
    <identity app />
  </v-app-bar>
</template>

<script>
import Identity from './Identity/Identity.vue'

export default {
  name: "AppBar",
  components: {
    Identity
  },
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
