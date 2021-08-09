<template>
  <v-row>
    <v-col
      v-for="(time, i) in timetwo"
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
</template>

<script>
export default {
  data: () => ({
    timetwo: [
      {time: "14AM"},
      {time: "15AM"},
      {time: "16AM"},
      {time: "17AM"},
      {time: "18AM"},
      {time: "19AM"},
      {time: "20AM"},
    ],
  })

}
</script>

<style>

</style>
