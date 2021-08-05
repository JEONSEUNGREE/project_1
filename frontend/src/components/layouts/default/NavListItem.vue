<template>
  <v-list-item
    :key="item.title"
    link
    active-class="primary"
    :to="item.to"
  >
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "NavListItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }

}
</script>

<style>

</style>
