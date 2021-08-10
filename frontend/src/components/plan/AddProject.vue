<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <template v-slot:activator="{ on , attrs}">
      <v-btn
        slot="activator"
        text
        class="success"
        v-bind="attrs"
        width="100"
        v-on="on"
      >
        <h5>
          New Prject
        </h5>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h5>Add a New Project</h5>
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          class="px-3"
        >
          <v-text-field
            v-model="title"
            label="Title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          />

          <v-textarea
            v-model="content"
            prepend-icon="mdi-pencil"
            label="Information"
            :rules="inputRules"
          />
          <v-row>
            <v-col cols="6">
              <v-menu max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    slot="activator"
                    label="Due Date"
                    prepend-icon="mdi-calendar-range"
                    v-bind="attrs"
                    :value="due"
                    :rules="inputRules"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="due"
                />
              </v-menu>
            </v-col>
          </v-row>


          <v-spacer />

          <v-btn
            class="success mx-0 mt-3"
            small
            :loading="loading"
            @click="submit"
          >
            Add projcect
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: ()=> ({
    title: '',
    content: '',
    due: null,
    inputRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ],
    loading: false,
    dialog: false
  }),
  methods: {

    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        // after res false

        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          // 2021-08-11
          person: 'Ree',
          status: 'ongoing'
        }
        this.$emit('projectAdded')
      }
      // db에서 받게되면 수행할것
      this.dialog = false

    }
  }

}
</script>

<style>

</style>
