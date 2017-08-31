import { StackNavigator } from 'react-navigation';
import HomeScreen from './container/Home'
import UserScreen from './container/User'
const App = StackNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen }
});
export default App