<template>
  <v-dialog
    v-model="dialog"
    @click:outside="$emit('close')"
    width="500px">
    <v-card>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="fullList"
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
          <template v-slot:item.apply="{item}">
            <v-btn
              color="blue"
              small
              @click="apply(item.uni_name)"
            >
              Apply
            </v-btn>
          </template>
        </v-data-table>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ListRecommendations",
  props: ['dialog', 'student_id', 'application_submitted', 'subject'],
  data() {
    return {
      fullList: [],
      search: '',
      headers: [
        {
          text: 'University Name',
          align: 'center',
          sortable: false,
          value: 'uni_name',
        },
        {
          text: 'Score (%)',
          align: 'center',
          value: 'score',
        },
        {
          text: 'Apply',
          align: 'center',
          value: 'apply'
        }
      ]
    }
  },
  methods: {
    async apply(uni_name) {
      function formatDate(date) {
        var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;

        return [year, month, day].join('-');
      }
      await this.$store.dispatch("student/submitApplication", {application: {
          uni_name: uni_name,
          app_date: formatDate(new Date()),
          student_id: parseInt(this.student_id)
        }});
      this.application_submitted()
    }
  },
  watch: {
    'dialog': {
      handler: function (newVal) {
        if (newVal) {
          this.$store.dispatch("student/getRecommendationList", {student_id: this.student_id, subject: this.subject}).then(
            response => {
              if (response.data.length === 0) {
                alert("Enter correct data")
                this.$emit('close')
              }
              response.data.map(item => {
                this.fullList.push({uni_name: item[1], score: item[2]})
              })
            }
          )
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
