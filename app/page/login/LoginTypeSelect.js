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
  static navigationOptions = ({ navigation, screenProps })=>({
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
      <View> 
        <Image source={requier('../../img/login_bg.jpg')} style={{width: theme.screenWidth, height: theme.screentHeight}}>
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={goBack} >
                <Image source={require('../../img/icon_back.png')} style = {{width: px(48), height: 48, tintColor: '#3333'}}/>
              </TouchableOpacity>
              <Text style={{flex: 1, alignItems: 'center', color: '#333', fontSize: px(28)}}>登录</Text>
              <View style={{width: px(48), height: px(48)}}></View>
            </View>

            <View style={styles.button}>
              <MyButton text='手机号登录' onPress={()=> navigate('LoginByPhone')} touchStyle={[styles.buttonBox,{marginBottom: px(20)}]} textStyle={styles.buttonText} />
              <MyButton text='注册' onPress={()=> console.log(2)} touchStyle={styles.buttonBox} textStyle={styles.buttonText}/>
            </View>
          </View>

          <View style={styles.thredLogin}>
            <Text style={{fontSize: px(24), coloc: '#999'}}>其他登录方式</Text>
            {
              thredLoginIcon.map((item,index)=> {
                return (
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-round', alignItems: 'center'}} key={index}>
                    <TouchableOpacity onPress={()=> Toast.show(`${item.name}登录正在开发中`)} style={{alignItems: 'center'}}>
                      <Image source={item.img} styles={{width: px(60), marginBottom: px(10), height: px(60)}}/>
                      <Text style={{color: '#999', fontSize: px(26)}}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
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
    alignItems: 'cneter',
    paddingLeft: px(30), 
    paddingRight: px(30) 
  },
  button: {
    marginTop: px(278),
    paddingLeft: px(40),
    paddingRight: px(40)
  },
  buttonBox: {
    borderRadius: px(42),
    height: px(84),
    borderWidth: theme.segment.width,
    borderColor: theme.mainColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: theme.mainColor,
    fontSize: px(28)
  },
  thredLogin: {
    height: px(240),
    paddingLeft: px(20),
    paddingRight: px(20)
  }
})
const mapStateToProps = state => ({
  login: state.login,
});
export default connect(mapStateToProps)(LoginTypeSelect)