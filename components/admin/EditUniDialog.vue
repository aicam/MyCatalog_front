<template>
  <v-dialog
    v-model="dialog"
    @click:outside="$emit('close')"
    width="500px">
    <v-card style="padding: 25px; background: rgba(86,70,144,0.76)">
      <v-text-field label="Name" v-model="uni_info.uni_name"/>
      <v-text-field label="Minimum ACT" v-model="uni_info.min_act"/>
      <v-text-field label="Minimum SAT" v-model="uni_info.min_sat"/>
      <v-text-field label="Capacity" v-model="uni_info.capacity"/>
      <v-text-field label="Acceptance Rate" v-model="uni_info.accept_rate"/>
      <v-btn
        @click="update">
        Edit
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditUniDialog",
  props: ['dialog', 'uni', 'updateUnivInfo'],

  computed: {
    uni_info() {
      return {
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
      this.$store.dispatch('university/editUniversity', {id: this.uni_info.uni_id, edit: this.uni_info})
      this.$emit('close');
      if (this.updateUnivInfo)
        this.updateUnivInfo(this.uni_info)
    }
  },
}
</script>

<style scoped>

</style>
