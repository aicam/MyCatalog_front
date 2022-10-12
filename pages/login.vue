<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card style="padding: 45px" width="600">
        <v-row justify="center">
          <h2>Login Form</h2>
        </v-row>
        <v-select
          :items="['user', 'university', 'admin']"
          label="Select your role"
        >
        </v-select>
        <v-text-field
          label="username"></v-text-field>
        <v-text-field
          label="password" type="password"></v-text-field>
        <v-card-actions>
          <v-btn color="#D6CFC2" outlined>Login</v-btn>
          <v-btn color="#630A0B">Forgot Password</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>
