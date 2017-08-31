import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './container/Home'
import UserScreen from './container/User'
import Detail from './page/Detail'
import UserDetail from './page/UserDetail'
const StackOptions = ({navigation}) => {
    let {state,goBack} = navigation;
    // 用来判断是否隐藏或显示header
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const headerTitle = '详情页';
    const headerTitleStyle = {fontSize: 16,color:'white',fontWeight:'500'}
    const headerBackTitle = false;
    
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle}
};

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
    navigationOptions: ({navigation}) => StackOptions({navigation})
  },
  UserDetail: { 
    screen: UserDetail, 
  },
});

export default App