import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { WingBlank, Button, List } from 'antd-mobile';
import pxToDp from '../utils/pxToDp'
const Item = List.Item;
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
    this.state={
      isUpdate: false
    }
  }
  shouldComponentUpdate(nextProps,nextStates){
    return this.state.isUpdate !== nextStates.isUpdate
  }
  renderHedaer() {
    return(
      <View style={{height: pxToDp(10), backgroundColor: '#eee'}}></View>
    )
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={{flex: 1,backgroundColor: '#f1f1f1'}}>
        <List>
          <Item extra={'点我'} onClick={()=> navigate('Login')}>点击登录</Item>
        </List>
        <List renderHeader={() => this.renderHedaer()}>
          <Item extra={'15'} >阅读</Item>
          <Item extra={'20'} >收藏</Item>
          {
            this.state.isUpdate?<Item extra={'20'} >收藏</Item>: null
          }
          
        </List> 
        <WingBlank size='sm'>
          <Button onClick={()=> this.setState({isUpdate: !this.state.isUpdate})}>退出登录</Button>
        </WingBlank>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: pxToDp(40),
    width: pxToDp(40)
  }
})
export default User