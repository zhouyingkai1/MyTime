import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Toast, Button } from 'antd-mobile';
import px from '../../utils/pxToDp'
import { connect } from 'react-redux'
import theme from '../../utils/theme'
import { MyButton } from '../../components'
class LoginByPhone extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() { 
    StatusBar.setBarStyle('light-content')
    this.props.navigation.setParams({
      title: '手机号登录'
    });
  }
  // 手机号登录
  login = ()=> {
    
    var phone = this.refs.phone._lastNativeText
    var password = this.refs.password._lastNativeText
    if(!phone||!password){
      return Toast.show('账号或密码不得为空')
    }
    this.props.dispatch({
      type: 'login/loginByPhone',
      payload: {
        phone,
        password
      }
    })
  }
  //
  handleInput = (value, type)=> {
    console.log(this,'dthisssssss')
    this.props.dispatch({
      type: 'login/updateState',
      payload: {
        [type]: value
      }
    })
  }
  componentWillUnmount() {
    StatusBar.setBarStyle('default')
  }
  render(){
    const { navigate } = this.props.navigation;
    
    return(
      <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor, paddingLeft: px(30), paddingRight: px(30)}}> 
        <View style={[styles.item,{marginTop: px(20)}]}>
          <View style={styles.icon}></View>
          <TextInput 
            style={styles.input} 
            placeholder='请输入手机号'
            numberOfLines={1} 
            keyboardType='numeric' 
            ref="phone"
            autoCapitalize='none' 
            autoFocus={true}/>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}></View>
          <TextInput
            numberOfLines={1}
            placeholder='请输入密码'
            ref="password"
            autoCapitalize='none'
            secureTextEntry={true}
            style={styles.input}/>
        </View>
        <View style={{marginTop: px(60), marginBottom: px(40)}}>
          <Button activeStyle={{backgroundColor: theme.themeColor, color: '#fff'}} style={styles.loginBtn} onClick={this.login()}>登录</Button>
          <MyButton text='登录'  touchStyle={[styles.buttonBox,]} textStyle={styles.buttonText} />
        </View>
        <MyButton text='重设密码' onPress={()=> this.login()} textStyle={{textDecorationLine: 'underline', textAlign: 'center', textDecorationStyle: 'solid', textDecorationColor: '#333', color: '#666'}}/>
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingLeft: px(10),
    height: px(90),
    alignItems: 'center',
    borderBottomWidth: theme.segment.width,
    borderBottomColor: theme.segment.color,
  },
  icon: {
    width: px(40),
    height: px(40)
  },
  input: {
    height: px(90),
    borderWidth: 0,
    flex: 1
  },
  loginBtn: {
    borderRadius: px(42),
    height: px(84),
    borderWidth: theme.segment.width,
    borderColor: theme.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.themeColor,
    fontSize: px(28),
    backgroundColor: 'transparent'
  },
  // buttonBox: {
  //   borderRadius: px(42),
  //   height: px(84),
  //   borderWidth: theme.segment.width,
  //   borderColor: theme.themeColor,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // buttonText: {
  //   color: theme.themeColor,
  //   fontSize: px(28),
  // },
})
const mapStateToProps = state => ({
  login: state.login,
});
export default connect(mapStateToProps)(LoginByPhone)