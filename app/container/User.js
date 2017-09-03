import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { WingBlank } from 'antd-mobile';
class User extends Component{
  static navigationOptions = {
    title: '我的',
    tabBarLabel: '我的',
    headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
    headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/me.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <View>
          <Text>User page</Text>
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: 19,
    width: 19
  }
})
export default User