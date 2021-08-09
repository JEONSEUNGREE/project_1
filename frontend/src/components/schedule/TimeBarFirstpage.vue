<template>
  <v-card
    flat
  >
    <v-row>
      <v-col
        v-for="(time, i) in timeone"
        :key="i"
      >
        <v-btn
          small
          color="primary"
          class="ml-5"
        >
          {{ time.time }}
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    name: 'Timebar',
    timeone: [
      {time: "NAME"},
      {time: "8AM"},
      {time: "9AM"},
      {time: "10AM"},
      {time: "11AM"},
      {time: "12AM"},
      {time: "13AM"},
    ],
  })

}
</script>

<style>

</style>
