import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
// import { persistStore, autoRehydrate } from 'redux-persist'
import { Toast } from 'antd-mobile'
import dva from './utils/dva'
import Router from './router'

import appModel from './models/appModel'
import routerModel from './models/routerModel'
import homeModel from './models/homeModel'

const app = dva({
  initialState: {},
  models: [appModel, routerModel, homeModel],
  // extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log(e)
  }
})

const App = app.start(<Router />)
// persistStore(app.getStore(), { storage: AsyncStorage })

AppRegistry.registerComponent('MyTime', () => App)