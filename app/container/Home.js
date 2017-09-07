import React, { Component } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Toast, ActivityIndicator, Modal, WingBlank } from 'antd-mobile';
import * as TestApi from '../services/testServices'
import { NavigatorBar, ListForHome } from '../components' 
import Swiper from 'react-native-swiper';
import pxToDp from '../utils/pxToDp'
const WIDTH = Dimensions.get('window').width;
class Home extends Component{
  static navigationOptions = {
    headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
    headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
    headerTitle: '首页',
    tabBarLabel: '首页',
    headerBackTitle: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.fetchData(1)
  }
  
  fetchData(page) {
    this.props.dispatch({
      type: 'home/fetchData',
      payload:{
        page: page,
        sort: 0,
        categroyId: '',
        bigCate: '',
        userId: 1
      }
    })
  }
  
  updateState(name,value) {
    this.props.dispatch({
      type: 'home/updateState',
      payload: {
        [name]: value
      }
    })
  }
  
  render(){
    return(
      <View> 
        <NavigatorBar barStyle='ligth-content' title='首页'/>
        <ListForHome fetchData={this.fetchData} updateState={this.updateState} {...this.props}/>
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: pxToDp(60),
    width: pxToDp(60)
  },
})

export default Home