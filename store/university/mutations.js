export default {
  set_unis(state, {unis}) {
    state.universities = unis
  },
  push_uni(state, {uni}) {
    state.universities.push(uni)
  },

  edit_uni(state, {id, edit}){
    const findIndex = state.universities.findIndex(university => university.uni_id == id)
    state.universities.splice(findIndex, 1, edit)
  },
  delete_uni(state, {id}){
    const findIndex = state.universities.findIndex(university => university.uni_id == id)
    state.universities.splice(findIndex, 1)
  }
}
