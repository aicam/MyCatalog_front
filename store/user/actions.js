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
  },

  // TODO: Modify(edit) User 
  // -(Wait for Back End Call)
  // -commit causes error (edit_user)
  async editUser({state, commit}, { id, edit }){
    // await this.$axios.patch(`student/profile/${id}`, edit)
    // commit('edit_user', {id, edit})
  },

  // TODO: Delete User (Waiting for back end call)
  async deleteUser({state, commit}, {id}){
    await this.$axios.get(`admin/delete/user/${id}`)
    commit('delete_user', {id})
  }
}
