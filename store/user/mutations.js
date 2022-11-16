export default {
  set_users(state, {users}) {
    state.users = users
  },
  push_user(state, {us}) {
    us.hashed_password = us.password
    state.users.push(us)
  },

  // edit_user causes error
  edit_user(state, {id, edit}){
    // edit.hashed_password = edit.password
    // const findIndex = state.users.findIndex(user => user.id == id)
    // state.users.splice(findIndex, 1, edit)
  },

  delete_user(state, {id}){
    const findIndex = state.users.findIndex(user => user.id == id)
    state.users.splice(findIndex, 1)
  }
}
