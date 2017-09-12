import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
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
    this.props.navigation.setParams({
      title: '手机号登录'
    });
  }
  // 手机号登录
  login = ()=> {
    Toast.show('账号或密码不正确')
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
            onChange={(e)=> Toast.show(e)} 
            autoCapitalize={false} 
            autoFocus={true}/>
        </View>
        <View style={styles.item}>
          <View style={styles.icon}></View>
          <TextInput
            numberOfLines={1}
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
    borderBottonWidth: theme.segment.width,
    borderBottonWidth: theme.segment.color,
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