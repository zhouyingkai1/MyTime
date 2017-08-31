import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { WingBlank } from 'antd-mobile';
class User extends Component{
  static navigationOptions = {
    title: '我的',
    tabBarLabel: '我的',
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
        <WingBlank size="sm">
          <Text> User page</Text>
        </WingBlank>
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