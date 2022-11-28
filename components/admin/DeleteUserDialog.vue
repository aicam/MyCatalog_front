<template>
  <v-dialog
    v-model="dialog"
    @click:outside="$emit('close')"
    width="500px">
    <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
      <v-text-field label="Email" filled readonly v-model="user.email"/>
      <v-text-field label="Password" filled readonly v-model="user.password"/>
      <v-radio-group v-model="user.role" checked>
        <v-radio
          label="Student"
          value="student"
          readonly="readonly"></v-radio>
        <v-radio
          label="Admin"
          value="admin"
          readonly="readonly"></v-radio>
      </v-radio-group>
      <v-btn @click="() => {this.$store.dispatch('user/deleteUser', {id: this.user_delete.id}); $emit('close')}">Edit</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteUserDialog",
  props: ['dialog', 'user_delete'],

  computed: {
    user(){
      return{
        email: this.user_delete.email,
        password: this.user_delete.hashed_password,
        role: this.user_delete.role,
        id: this.user_delete.id
      }
    }
  }
}
</script>

<style scoped>

</style>
