export default {
    async fetchStudents({ state, commit }) {
      const studentList = await this.$axios.get("student/users/all")
      const students = studentList.data
      commit('set_students', { students })
    },
    async fetchStudent({state, commit}, {student_id}) {
      return this.$axios.get(`student/profile/${student_id}`)
    },
    async updateStudentInfo({state, commit}, {student_id, info}) {
      return this.$axios.post(`student/profile/${student_id}/`, {
          f_name: info.f_name,
          l_name: info.l_name,
          gpa: info.gpa,
          sat_score: info.sat_score,
          act_score: info.act_score
      })
    }
}
