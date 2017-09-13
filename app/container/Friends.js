import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { WingBlank, Button, List } from 'antd-mobile';

import px from '../utils/pxToDp'
import theme from '../utils/theme'
const Item = List.Item;
class Friends extends Component{
  static navigationOptions = {
    title: '朋友',
    tabBarLabel: '朋友',
    headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
    headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/icon_friends.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
    super(props)
     
  }
  
  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={{flex: 1,backgroundColor: theme.pageBackgroundColor}}>
        <Text>朋友</Text>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: px(46),
    width: px(46)
  }
})
export default Friends