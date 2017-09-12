export default{
  namespace: 'login',
  state: {
    loginType: 1,
  },
  effects: {

  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    }
  }
}