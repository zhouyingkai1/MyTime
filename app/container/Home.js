import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Toast, Button } from 'antd-mobile';
import { NavigatorBar, ListForHome } from '../components' 
import pxToDp from '../utils/pxToDp'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class Home extends Component{
  static navigationOptions = {
    title: '首页',
    headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
    headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
    tabBarLabel: '首页',
    header: null,
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
        <Button onClick={this.props.navigation.navigate('LoginTypeSelect')}></Button>
        <View style={{flex: 1}}>
          <ScrollableTabView>
            <ListForHome tabLabel="React" fetchData={this.fetchData} updateState={this.updateState} {...this.props}/>
            <Text tabLabel="Flow">flow</Text>
            <Text tabLabel="Jest">jest</Text>
          </ScrollableTabView>
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
const mapStateToProps = state => ({
  home: state.home,
});
export default connect(mapStateToProps)(Home)