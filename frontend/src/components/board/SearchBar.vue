<template>
  <v-toolbar
    flat
    class="mb-2"
  >
    <v-spacer />
    <template>
      <tr>
        <td>
          <v-scroll-x-reverse-transition>
            <v-text-field
              v-show="hidden"
              label="Search"
              v-bind="$attrs"
              v-on="$listeners"
            />
          </v-scroll-x-reverse-transition>
        </td>
      </tr>
    </template>
    <v-btn
      color="primary"
      v-bind="$attrs"
      icon
      @click="hidden = !hidden"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "SearchBar",

  inheritAttrs: false,

  data: () => ({
    hidden: false,
  })

}
</script>

<style>

</style>
