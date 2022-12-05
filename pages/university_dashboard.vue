<template>
  <v-container fluid>
    <EditUniDialog :uni="univInfo" :dialog="editUniDialog" v-on:close="editUniDialog = false"
                   :update-univ-info="updateUnivInfo"/>
    <DeleteUniDialog :uni="univInfo" :dialog="deleteUniDialog" v-on:close="deleteUniDialog = false"
                     :delete-univ-info="deleteUnivInfo"/>

    <v-row style="width: 90vw; margin-left: auto; margin-right: auto">
      <v-col lg="8">
        <v-card class="text-center" v-if="univInfo" style="padding: 40px">
          <h1>Current applied students</h1>
          <v-data-table
            :headers="headersStudents"
            :items="allApps.filter(item => !item.approved)"
            :items-per-page="5"
            class="elevation-1 margin-vertically"
          >
            <template v-slot:item.action="{item}">
              <v-row justify="center">
                <v-btn x-small color="#13F5FF" style="color: black" @click="() => {$store.dispatch(`university/approveApplication`, {app_id: item.app_id}).then(); fetchApps()}">Approve</v-btn>
              </v-row>
            </template>
          </v-data-table>
          <h1>Approved students</h1>
          <v-data-table
            :headers="headersStudents"
            :items="allApps.filter(item => item.approved)"
            :items-per-page="5"
            class="elevation-1 margin-vertically"
          >
          </v-data-table>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card class="text-center" style="padding: 40px">
          <h2 class="margin-vertically">Welcome to University Dashboard</h2>
          <h3 class="margin-vertically">{{ univInfo.uni_name }}</h3>
          <h3 class="margin-vertically">Minimum required SAT is {{ univInfo.min_sat }}</h3>
          <h3 class="margin-vertically">Minimum required ACT is {{ univInfo.min_act }}</h3>
          <h3 class="margin-vertically">Maximum capacity {{ univInfo.capacity }}</h3>
          <h3 class="margin-vertically">Acceptance rate {{ univInfo.accept_rate }}</h3>
          <v-btn color="#FFFA15" style="color: black" @click="editUniDialog = true">Edit Information</v-btn>
          <v-btn color="#E62A27" style="color: black" @click="deleteUniDialog = true">Delete</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditUniDialog from "@/components/admin/EditUniDialog";
import DeleteUniDialog from "@/components/admin/DeleteUniDialog";

export default {
  name: "university_dashboard",
  components: {EditUniDialog, DeleteUniDialog},
  data() {
    return {
      editUniDialog: false,
      deleteUniDialog: false,
      univInfo: {},
      allApps: [],
      searchUni: "",
      headersStudents: [
        {
          text: 'Student Name',
          align: 'center',
          sortable: false,
          value: 'full_name',
        },
        {
          text: 'SAT score',
          align: 'center',
          sortable: false,
          value: 'student.sat_score',
        },
        {
          text: 'ACT score',
          align: 'center',
          sortable: false,
          value: 'student.act_score',
        },
        {
          text: 'Date Applied',
          align: 'center',
          sortable: false,
          value: 'date_applied',
        },
        {
          text: 'GPA',
          align: 'center',
          sortable: false,
          value: 'student.gpa',
        },
        {
          text: 'Actions',
          align: 'center',
          sortable: false,
          value: 'action',
        },
      ]
    }
  },

  mounted() {
    this.fetchApps()
  },

  methods: {
    fetchApps() {
      this.$store.dispatch("university/fetchUniversites").then(res => {
        res.map(item => {
          // if (item.uni_id == window.location.search.substring(1).split('=')[1]) {

          // if statement is used for testing purposes, delete and fix when possible -Jerome
          if (item.uni_name === localStorage.getItem("university")) {
            this.univInfo = item
          }
        })
        this.$store.dispatch("university/getAllApplications", {uni_name: this.univInfo.uni_name}).then(res => {
          this.allApps = res.data
        })
      })
    },
    updateUnivInfo(newInfo) {
      this.univInfo = newInfo;
    },
    deleteUnivInfo(newInfo) {
      this.univInfo = newInfo;
    }
  }
}
</script>

<style scoped>
.margin-vertically {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
