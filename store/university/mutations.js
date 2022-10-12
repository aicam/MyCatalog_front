export default {
  set_unis(state, {unis}) {
    state.universities = unis
  },
  push_uni(state, {uni}) {
    state.universities.push(uni)
    console.log(uni, "adasdasd");
  }
}
