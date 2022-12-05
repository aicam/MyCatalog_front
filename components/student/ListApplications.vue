<template>
  <v-dialog
    v-model="dialog"
    @click:outside="$emit('close')"
    width="500px">
    <v-card>
      <v-data-table
        :headers="headers"
        :items="app_list"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="University name"
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ListApplications",
  props: ['dialog', 'app_list'],
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'University Name',
          align: 'center',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'Date Applied',
          align: 'center',
          value: 'app_date'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
