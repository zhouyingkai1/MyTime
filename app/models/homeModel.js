export default{
  namespace: 'home',
  state: {
   
  },
  effects: {
   
  },
  reducers: {
    updateState( state, {payload} ){
      console.log(payload,'payload')
      return {...state, ...payload}
    }
  }
}