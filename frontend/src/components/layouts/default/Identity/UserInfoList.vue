<template>
  <v-list>
    <v-list>
      <v-list-item
        v-for="(item, index) in infor"
        :key="index"
        link
      >
        <v-list-item-title
          class="text-subtitle-1"
        >
          {{ item.title }}
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

}
</script>

<style>

</style>
