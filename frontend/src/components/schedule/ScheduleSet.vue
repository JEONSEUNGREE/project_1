<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Schedule(icon)
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  v-model="value"
                  :items="items"
                  label="Interests"
                  multiple
                />
                <v-col
                  cols="12"
                >
                  {{ value }}
                  <v-text-field
                    label="Todo"
                    required
                  />
                </v-col>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false , onSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

export default {

  name: "ScheduleSet",

  data: () => ({
    dialog: false,
    value: [],
    text: null,
    items: ['8AM', '9AM', '10AM', '11AM', '12AM', '13PM', '14PM', '15PM', '16PM','17PM','18PM','19PM','20PM'],
    editText: [],
  }),
  methods: {

  }
}
</script>
