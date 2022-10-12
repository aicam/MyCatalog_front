export default {
  async fetchUsers({ state, commit }) {
    const uniList = await this.$axios.get("student/users/all")
    const users = uniList.data
    commit('set_users', { users })
  },
  async addUser({state, commit}, { user }) {
    await this.$axios.post("student/users/", user)
    const us = user
    commit('push_user', { us })
  }
}
