<template>
    <div>

    <v-card style="padding: 40px">
        <v-row justify="center">
            
            <div>
            <h3 class="heading" >Universities</h3>
            </div>
            
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            
            <v-data-table
                :headers="headers"
                :items="universities"
                :search="search"
                :items-per-page="5"
                class="elevation-1"> 
            </v-data-table>
        </v-row>
    </v-card>
    </div>
</template>

<script>
    export default{
        name: "univeristy",
        data(){
            return{
                search: '',
                headers:[
                    {
                        text: "Name",
                        align:"start",
                        filterable:false,
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
                    {
                        name: "University of California, Los Angeles",
                        state:"California",
                        address: "Los Angeles, CA 90095",
                        website: "https://www.ucla.edu/",
                        acceptance: "14.3%",
                        tuition: "13,249"
                    },
                    {
                        name: "University of Southern California",
                        state: "California",
                        address: "Los Angeles, CA 90007",
                        website: "https://www.usc.edu/",
                        acceptance: "16.1%",
                        tuition: "60,275"
                    },
                    {
                        name: "University of California Irvine",
                        state: "California",
                        address: "University of California Irvine, Irvine, CA 92697",
                        website: "https://uci.edu/",
                        acceptance: "29.9%",
                        tuition: "13,753",
                    },
                    {
                        name: "University of California Merced",
                        state: "Calfiornia",
                        address: "5200 Lake Rd, Merced, CA 95343",
                        website: "https://www.ucmerced.edu/",
                        acceptance: "84.8%",
                        tuition: "14,100",
                    }

                ]
    
            }
        }
    }

    </script>