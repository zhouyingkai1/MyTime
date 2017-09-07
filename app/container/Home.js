import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Toast } from 'antd-mobile';
import { NavigatorBar, ListForHome } from '../components' 
import pxToDp from '../utils/pxToDp'
import { connect } from 'react-redux'
class Home extends Component{
  // static navigationOptions = {
  //   headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
  //   headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
  //   headerTitle: '首页',
  //   tabBarLabel: '首页',
  //   headerBackTitle: null,
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../img/home.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // };
  constructor(props){
    super(props)
  }
  componentDidMount() {
    console.log(this.props,'propsrrrrrrrrrrrrrr')
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

export default connect((state)=> {home: state.home})(Home)