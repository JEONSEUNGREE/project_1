<template>
  <v-card
    class="mx-auto"
    max-width="1200"
  >
    <v-card
      height="50"
      class="text-h5 font-weight-regular ml-6 mt-2"
      flat
    >
      <span>{{ currentTitle }}</span>
    </v-card>

    <v-window v-model="step">
      <first-page />

      <second-page />
    </v-window>

    <br>
    <v-divider />

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>

      <v-spacer />
      <v-btn
        :disabled="step === 2"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import FirstPage from './FirstPage.vue';
import SecondPage from './SecondPage.vue';

export default {
  components: { SecondPage, FirstPage },
  data: () => ({
    name: 'ree',
    time8: "Test",
    time9: "Test",
    time10: "Test",
    time11: "Test",
    time12: "Test",
    time13: "Test",
    time14: "Test",
    time15: "Test",
    time16: "Test",
    time17: "Test1",
    time18: "Test3",
    time19: "Test3",
    time20: "Test3",

    step: 1,

    lists: [
      { id: 1, name: "Mr.apple", tasks: 'Debugging'},
      { id: 2, name: "Mr.Banana", tasks: 'visit Conference'},
      { id: 3, name: "Mr.Pineapple", tasks: 'everyDay Shuffling'}
    ],

  }),

  computed: {
    currentTitle () {
      switch (this.step) {
      case 1: return 'Develop Team'
      default: return 'Develop Team'
      }
    },
  },
  methods: {

  },
}
</script>
