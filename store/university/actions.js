export default {
  async fetchUniversites({ state, commit }) {
    const uniList = await this.$axios.get("univ/list")
    const unis = uniList.data
    commit('set_unis', { unis })
    return unis
  },
  async addUniversity({state, commit}, { uni_info }) {
    await this.$axios.post("univ/add/", uni_info)
    const uni = uni_info
    commit('push_uni', { uni })
  },

  //TODO Modify(Edit) Update University
  //-commit causes error (edit_uni)
  async editUniversity({state, commit}, { id, edit }){
    await this.$axios.patch(`univ/edit/${id}`, edit)

    // commit('edit_uni', {id, edit})
  },

  //TODO Delete University (BackEndCall)
  async deleteUniversity({state, commit}, {id}){
    // await this.$axios.delete(`univ/delete/${id}`)
    commit('delete_uni', {id})
  }
}
