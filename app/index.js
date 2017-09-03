import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './container/Home'
import UserScreen from './container/User'
import Detail from './page/Detail'
import UserDetail from './page/UserDetail'
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
const App = StackNavigator({
  TabBar: { screen: TabBar },
  Detail: { 
    screen: Detail, 
  },
  UserDetail: { 
    screen: UserDetail, 
  },
});

export default App