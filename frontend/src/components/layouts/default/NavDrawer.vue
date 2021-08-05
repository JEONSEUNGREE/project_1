<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    v-bind="$attrs"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          프로젝트
        </v-list-item-title>
        <v-list-item-subtitle>
          로그인한 직원이름
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "NavDrawer",
  inheritAttrs: false,

  computed: {
    ...mapState('drawer', {
      items: 'items',
    }),
    drawer: {
      get () {
        return this.$store.getters['drawer/getDrawer']
      },
      set (value) {
        return this.$store.commit('drawer/setDrawer', value)
      }
    },
  }
}
</script>

<style>

</style>
