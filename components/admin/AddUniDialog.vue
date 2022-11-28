<template>
  <v-dialog
    v-model="dialog"
    @click:outside="$emit('close')"
    width="500px">
    <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
      <v-text-field label="University Name" v-model="uni_info.uni_name" />
      <v-text-field label="Minimum Required SAT" v-model="uni_info.min_sat" />
      <v-text-field label="Minimum Required ACT" v-model="uni_info.min_act" />
      <v-text-field label="Maximum Capacity" v-model="uni_info.capacity" />
      <v-text-field label="University Acceptance Rate" v-model="uni_info.accept_rate" />
      <v-btn @click="() => {$store.dispatch('university/addUniversity', { uni_info }); $emit('close')}">Add University</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog'],
  name: "AddUniDialog",
  data() {
    return {
      uni_info: {
        uni_name: null,
        min_sat: null,
        min_act: null,
        capacity: null,
        accept_rate: null
      }
    }
  }
}
</script>

<style scoped>

</style>
