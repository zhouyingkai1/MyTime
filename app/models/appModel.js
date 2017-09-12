import { createAction, NavigationActions } from '../utils'
import * as testService from '../services/testServices'
export default {
  namespace: 'app',
  state: {
    primaryColor: '#333',
  },
  reducers: {
    loginStart(state, { payload }) {
      return { ...state, ...payload, fetching: true }
    },
    loginEnd(state, { payload }) {
      return { ...state, ...payload, fetching: false }
    },
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {
      yield put(createAction('loginStart')())
      const login = yield call(testService.login, payload)
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        )
      }
      yield put(createAction('loginEnd')({ login }))
    },
  },
}