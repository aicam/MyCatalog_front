<template>
  <v-container fluid>
    <AddUniDialog :dialog="addUniDialog" v-on:close="addUniDialog = false" />
    <AddUserDialog :dialog="addUserDialog" v-on:close="addUserDialog = false" />
    <EditUserDialog :user_edit="editUser" :dialog="editUserDialog" v-on:close="editUserDialog = false"/>
    <EditUniDialog :uni="editUni" :dialog="editUniDialog" v-on:close="editUniDialog = false"/>
    <DeleteUserDialog :user_delete="deleteUser" :dialog="deleteUserDialog" v-on:close="deleteUserDialog = false"/>
    <DeleteUniDialog :uni="deleteUni" :dialog="deleteUniDialog" v-on:close="deleteUniDialog = false"/>

    <v-card style="padding: 40px">
      <h3 class="heading">Universities</h3>
      <v-data-table
        :headers="headersUnis"
        :items="$store.getters['university/getUniversities']"
        :items-per-page="5"
        :search="searchUni"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-text-field
            v-model="searchUni"
            label="Search by all columns"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:item.actions="{item}">
          <v-row justify="center">
            <v-btn @click="() => {editUniDialog = true; editUni = item}">Edit</v-btn>
            <v-btn @click="() => {deleteUniDialog = true; deleteUni = item}">Delete</v-btn>
          </v-row>
        </template>

      </v-data-table>
      <v-btn outlined @click="() => {addUniDialog = true}">Add University</v-btn>

      <h3 class="heading" style="margin-top: 25px">Users</h3>
      <v-data-table
        :headers="headersUsers"
        :items="$store.getters['user/getUsers']"
        :items-per-page="5"
        class="elevation-1"
        :search="searchStudent"
      >
        <template v-slot:top>
          <v-text-field
            v-model="searchStudent"
            label="Search by email"
            class="mx-4"
          ></v-text-field>
        </template>

        <template v-slot:item.actions="{item}">
          <v-row justify="center">
            <v-btn @click="() => {editUserDialog = true; editUser = item}">Edit</v-btn>
            <v-btn @click="() => {deleteUserDialog = true; deleteUser = item}">Delete</v-btn>
          </v-row>
        </template>

      </v-data-table>

      <v-btn outlined @click="() => {addUserDialog = true}">Add User</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import AddUniDialog from "@/components/admin/AddUniDialog";
import AddUserDialog from "@/components/admin/AddUserDialog";
import EditUserDialog from "@/components/admin/EditUserDialog";
import EditUniDialog from "@/components/admin/EditUniDialog";
import DeleteUserDialog from "@/components/admin/DeleteUserDialog";
import DeleteUniDialog from "@/components/admin/DeleteUniDialog.vue";

export default {
  name: "admin_dashboard",
  components: {AddUserDialog, AddUniDialog, EditUserDialog, DeleteUserDialog, EditUniDialog, DeleteUniDialog},
  data() {
    return {
      editUni: {},
      editUser: {},
      deleteUni: {},
      deleteUser: {},
      searchUni: '',
      searchStudent: '',
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
        {text: 'Actions', value: 'actions'}
      ],
      headersUsers: [
        {text: 'Email', sortable: false, value: 'email'},
        {text: 'Hashed Password', sortable: false, value: 'hashed_password'},
        {text: 'Role', value: 'role'},
        {text: 'University', value: 'university_name'},
        {text: 'Actions', value: 'actions'}
      ],

      addUniDialog: false,
      addUserDialog: false,
      editUserDialog: false,
      editUniDialog: false,
      deleteUserDialog: false,
      deleteUniDialog: false,
    }
  },
  computed: {
    universities() {
      return this.$store.dispatch("university/fetchUniversites")
    },
    users() {
      return this.$store.dispatch("user/fetchUsers")
    },
    // students() {
    //   return this.$store.dispatch("students/fetchStudents")
    // }
  },
  mounted() {
    this.universities
    this.users
    // this.students
    // setTimeout(() => console.log("Students ", this.$store.getters['student/getStudent']), 2000)

  },
}
</script>

<style scoped>

</style>
