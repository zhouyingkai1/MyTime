import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Toast } from 'antd-mobile';
import { NavigatorBar, ListForHome } from '../components' 
import pxToDp from '../utils/pxToDp'
import { connect } from 'react-redux'
class Home extends Component{
  static navigationOptions = {
    title: '首页',
    headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
    headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
    tabBarLabel: '首页',
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
    this.props.dispatch({
      type: 'home/updateState',
      payload: {
        didMount: true
      }
    })
    this.props.dispatch({
      type: 'home/fetchData',
      payload:{
        page: 1,
        sort: 0,
        categroyId: '',
        bigCate: '',
        userId: 1
      }
    })
  }
  
  
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#f1f1f1'}}> 
        {/* <NavigatorBar barStyle='light-content' title='首页'/> */}
        <View style={{flex: 1}}>
         <ListForHome fetchData={this.fetchData} updateState={this.updateState} {...this.props}/>
        </View>  
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

export default connect((state)=> state)(Home)