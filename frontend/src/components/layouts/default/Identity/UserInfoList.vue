<template>
  <v-list>
    <v-list>
      <v-list-item
        link
      >
        <v-list-item-title
          class="text-subtitle-1"
        >
          {{ infor[0].title }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        link
        @click="signout"
      >
        <v-list-item-title
          class="text-subtitle-1"
        >
          {{ infor[1].title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "UserInformation",
  computed: {
    ...mapState('userInfor', {
      infor: 'infor'
    })
  },
  methods: {
    signout() {
      this.$store.dispatch('authentication/signout')
    }
  }

}
</script>

<style>

</style>
