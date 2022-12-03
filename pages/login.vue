<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card style="padding: 45px" width="600">
        <v-row justify="center">
          <h2>Login Form</h2>
        </v-row>
        <v-select
          v-model="role"
          :items="['student', 'university', 'admin']"
          label="Select your role"
        >
        </v-select>
        <v-text-field
          v-model="data.username"
          label="username"></v-text-field>
        <v-text-field
          v-model="data.password"
          label="password" type="password"></v-text-field>
        <v-card-actions>
          <v-btn color="#D6CFC2" outlined @click="login">Login</v-btn>
          <v-btn color="#630A0B">Forgot Password</v-btn>
          <v-btn color="#4D3EFF" @click="$router.push('/registration')">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      role: null,
      data: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    login() {
      const data = this.data
      this.$auth.loginWith('local', { data }).then(response => {
        localStorage.setItem("university", response.data.user.university)
        localStorage.setItem("user_id", response.data.user.id)
        if (this.role === "university") {
          this.$router.push("/university_dashboard")
        }
        if (this.role === "admin") {
          this.$router.push("/admin_dashboard")
        }
        if (this.role === "student") {
          this.$router.push("/student_dashboard")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
