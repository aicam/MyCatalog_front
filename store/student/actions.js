export default {
    async fetchStudents({ state, commit }) {
      const studentList = await this.$axios.get("student/users/all")
      const students = studentList.data
      commit('set_students', { students })
    }
}