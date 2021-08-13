<template>
  <board-index />
</template>

<script>
import BoardIndex from '../components/board/Index.vue'
export default {
  components: {
    BoardIndex
  },
  created() {
    console.log("created")
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('beforeEnter')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('before Leave')
    next()
  },
  destroyed() {
    console.log('dt')
  }


}
</script>

<style>

</style>
