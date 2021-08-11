<template>
  <v-app>
    <sign-in />
  </v-app>
</template>

<script>

import SignIn from './Signin.vue'

export default {
  name: 'Authentication',
  components: {
    SignIn
  }
}
</script>


