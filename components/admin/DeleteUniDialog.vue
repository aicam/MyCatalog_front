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
        <v-btn @click="update">Delete</v-btn>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "DeleteUniDialog",
    props: ['dialog', 'uni', 'deleteUnivInfo'],

    computed: {
      uni_info(){
        return{
          uni_name: this.uni.uni_name,
          min_act: this.uni.min_act,
          min_sat: this.uni.min_sat,
          capacity: this.uni.capacity,
          accept_rate: this.uni.accept_rate,
          uni_id: this.uni.uni_id,
        }
      }
    },

    methods: {
      update() {
        this.$store.dispatch('university/deleteUniversity', {id: this.uni_info.uni_id}); 
        this.$emit('close')
        if(this.deleteUnivInfo){
          this.deleteUnivInfo({})
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  