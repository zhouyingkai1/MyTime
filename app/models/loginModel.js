import { createAction, NavigationActions } from '../utils'
import { Toast } from 'antd-mobile'
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
      const phone = payload.phone
      const password = payload.password
      const result = yield call(loginServices.loginByPhone,`?phone=${phone}&password=${password}`)
      console.log(result,'rrrrr')
      if(result.code == '200'){
        storage.save({
          key: 'userInfo',  
          data: result,
          expires: null
        });
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'TabBar' })],
          })
        )  
      }else if(result.code == '415'){
        Toast.show(result.msg)
      }else{
        Toast.show('账号或密码错误')
      }
    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload}
    }
  }
}