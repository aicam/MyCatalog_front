<script>
export default {
  data() {
    return {
      isEditable: false,
      f_name: this.f_name,
      l_name: this.l_name,
      gpa: this.gpa,
      sat_score: this.sat_score,
      act_score: this.act_score
    }
  },
  methods: {
    handleEdit(event) {
      this.isEditable = !this.isEditable


      if (this.isEditable == false) {
        fetch(`http://127.0.0.1:8000/student/profile/${this.id}/`, {
          method: 'PATCH',
          body: JSON.stringify({
            f_name: this.f_name,
            l_name: this.l_name,
            gpa: this.gpa,
            sat_score: this.sat_score,
            act_score: this.act_score
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })


      }
    }
  },
  computed: {
    fullName: {

      get() {
        if (this.l_name) {
        return `${this.f_name} ${this.l_name}`
        }
        else{
          return `${this.f_name}${this.l_name}`
        }
      },
      set(newValue) {
        const m = newValue.match(/(\S*)\s+(.*)/);

        if (m) {
          this.f_name = m[1];
          this.l_name = m[2];
        }
        else {
          this.f_name = newValue;
          this.l_name = ""
        }
      }
    }
  }
}
</script>

<template>
  <v-container fluid>
          <v-card max-width="450px" class="mx-auto bg" elevation="3">
            <v-img class="" height="150px" src="http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg" gradient="150deg, rgb(185 224 255 / 58%) 0%, rgb(243 220 246 / 52%) 35%, rgb(223 255 242 / 74%) 74%">
            </v-img>
            <v-row justify="center">
              <v-col align-self="start" class="d-flex justify-center align-center pa-0" >
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
                      {{f_name}} {{l_name}}
                    </v-list-item-title>
                    <v-text-field v-if="isEditable"  v-model="fullName" prepend-icon="mdi-account" label="Name" ></v-text-field>
                    <v-text-field v-if="isEditable"  v-model="gpa" prepend-icon="mdi-sort" label="GPA" ></v-text-field>

                    <v-list-item-subtitle v-if="!isEditable">GPA: {{gpa}}</v-list-item-subtitle>
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
                <v-text-field v-if="isEditable"  v-model="sat_score" prepend-icon="mdi-sort" label="SAT score" ></v-text-field>

                <v-list-item-content class="sutitles" v-if="!isEditable">
                  <v-list-item-title class="text-h6">
                    {{sat_score}}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">SAT score</v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-col cols="6" class="text-start">
                <v-text-field v-if="isEditable"  v-model="act_score" prepend-icon="mdi-sort" label="ACT score" ></v-text-field>

                <v-list-item-content class="sutitles" v-if="!isEditable">
                  <v-list-item-title class="text-h6">
                    {{act_score}}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">ACT score</v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-list-item>
          </v-card>
        </v-container>
</template>
