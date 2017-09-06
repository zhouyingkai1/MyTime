import React, { Component } from 'react'
import { Text, Dimensions, View, Image, StatusBar } from 'react-native'
import { WingBlank } from 'antd-mobile';

const window = Dimensions.get('window');
class Login extends Component{
  static navigationOptions = {
     headerTitle: '登录',
  };
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>

      </View>
    ) 
  }
}
export default Login