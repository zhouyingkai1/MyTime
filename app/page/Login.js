import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, Dimensions, StyleSheet, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import theme from '../utils/theme'
import { WingBlank, Button } from 'antd-mobile';
import { ImageBtn } from '../components'
import pxToDp from '../utils/pxToDp'
import theme from '../utils/theme'
const window = Dimensions.get('window');
class Login extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content'/>
        <Image style={{width: theme.screenWidth, height: theme.screenHeight}} source={require('../img/login_bg.png')}>
          <View style={{flex: 1, alignItems: 'center', paddingTop: theme.toolbar.paddingTop}}>
            <Image source={require('../img/icon_back.png')} style={{width: pxToDp(40), height: pxToDp(40), alignSelf: 'flex-start'}}/>
            <View stlye={styles.logo}><Text>Logo</Text></View>
           
            <View style={styles.form}>
              <View style={styles.formItem}>
                <Image style={styles.formIcon} source={require('../img/icon_user.png')}/>
                <TextInput style={styles.input}/>
              </View>
              <View style={styles.formItem}>
                <Image style={styles.formIcon} source={require('../img/icon_pwd.png')}/>
                <TextInput style={styles.input}/>
              </View>
              <Button style={styles.loginBtn} type='primary'>登录</Button>
              <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={}><Text style={{color: '#2269d4'}}>十秒极速注册</Text></TouchableOpacity>
            </View>

            <View style={styles.thredLogin}>
              <Text style={{color: '#2269d4', fontSize: 12}}>您还可以使用以下方式登录</Text>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <ImageBtn onPress={} source={require('../img/icon_wx.png')} style={{width: pxToDp(74), height: pxToDp(74), borderRadius: pxToDp(37)}}/>
                <ImageBtn onPress={} source={require('../img/icon_wx.png')} style={{width: pxToDp(74), height: pxToDp(74), borderRadius: pxToDp(37)}}/>
                <ImageBtn onPress={} source={require('../img/icon_wx.png')} style={{width: pxToDp(74), height: pxToDp(74), borderRadius: pxToDp(37)}}/>
              </View>
            </View>
          </View>
        </Image>
      </View>
    ) 
  }

}
const styles = StyleSheet.create({
  logo: {
    marginTop: pxToDp(180),
    width: pxToDp(473),
    marginBottom: pxToDp(210)
  },
  form: {
    width: pxToDp(576),
  },
  formIcon: {
    width: pxToDp(45),
    height: pxToDp(45),
    marginRight: 10
  },
  formItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    borderColor: '#2269d4',
    border: 0,
    borderBottomWidth: theme.segment.width
  },
  loginBtn: {
    flex: 1,
    marginTop: pxToDp(80),
    marginBottom: pxToDp(20),
    height: pxToDp(74)
  },
  thredLogin: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: pxToDp(40),
    width: pxToDp(322),
  }
})
export default connect((login)=> login)(Login)