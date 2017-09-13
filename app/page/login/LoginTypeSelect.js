import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Toast } from 'antd-mobile';
import px from '../../utils/pxToDp'
import { connect } from 'react-redux'
import theme from '../../utils/theme'
import { MyButton } from '../../components'
const thredLoginIcon = [
  {
    img: require('../../img/icon_wx.png'),
    name: '微信'
  },{
    img: require('../../img/icon_qq.png'),
    name: 'QQ'
  },{
    img: require('../../img/icon_xl.png'),
    name: '新浪微博'
  },{
    img: require('../../img/icon_wx.png'),
    name: '网易邮箱'
  },
]
class LoginTypeSelect extends Component{
  static navigationOptions = ()=>({
    header: null,
  })
  constructor(props){
    super(props)
  }
  componentDidMount() { 
    console.log(this.props,'rrrrrrthis.props')
  }
 
  render(){
    const { goBack, navigate } = this.props.navigation;
    return(
      <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor, height: theme.screentHeight}}> 
        <Image source={require('../../img/login_bg.jpg')} style={{flex: 1, width: theme.screenWidth, height: theme.screentHeight}}>
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={goBack} >
                <Image source={require('../../img/icon_back.png')} style = {{width: px(48), height: px(48), tintColor: '#3333'}}/>
              </TouchableOpacity>
              <Text style={{flex: 1, textAlign: 'center',backgroundColor: 'transparent', alignItems: 'center', color: '#333', fontSize: px(32)}}>登录</Text>
              <View style={{width: px(48), height: px(48)}}></View>
            </View>

            <View style={styles.button}>
              <MyButton text='手机号登录' onPress={()=> navigate('LoginByPhone')} touchStyle={[styles.buttonBox,{marginBottom: px(20)}]} textStyle={styles.buttonText} />
              <MyButton text='注册' onPress={()=> console.log(2)} touchStyle={styles.buttonBox} textStyle={styles.buttonText}/>
            </View>
          </View>

          <View style={styles.thredLogin}>
            <Text style={{fontSize: px(24), backgroundColor: 'transparent', textAlign: 'center', color: '#999'}}>其他登录方式</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: px(20) }}x>
              {
                thredLoginIcon.map((item,index)=> {
                  return (
                      <TouchableOpacity key={index} onPress={()=> Toast.show(`${item.name}登录正在开发中`)} style={{width: px(140), alignItems: 'center'}}>
                        <Image source={item.img} style={{width: px(70), marginBottom: px(10), height: px(70)}}/>
                        <Text style={{color: '#999', fontSize: px(26)}}>{item.name}</Text>
                      </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        </Image>
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  header: {
    height: theme.toolbar.height,
    paddingTop: theme.toolbar.paddingTop,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px(20), 
    paddingRight: px(20) 
  },
  button: {
    marginTop: px(328),
    paddingLeft: px(40),
    paddingRight: px(40)
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
    color: theme.themeColor,
    fontSize: px(28),
    backgroundColor: 'transparent',
  },
  thredLogin: {
    height: px(190),
    paddingLeft: px(20),
    paddingRight: px(20)
  }
})
const mapStateToProps = state => ({
  login: state.login,
  app: state.app
});
export default connect(mapStateToProps)(LoginTypeSelect)