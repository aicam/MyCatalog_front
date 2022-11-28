<template>
    <v-dialog
      v-model="dialog"
      @click:outside="$emit('close')"
      width="500px">
      <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
        <v-text-field label="Email" v-model="user.email"/>
        <v-text-field label="Password" v-model="user.password"/>
        <v-radio-group v-model="user.role">
          <v-radio
            label="Student"
            value="student"></v-radio>
          <v-radio
            label="Admin"
            value="admin"></v-radio>
          <v-radio
            label="University"
            value="univ"
          ></v-radio>
        </v-radio-group>
        <v-btn @click="() => {this.$store.dispatch('user/editUser', {id: this.user.id, edit: this.user}); $emit('close')}">Edit</v-btn>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "EditUserDialog",
    props: ['dialog', 'user_edit'],

    computed: {
      user(){
        return{
          email: this.user_edit.email,
          password: this.user_edit.hashed_password,
          role: this.user_edit.role,
          id: this.user_edit.id
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  