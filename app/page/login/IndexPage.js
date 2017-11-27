import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import px from '../../utils/pxToDp'
class IndexPage extends Component{
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props)
     
  }
  
  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.logo}>
          <Image 
            style={{height: px(160), width: px(160), borderRadius: px(20), marginBottom: px(20)}}
            source={{uri: 'http://img1.timeface.cn/album/avator/101d2f587df7fe5fa60c36289f8e3fc0.jpg'}} />
          <Text>游无界</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={[styles.button, styles.register]}>
            <Text style={[styles.text,{color: '#fff'}]}>注册</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{backgroundColor: '#6d6c6d'}]}> 
            <Text style={[styles.text, {color: '#fff'}]}>登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({
  logo: {
    marginTop: px(300),
    flex: 1,
    alignItems: 'center'
  },
  buttonBox: {
    height: px(100),
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
  },
  register: {
    backgroundColor: '#04a0f3'
  }
})
export default IndexPage