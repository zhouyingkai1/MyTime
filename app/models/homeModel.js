export default{
  namespace: 'home',
  state: {
    isHome: true
  },
  effects: {

  },
  reducers: {
    updateState( state, {payload} ){
      return {...state, ...payload}
    }
  }
}