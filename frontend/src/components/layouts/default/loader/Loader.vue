<template>
  <v-overlay :value="overlay">
    <v-progress-circular
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'Loader',
  data: () => ({
    overlay: false,
  }),

  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    },
  },

}
</script>

<style>

</style>
