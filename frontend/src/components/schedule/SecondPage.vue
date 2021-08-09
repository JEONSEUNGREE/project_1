<template>
  <v-window-item :value="2">
    <time-bar-second-page />
    <br>
    <v-divider />
    <br>
    <v-card
      flat
    >
      <v-row
        v-for="(person, i) in Indivisualone"
        :key="i"
      >
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time14 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time15 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time16 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time17 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time18 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time19 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time20 }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-window-item>
</template>

<script>
import TimeBarSecondPage from './TimeBarSecondPage.vue'

export default {
  components: { TimeBarSecondPage },
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
    Indivisualone: [
      {name: "REE", time8: "Woking", time9: "Practice", time10: "Studying"
        ,time11: "Practice",time12: "Studying", time13: "13AM", time14: "Woking",time15: "Practice"
        , time16: "Studying",time17: "Studying",time18: "practice", time19: "Studying",time20: "Studying" },
      {name: "REE", time8: "Woking", time9: "Practice", time10: "Studying"
        ,time11: "Practice",time12: "Studying", time13: "13AM", time14: "Woking",time15: "Practice"
        , time16: "Studying",time17: "Studying",time18: "practice", time19: "Studying",time20: "Studying" },
    ],
  })

}
</script>

<style>

</style>
