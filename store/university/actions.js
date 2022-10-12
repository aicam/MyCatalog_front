export default {
  async fetchUniversites({ state, commit }) {
    const uniList = await this.$axios.get("univ/list")
    const unis = uniList.data
    commit('set_unis', { unis })
  },
  async addUniversity({state, commit}, { uni_info }) {
    await this.$axios.post("univ/add/", uni_info)
    const uni = uni_info
    commit('push_uni', { uni })
  }
}
