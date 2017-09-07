import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import { 
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation';
import { connect } from 'react-redux'

import HomeScreen from './container/Home'
import UserScreen from './container/User'
import Detail from './page/Detail'
import UserDetail from './page/UserDetail'
import Login from './page/Login'

const TabBar = TabNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen },
},{
  tabBarOptions: {
    inactiveTintColor: '#333',
    swipeEnabled: true,
    labelStyle: {
      fontSize: 12,
      marginBottom: 5,
    },
  }
});
// headerMode
const AppNavigator = StackNavigator({
  TabBar: { screen: TabBar },
  Detail: { 
    screen: Detail, 
  },
  UserDetail: { 
    screen: UserDetail, 
  },
  Login: {
    screen: Login,
  }
},{
  headerMode : 'none'
});


function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { dispatch, router } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: router })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

export default connect((router)=> router)(Router)