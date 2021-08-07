<template>
  <v-row class="mb-1 mr-10 py-2">
    <v-spacer />
    <v-btn
      small
      icon
      color="grey"
      class="mr-15"
      v-bind="$attrs"
      v-on="$listeners"
      @click="sortBy('depart')"
    >
      <!-- 부서별 분류 -->
      <v-icon>mdi-sort-alphabetical-ascending-variant</v-icon>
      <span>By Depart</span>
    </v-btn>
    <v-btn
      small
      icon
      color="grey"
      class="ml-5"
      v-bind="$attrs"
      @click="sortBy('name')"
      v-on="$listeners"
    >
      <!-- 이름별 분류 -->
      <v-icon>mdi-sort-alphabetical-descending</v-icon>
      <span>By Name</span>
    </v-btn>
  </v-row>
</template>

<script>

export default {
  name: "ContactSortButton",
  inheritAttrs: false,

  methods: {
    sortBy(value) {
      this.$store.dispatch('contact/getSort', value)
    }
  }

}
</script>

<style>

</style>
