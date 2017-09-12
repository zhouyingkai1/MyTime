import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Toast } from 'antd-mobile';
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
    this.props.dispatch({
      type: 'login/loginByPhone',
      payload: {}
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
      <View styles={{flex: 1, backgroundColor: theme.pageBackgroundColor, paddingLeft: px(30), paddingRight: px(30)}}> 
        <View style={[styles.item,{marginTop: px(20)}]}>
          <View style={styles.icon}></View>
          <TextInput 
            style={styles.input} 
            placeholder='请输入手机号'
            numberOfLines={1} 
            keyboardType='numeric' 
            onChange={(value)=> this.handleInput(value,'phone')} 
            autoCapitalize={false} 
            autoFocus={true}/>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}></View>
          <TextInput
            numberOfLines={1}
            onChange={(value)=> this.handleInput(value,'password')} 
            placeholder='请输入密码'
            autoCapitalize={false}
            secureTextEntry={true}
            style={styles.input}/>
        </View>
        <View style={{marginTop: px(60), marginBottom: px(60)}}>
          <MyButton text='登录' onPress={()=> this.login()} touchStyle={[styles.buttonBox,{marginBottom: px(20)}]} textStyle={styles.buttonText} />
        </View>
        <MyButton text='重设密码' onPress={()=> this.login()} text={{textDecorationLine: 'underline', textDecorationStyle: 'solid', textDecorationColor: '#333', color: '#666'}}/>
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
    borderWidth: 0
  },
  buttonBox: {
    borderRadius: px(42),
    height: px(84),
    borderWidth: theme.segment.width,
    borderColor: theme.themeColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#333',
    fontSize: px(28)
  },
})
const mapStateToProps = state => ({
  login: state.login,
});
export default connect(mapStateToProps)(LoginByPhone)