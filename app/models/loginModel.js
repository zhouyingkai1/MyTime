export default{
  namespace: 'login',
  state: {
    isLogin: true,
    ddd: '2'
  },
  effects: {

  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    }
  }
}