<template>
  <v-container>
    <board-title />

    <v-data-table
      :search="search"
      :headers="headers"
      :items="boards"
      :items-per-page="5"
      class="elevation-1 "
      height="400"
    >
      <template v-slot:top>
        <search-bar v-model="search" />
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import BoardTitle from './BoardTitle.vue'

import SearchBar from './SearchBar.vue'

export default {
  name: 'BoardIndex',
  components: {
    BoardTitle,
    SearchBar
  },
  data : () => ({
    inheritAttrs: false,
    search: ''
  }),
  computed: {
    ...mapState('board', {
      headers: 'headers',
      boards: 'boards'
    }),
  },



}
</script>

<style scoped>

</style>>

