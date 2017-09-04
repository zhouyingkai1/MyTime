import React, { Component } from 'react'
import { Text, Dimensions, View, Image, StatusBar } from 'react-native'
import { Button } from 'antd-mobile';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
const window = Dimensions.get('window');
class Detail extends Component{
  static navigationOptions = {
     headerTitle: '第二个',
  };
  constructor(props){
    super(props)
  }
  render(){
    const { params } = this.props.navigation.state
    const { navigate } = this.props.navigation
    return(
        <ParallaxScrollView
          style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
          renderBackground={() => <Image source={{ uri: params.item.img, width: window.width, height: 350 }}/>}
          renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>{params.item.title}</Text>}
          parallaxHeaderHeight={ 350 }>
           <StatusBar barStyle='light-content' />
        <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
        <Text>{params.item.img}</Text>
       </ParallaxScrollView>
    ) 
  }
}
export default Detail