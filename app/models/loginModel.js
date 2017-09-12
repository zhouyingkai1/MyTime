import { createAction, NavigationActions } from '../utils'

import * as loginServices from '../services/loginServices'
export default{
  namespace: 'login',
  state: {
    loginType: 1,
    phone: '', 
    password: ''
  },
  effects: {
    *loginByPhone({payload}, {call, put, select}){
      const phone = yield select(state=> state.login.phone)
      const password = yield select(state=> state.login.password)
      const result = yield call(loginServices.loginByPhone,`phone=${phone}&&password=${password}`)
      if(result.code == '200'){
        storage.save({
          key: 'userInfo',  // 注意:请不要在key中使用_下划线符号!
          data: result,
          expires: null
        });
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'TabBar' })],
          })
        )  
      }
    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    }
  }
}