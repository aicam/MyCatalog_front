export default {
  set_users(state, {users}) {
    state.users = users
  },
  push_user(state, {us}) {
    us.hashed_password = us.password
    state.users.push(us)
  }
}
