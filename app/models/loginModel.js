export default{
  namespace: 'login',
  state: {
    
  },
  effects: {

  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    }
  }
}