<template>
  <v-container class="mt-15">
    <!-- <span>{{ $moment().format('YYYY-MM-DD') }}</span> -->
    <v-row>
      <v-col class="5">
        <v-card
          align="center"
          class="text-h1 font-weight-thin mt-15"
          flat
        >
          {{ time }}
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-15">
        <template>
          <v-data-table
            :headers="headers"
            :items="boards"
            :items-per-page="3"
            hide-default-footer
          />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data:() => ({
    interval: null,
    time: null,
  }),

  computed: {
    ...mapState('board', {
      headers: 'headers',
      boards: 'boards'
    }),
  },

  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },

  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  }
}

</script>

<style>

</style>
