<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-text>
          <validation-observer
            v-slot="{ invalid }"
            ref="observer"
          >
            <v-form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  max: true|15,
                }"
                name="name"
              >
                <v-text-field
                  v-model="name"
                  label="Name"
                  :error-messages="errors"
                  :counter="15"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  numeric: true,
                  digits: 11
                }"
                name="phoneNumber"
              >
                <v-text-field
                  v-model="phoneNumber"
                  label="PhoneNumber"
                  :error-messages="errors"
                  :counter="11"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true,
                  email: true
                }"
                name="email"
              >
                <v-text-field
                  v-model="email"
                  label="E-Mail"
                  name="email"
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                label="Select"
                name="select"
                :rules="{
                  required: true
                }"
              >
                <v-select
                  v-model="select"
                  :error-messages="errors"
                  label="Select"
                  :items="items"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                :rules="{
                  required: true
                }"
                name="checkbox"
              >
                <v-checkbox
                  v-model="checkbox"
                  label="Agree"
                  name="checkbox"
                  :error-messages="errors"
                  value="1"
                />
              </validation-provider>

              <v-btn
                class="mr-3"
                :disabled="invalid"
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn
                class="ml-3"
                @click="clear"
              >
                clear
              </v-btn>
            </v-form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Forms',

  data: ()=> ({
    name: null,
    phoneNumber: null,
    email: null,
    checkbox: null,
    select: null,
  }),
  computed: {
    ...mapState('authentication', {
      items: 'items',
    }),

  },

  methods: {
    submit() {
      this.$refs.observer.validate().then(result => {
        console.log(result)
        if(result) {
          alert('양식제출')
        }
      })
    },
    clear() {
      this.name = null
      this.phoneNumber = null
      this.email = null
      this.checkbox = null
      this.select = null
    }

  }

}
</script>

<style>

</style>
