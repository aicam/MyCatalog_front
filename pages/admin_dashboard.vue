<template>
  <v-container fluid>
    <AddUniDialog :dialog="addUniDialog" v-on:close="addUniDialog = false" />
    <AddUserDialog :dialog="addUserDialog" v-on:close="addUserDialog = false" />

    <v-card style="padding: 40px">
      <h3 class="heading">Universities</h3>
      <v-data-table
        :headers="headersUnis"
        :items="$store.getters['university/getUniversities']"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <v-btn outlined @click="() => {addUniDialog = true}">Add University</v-btn>
      <h3 class="heading" style="margin-top: 25px">Users</h3>
      <v-data-table
        :headers="headersUsers"
        :items="$store.getters['user/getUsers']"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      <v-btn outlined @click="() => {addUserDialog = true}">Add User</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import AddUniDialog from "@/components/admin/AddUniDialog";
import AddUserDialog from "@/components/admin/AddUserDialog";

export default {
  name: "admin_dashboard",
  components: {AddUserDialog, AddUniDialog},
  data() {
    return {
      headersUnis: [
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
      headersUsers: [
        {text: 'Email', sortable: false, value: 'email'},
        {text: 'Hashed Password', sortable: false, value: 'hashed_password'},
        {text: 'Role', value: 'role'}
      ],

      addUniDialog: false,
      addUserDialog: false
    }
  },
  computed: {
    universities() {
      return this.$store.dispatch("university/fetchUniversites")
    },
    users() {
      return this.$store.dispatch("user/fetchUsers")
    }
  },
  mounted() {
    this.universities
    this.users
    setTimeout(() => console.log("users ", this.$store.getters['user/getUsers']), 2000)
  }
}
</script>

<style scoped>

</style>
