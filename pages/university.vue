<!-- Initial Style and template -->
<template>
    <v-card style="padding: 40px">
      <v-row justify="center">
        <h3 class="heading">Universities</h3>
        <v-data-table
          :headers="headers"
          :items="universities"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-row>
    </v-card>
</template>

<script>
export default{
    name: "univeristy",
    data(){
        return{
            headers:[
                {
                    text: "Name",
                    align:"start",
                    sortable:false,
                    value:"name",
                },
                {text: "State", value: "state"},
                {text: "Address", value:"address"},
                {text: "Website", value:"website"},
                {text: "Acceptance", value:"acceptance"},
                {text: "Tuition", value:"tuition"},
            ],
            universities:[
                {
                    name: "California State University Los Angeles",
                    state: "California",
                    address: "5151 State University Dr, Los Angeles, CA 90032",
                    website: "https://www.calstatela.edu/",
                    acceptance: "76.5%",
                    tuition:"6,781",
                },
                {
                    name: "California State University Long Beach",
                    state: "California",
                    address: "1250 Bellflower Blvd, Long Beach, CA 90840",
                    website: "https://www.csulb.edu/",
                    acceptance: "42.1%",
                    tuition:"6,834",
                },
                {
                    name: "California State University",
                    state: "California",
                    address: "5151 State University Dr, Los Angeles, CA 90032",
                    website: "https://www.calstatela.edu/admissions/contact-us",
                    acceptance: "76.5%",
                    tuition:"6,781",
                },
            ]

        }
    }
}
</script>

<style scoped>

</style>
