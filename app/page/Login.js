import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, Dimensions, StyleSheet, View, InteractionManager, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import theme from '../utils/theme'
import { WingBlank, Button, Toast } from 'antd-mobile';
import { ImageBtn } from '../components'
import pxToDp from '../utils/pxToDp'
const window = Dimensions.get('window');
class Login extends Component{
  static navigationOptions = ({ navigation, screenProps })=>({
  })
  constructor(props){
    super(props)
  }
  handleLogin() {
    
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
       
    });
  }
  handlethredLogin(type) {
    switch(type){
      case 0:
        Toast.show('新浪登录正在开发中', 1)
        break;
      case 1:
        Toast.show('微信登录正在开发中', 1)
        break;
      case 2:
        Toast.show('qq登录正在开发中', 1)
        break;    
    }
  }
  render(){
    return(
      <View style={{}}>
        <StatusBar barStyle='dark-content'/>
        <Image style={{width: theme.screenWidth, height: theme.screenHeight}} source={require('../img/login_bg.png')}>
          <View style={{alignItems: 'center', paddingTop: theme.toolbar.paddingTop}}>
            <TouchableOpacity style={{alignSelf: 'flex-start', paddingTop: theme.toolbar.paddingTop, marginLeft: pxToDp(20), }}>
              <Image source={require('../img/icon_back.png')} style={{width: pxToDp(40), height: pxToDp(40), tintColor: '#2269d4', alignSelf: 'flex-start'}}/>
            </TouchableOpacity> 
            <View stlye={styles.logo}><Text style={{backgroundColor: 'rgba(0,0,0,0)'}}>Logo</Text></View>
            <View style={styles.form}>
              <View style={styles.formItem}>
                <Image style={styles.userIcon} source={require('../img/icon_user.png')}/>
                <TextInput placeholder='用户名' style={styles.input}/>
              </View>
              <View style={styles.formItem}>
                <Image style={styles.formIcon} source={require('../img/icon_pwd.png')}/>
                <TextInput placeholder='密码'
                  secureTextEntry={true} style={styles.input}/>
              </View>
              <Button style={styles.loginBtn} onClick={()=> this.handleLogin()} type='primary'>登录</Button>
              <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={()=> {()=> {}}}><Text style={{color: '#2269d4', backgroundColor: 'rgba(0,0,0,0)'}}>十秒极速注册</Text></TouchableOpacity>
            </View>

            <View style={styles.thredLogin}>
              <Text style={{color: '#2269d4', alignSelf: 'center', fontSize: 12, backgroundColor: 'rgba(0,0,0,0)'}}>您还可以使用以下方式登录</Text>
              <View style={{justifyContent: 'space-around', marginTop: pxToDp(20),flexDirection: 'row'}}>
                <ImageBtn onPress={()=> this.handlethredLogin(0)} source={require('../img/icon_xl.png')} style={thredBtn}/>
                <ImageBtn onPress={()=> this.handlethredLogin(1)} source={require('../img/icon_wx.png')} style={thredBtn}/>
                <ImageBtn onPress={()=> this.handlethredLogin(2)} source={require('../img/icon_qq.png')} style={thredBtn}/>
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
    height: pxToDp(120),
  },
  form: {
    width: pxToDp(576),
    marginTop: pxToDp(210),
  },
  formIcon: {
    width: pxToDp(40),
    height: pxToDp(53),
    marginRight: pxToDp(26),
  },
  userIcon: {
    width: pxToDp(46),
    height: pxToDp(44),
    marginRight: pxToDp(20),
  },
  formItem: {
    flexDirection: 'row',
    height: pxToDp(84),
    justifyContent: 'space-between',
    marginBottom: pxToDp(16),
    alignItems: 'center',
    borderColor: '#2269d4',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
  },
  loginBtn: {
    marginTop: pxToDp(50),
    marginBottom: pxToDp(20),
    height: pxToDp(74)
  },
  thredLogin: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: pxToDp(140),
    width: pxToDp(322),
  },
  
})
const thredBtn= {
  width: pxToDp(74), 
  height: pxToDp(74), 
  borderRadius: pxToDp(37),
  tintColor: '#108ee9'
}

export default connect((state)=> {login: state.login})(Login)