import React, { Component } from 'react'
import { Text } from 'react-native'
import { WingBlank } from 'antd-mobile';
class User extends Component{
  static navigationOptions = {
    title: '我的',
  };
  constructor(props){
    super(props)
  }
  render(){
    const { params } = this.props.navigation.state
    return(
      <WingBlank size="sm">
        <Text> User is {params.name}</Text>
      </WingBlank>
    ) 
  }
}
export default User