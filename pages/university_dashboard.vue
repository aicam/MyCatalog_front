<template>
  <v-container fluid>
    <v-row style="width: 90vw; margin-left: auto; margin-right: auto">
      <v-col lg="8">
        <v-card class="text-center" v-if="univInfo" style="padding: 40px">
          <h1>Current applied students</h1>
          <v-data-table
            :headers="headersStudents"
            :items-per-page="5"
            :search="searchUni"
            class="elevation-1 margin-vertically"
          ></v-data-table>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card class="text-center" v-if="univInfo" style="padding: 40px">
          <h2 class="margin-vertically">Welcome to University Dashboard</h2>
          <h3 class="margin-vertically">{{ univInfo.uni_name }}</h3>
          <h3 class="margin-vertically">Minimum required SAT is {{ univInfo.min_sat }}</h3>
          <h3 class="margin-vertically">Minimum required ACT is {{ univInfo.min_act }}</h3>
          <h3 class="margin-vertically">Maximum capacity {{ univInfo.capacity }}</h3>
          <v-btn color="#FFFA15" style="color: black">Edit Information</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "university_dashboard",
  data() {
    return {
      univInfo: null,
      headersStudents: [
        {
          text: 'Student Name',
          align: 'start',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'SAT score',
          align: 'center',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'ACT score',
          align: 'center',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'Date Applied',
          align: 'start',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'GPA',
          align: 'start',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'Actions',
          align: 'start',
          sortable: false,
          value: 'uni_name',
        },
      ]
    }
  },
  mounted() {
    this.$store.dispatch("university/fetchUniversites").then(res => {
      res.map(item => {
        if (item.uni_id == window.location.search.substring(1).split('=')[1]) {
          this.univInfo = item
        }
      })
    })
  }
}
</script>

<style scoped>
.margin-vertically {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
