<template>
  <v-window-item :value="1">
    <time-bar-firstpage />
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
            {{ person.name }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time8 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time9 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time10 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time11 }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time12 }}
          </v-btn>
        </v-col>
        <v-col class="mb-1">
          <v-btn
            small
            color="primary"
            class="ml-3"
            text
          >
            {{ person.time13 }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-window-item>
</template>

<script>

import TimeBarFirstpage from './TimeBarFirstpage.vue'

export default {
  components: {
    TimeBarFirstpage
  },
  data: () => ({
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
