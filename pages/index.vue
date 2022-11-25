<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <VuetifyLogo />
      </v-card>
      <v-card style="padding: 25px">
        <v-card-title class="headline">
          <h1>Welcome to My Catalog application</h1>
        </v-card-title>
        <v-card-text>
          <h3 style="margin-top: 50px">
          In this application you can measure your chance and interest rate on different universities.
          The rate which is indicated in the application is based on regression on College Scorecard. <br>
          You can find the dataset <a href="https://collegescorecard.ed.gov/data/">here</a>.</h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/login"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
