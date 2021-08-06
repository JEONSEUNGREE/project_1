<template>
  <v-card>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="user"
          >
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>User</v-list-item-title>
          <v-list-item-subtitle>User Information</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list>
      <v-list>
        <v-list-item
          v-for="(item, index) in infor"
          :key="index"
          link
        >
          <v-list-item-title class="text-subtitle-1">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list>
  </v-card>
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

}
</script>

<style>

</style>
