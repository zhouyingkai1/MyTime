import React, { Component } from 'react'
import { Text, Dimensions, View, Image, StatusBar } from 'react-native'
import { WingBlank } from 'antd-mobile';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const window = Dimensions.get('window');
class UserDetail extends Component{
  static navigationOptions = {
     //headerTitle: '详情页',
  };
  constructor(props){
    super(props)
  }
  render(){
    const { params } = this.props.navigation.state
    return(
        <ParallaxScrollView
          style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
          renderBackground={() => <Image source={{ uri: `http://ww4.sinaimg.cn/large/610dc034jw1f41lxgc3x3j20jh0tcn14.jpg`, width: window.width, height: 350 }}/>}
          renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
          parallaxHeaderHeight={ 350 }>
           <StatusBar barStyle='dark-content' />
        <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
       </ParallaxScrollView>
    ) 
  }
}
export default UserDetail