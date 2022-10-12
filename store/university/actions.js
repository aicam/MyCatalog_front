export default {
  async fetchUniversites({ state, commit }) {
    const uniList = await this.$axios.get("univ/list")
    const unis = uniList.data
    commit('set_unis', { unis })
  }
}
