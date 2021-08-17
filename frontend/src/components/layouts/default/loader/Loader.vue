<template>
  <v-overlay
    v-if="loading.overlay"
    :value="overlay"
  >
    <v-progress-circular
      indeterminate
      size="70"
    />
  </v-overlay>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Loader',
  data: () => ({
    // overlay: false,
  }),
  computed: {
    ...mapState('loading', {
      loading: 'loading'
    }),
    overlay () {
      return this.endOverLay()
    },

  },
  methods: {
    endOverLay () {
      setTimeout(() => {
        this.$store.commit('loading/END_LOADING', '')
        // this.loading.overlay = false
      }, 1500)
    },
  },

}
</script>

<style>

</style>
