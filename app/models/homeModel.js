import * as homeServices from '../services/homeServices'

export default{
  namespace: 'home',
  state: {
    isSearch: false
  },
  effects: {
    *getPersonalized({payload}, {call, put}) {
      const result = yield call(homeServices.getPersonalized,'')
      console.log(result,'result')
    }
  },
  reducers: {
    updateState( state, {payload} ){
      return {...state, ...payload}
    }
  }
}