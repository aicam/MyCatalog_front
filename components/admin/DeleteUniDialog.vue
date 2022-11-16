<template>
    <v-dialog
      v-model="dialog"
      @click:outside="$emit('close')"
      width="500px">
      <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
        <v-text-field label="Name" filled readonly v-model="uni_info.uni_name"/>
        <v-text-field label="Minimum ACT" filled readonly v-model="uni_info.min_act"/>
        <v-text-field label="Minimum SAT" filled readonly v-model="uni_info.min_sat"/>
        <v-text-field label="Capacity" filled readonly v-model="uni_info.capacity"/>
        <v-text-field label="Acceptance Rate" filled readonly v-model="uni_info.accept_rate"/>

        <!-- Insert Fucntion Here -->
        <v-btn @click="() => {this.$store.dispatch('university/deleteUniversity', {id: this.uni_info.uni_id}); $emit('close') }">Delete</v-btn>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "DeleteUniDialog",
    props: ['dialog', 'uni'],
    data() {
      return {
        uni_info: {
          uni_name: null,
          min_act: null,
          min_sat: null,
          capacity: null,
          accept_rate: null,
        }
      }
    },

    watch :{
      uni(newUni, oldUni){
        if(newUni){
          this.uni_info.uni_name = newUni.uni_name
          this.uni_info.min_act = newUni.min_act
          this.uni_info.min_sat = newUni.min_sat
          this.uni_info.capacity = newUni.capacity
          this.uni_info.accept_rate = newUni.accept_rate
        }
        else{
          newUni = oldUni
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  