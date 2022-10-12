<template>
  <v-container fluid>
    <AddUniDialog :dialog="addUniDialog" v-on:close="addUniDialog = false" />
    <v-card style="padding: 40px">
      <h3 class="heading">Admin dashboard</h3>
      <v-data-table
        :headers="headers"
        :items="$store.getters['university/getUniversities']"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <v-btn outlined @click="() => {addUniDialog = true}">Add University</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import AddUniDialog from "@/components/admin/AddUniDialog";

export default {
  name: "admin_dashboard",
  components: {AddUniDialog},
  data() {
    return {
      headers: [
        {
          text: 'University Name',
          align: 'start',
          sortable: false,
          value: 'uni_name',
        },
        {text: 'Minimum ACT', value: 'min_act'},
        {text: 'Minimum SAT', value: 'min_sat'},
        {text: 'Capacity', value: 'capacity'},
        {text: 'Accept Rate', value: 'accept_rate'},
      ],

      addUniDialog: false
    }
  },
  computed: {
    universities() {
      return this.$store.dispatch("university/fetchUniversites")
    },
    smthng() {
      console.log("out timer ", this.$store.getters["university/getUniversities"])
    }
  },
  mounted() {
    this.universities
  }
}
</script>

<style scoped>

</style>
