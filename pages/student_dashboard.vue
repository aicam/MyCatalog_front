<template>
  <v-container fluid>
    <ListRecommendations :subject="chosenSubject.split(' -')[0]" :application_submitted="reloadApplications" :dialog="recomDialog" v-on:close="recomDialog = false" :student_id="user_id"/>
    <ListApplications :dialog="applicationsDialog" :app_list="applications" v-on:close="applicationsDialog = false" />
    <v-card max-width="450px" class="mx-auto bg" elevation="3" style="padding: 25px">
      <v-img class="" height="150px"
             src="http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg"
             gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
      </v-img>
      <v-row justify="center">
        <v-col align-self="start" class="d-flex justify-center align-center pa-0">
          <v-avatar class="profile avatar-center-heigth avatar-shadow" color="red" size="130">
            <v-icon size="70" dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-col>
      </v-row>
      <v-list-item color="#0000" class="profile-text-name ma-4 pt-5">
        <v-list-item-content>
          <v-list-item-title v-if="!isEditable" class="text-h6">
            {{ f_name }} {{ l_name }}
          </v-list-item-title>
          <v-text-field v-if="isEditable" v-model="f_name" prepend-icon="mdi-account" label="First Name"></v-text-field>
          <v-text-field v-if="isEditable" v-model="l_name" prepend-icon="mdi-account" label="Last Name"></v-text-field>
          <v-text-field v-if="isEditable" v-model="gpa" prepend-icon="mdi-sort" label="GPA"></v-text-field>
          <v-text-field v-if="isEditable" v-model="sat_score" prepend-icon="mdi-sort" label="SAT score"></v-text-field>
          <v-text-field v-if="isEditable" v-model="act_score" prepend-icon="mdi-sort" label="ACT score"></v-text-field>
          <v-autocomplete :items="['WHITE', 'BLACK', 'HISP', 'ASIAN', 'AIAN', 'NHPI', 'NRA', 'UNKN']" v-if="isEditable" v-model="ethnicity" label="Ethnicity"></v-autocomplete>
          <v-autocomplete :items="['M', 'F']" v-if="isEditable" v-model="sex" label="Sex"></v-autocomplete>

          <v-list-item-subtitle v-if="!isEditable">GPA: {{ gpa }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action @click="handleEdit">
          <v-btn class="mx-2" fab dark color="indigo" small>
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-list-item>
        <v-col cols="6" class="text-end">
          <v-text-field v-if="isEditable" v-model="sat_score" prepend-icon="mdi-sort" label="SAT score"></v-text-field>

          <v-list-item-content class="sutitles" v-if="!isEditable">
            <v-list-item-title class="text-h6">
              {{ sat_score }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption">SAT score</v-list-item-subtitle>
          </v-list-item-content>
        </v-col>
        <v-col cols="6" class="text-start">
          <v-text-field v-if="isEditable" v-model="act_score" prepend-icon="mdi-sort" label="ACT score"></v-text-field>

          <v-list-item-content class="sutitles" v-if="!isEditable">
            <v-list-item-title class="text-h6">
              {{ act_score }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-caption">ACT score</v-list-item-subtitle>
          </v-list-item-content>
        </v-col>
      </v-list-item>
      <div style="height: 20px"></div>
      <v-row justify="center" class="text-center">
        <h3>Enter your preferred subject to see the recommendations</h3>
      </v-row>
      <v-autocomplete :items="allSubjects" v-model="chosenSubject" label="Subject" />
      <v-row justify="center" style="margin: 25px">
        <v-btn
          outlined
          color="#DC05FF"
          small
          @click="recomDialog = true">
          List my recommendations
        </v-btn>
        <v-btn
          outlined
          color="white"
          small
          @click="reloadApplications">
          Applications
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import ListRecommendations from "@/components/student/ListRecommendations";
import ListApplications from "@/components/student/ListApplications";

export default {
  components: {ListApplications, ListRecommendations},
  data() {
    return {
      isEditable: false,
      f_name: "",
      l_name: "",
      gpa: "",
      sat_score: "",
      act_score: "",
      ethnicity: "",
      sex: 'M',
      chosenSubject: "",
      allSubjects: [
        "CIP01 - Agriculture, Agriculture Operations, And Related Sciences",
        "CIP03 - Natural Resources And Conservation",
        "CIP04 - Architecture And Related Services",
        "CIP05 - Area, Ethnic, Cultural, Gender, And Group Studies",
        "CIP09 - Communication, Journalism, And Related Programs",
        "CIP10 - Communications Technologies/Technicians And Support Services",
        "CIP11 - Computer And Information Sciences And Support Services",
        "CIP12 - Personal And Culinary Services",
        "CIP13 - Education",
        "CIP14 - Engineering",
        "CIP15 - Engineering Technologies And Engineering-Related Fields",
        "CIP16 - Foreign Languages, Literatures, And Linguistics",
        "CIP19 - Family And Consumer Sciences/Human Sciences",
        "CIP22 - Legal Professions And Studies",
        "CIP23 - English Language And Literature/Letters",
        "CIP24 - Liberal Arts And Sciences, General Studies And Humanities",
        "CIP25 - Library Science",
        "CIP26 - Biological And Biomedical Sciences",
        "CIP27 - Mathematics And Statistics",
        "CIP29 - Military Technologies And Applied Sciences",
        "CIP30 - Multi/Interdisciplinary Studies",
        "CIP31 - Parks, Recreation, Leisure, And Fitness Studies",
        "CIP38 - Philosophy And Religious Studies",
        "CIP39 - Theology And Religious Vocations",
        "CIP40 - Physical Sciences",
        "CIP41 - Science Technologies/Technicians",
        "CIP42 - Psychology",
        "CIP43 - Homeland Security, Law Enforcement, Firefighting And Related Protective Services",
        "CIP44 - Public Administration And Social Service Professions",
        "CIP45 - Social Sciences",
        "CIP46 - Construction Trades",
        "CIP47 - Mechanic And Repair Technologies/Technicians",
        "CIP48 - Precision Production",
        "CIP49 - Transportation And Materials Moving",
        "CIP50 - Visual And Performing Arts",
        "CIP51 - Health Professions And Related Programs",
        "CIP52 - Business, Management, Marketing, And Related Support Services",
        "CIP54 - History",
      ],
      recomDialog: false,
      user_id: localStorage.getItem("user_id"),
      applications: [],
      applicationsDialog: false,
    }
  },
  methods: {
    handleEdit(event) {
      this.isEditable = !this.isEditable
      this.$store.dispatch("student/updateStudentInfo", {
        student_id: this.user_id,
        info: {
          f_name: this.f_name,
          l_name: this.l_name,
          gpa: this.gpa,
          sat_score: this.sat_score,
          act_score: this.act_score,
          ethnicity: this.ethnicity,
          sex: this.sex
        }
      })
    },
    reloadApplications() {
      this.$store.dispatch("student/getApplications", {student_id: this.user_id}).then(response => {
        this.applications = response.data;
        console.log("applications ", this.applications)
        this.recomDialog = false;
        this.applicationsDialog = true;
      })
    }
  },
  mounted() {
    this.$store.dispatch("student/fetchStudent", {student_id: localStorage.getItem("user_id")}).then(response => {
      const data = response.data
      this.f_name = data.f_name
      this.l_name = data.l_name
      this.gpa = data.gpa
      this.sat_score = data.sat_score
      this.act_score = data.act_score
    })
    this.reloadApplications()
  }
}
</script>
