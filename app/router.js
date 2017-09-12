import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, TouchableOpacity, Image } from 'react-native'
import theme from './utils/theme'
import px from './utils/pxToDp'
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
import LoginTypeSelect from './page/login/LoginTypeSelect'
import LoginByPhone from './page/login/LoginByPhone'

const TabBar = TabNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen },
},{
  tabBarOptions: {
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        marginBottom: 5,
      },
      inactiveTintColor: '#333',
    }
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
  LoginTypeSelect: {
    screen: LoginTypeSelect,
  },
  LoginByPhone: {
    screen: LoginByPhone,
    navigationOptions: ({navigation}) => StackOptions({navigation})
  },
},{
  headerMode : 'screen'
});

const StackOptions = ({navigation}) => {
  let {state,goBack} = navigation;
  console.log(navigation,'navigation')
  const headerStyle = {backgroundColor: theme.themeColor, paddingTop: theme.toolbar.paddingTop};
  const headerTitle = state.params ? state.params.title : state.routeName;

  const headerTitleStyle = {
      fontSize: px(40),
      color:'#fff',
      fontWeight:'500',
      alignSelf:'center',
    }
  const headerBackTitle = false;
  const headerLeft = (
      <TouchableOpacity>
        <Image source={require('./img/icon_back.png')} style={{width: px(60), height: px(60), tintColor: '#fff'}}/>
      </TouchableOpacity>
  );
  let headerRight;
  if (state.params?state.params.headerRight:null){
      headerRight = state.params.headerRight;
  }
  let header;
  if (state.params ? state.params.isVisible === true : null){
      header = null;
  }
  return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,header,headerLeft,headerRight}
};

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