<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card style="padding: 45px" width="600">
        <v-row justify="center">
          <h2>Login Form</h2>
        </v-row>
        <v-select
          :items="['student', 'university', 'admin']"
          label="Select your role"
        >
        </v-select>
        <v-text-field
          label="email"></v-text-field>
        <v-text-field
          label="password" type="password"></v-text-field>
        <v-card-actions>
          <v-btn color="#D6CFC2" outlined @click="$router.push('/admin_dashboard')">Sign up</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "registration"
}
</script>

<style scoped>

</style>
