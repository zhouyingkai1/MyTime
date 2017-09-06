import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import { Toast, ActivityIndicator, Modal, WingBlank } from 'antd-mobile';
import theme from '../utils/theme'
import pxToDp from '../utils/pxToDp'

import * as TestApi from '../services/testServices'
const data= [{
  id: 1,
  img: 'http://ww4.sinaimg.cn/large/610dc034jw1f41lxgc3x3j20jh0tcn14.jpg',
},{
  id: 2,
  img: 'http://ww4.sinaimg.cn/large/610dc034jw1f76axy6xcsj20u00yqq49.jpg',
},{
  id: 3,
  img: 'http://ww2.sinaimg.cn/large/610dc034jw1f72v5ra09fj20u011hdit.jpg',
},{
  id: 4,
  img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
},{
  id: 5,
  img: 'http://ac-olwhhm4o.clouddn.com/4063qegYjlC8nx6uEqxV0kT3hn6hdqJqVWPKpdrS',
},{
  id: 6,
  img: 'http://ww4.sinaimg.cn/large/7a8aed7bjw1f1yjc38i9oj20hs0qoq6k.jpg',
},{
  id: 7,
  img: 'http://ww4.sinaimg.cn/large/7a8aed7bjw1ezrtpmdv45j20u00spahy.jpg',
}]
class Home extends Component{
  static navigationOptions = {
    headerTitleStyle: { fontSize: 16, color:'white', fontWeight:'500'},
    headerStyle: {backgroundColor:'#108ee9', shadowOpacity: 0},
    headerTitle: '自定义',
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
    this.state={
      visible: false,
      text: '',
      modalImg: '',
      dataList: [],
      total: 1,
      isrefresh: false,
      currentPage: 1
    }
  }
  componentDidMount() {
    console.log(this.props,'this.props')
    this.fetchData(1)
  }
  fetchData(page) {
    TestApi.artcleList({
      page: page,
      sort: 0,
      categroyId: '',
      bigCate: '',
      userId: 1
    }).then(data=> {
      this.setState({
        dataList: data.data,
        total: data.total,
        refresh: false
      })
    })
  }
  clickItem(item) {
    this.props.navigation.navigate('Detail',{item: item})
  }
  renderItem(item) {
    return(
      <TouchableOpacity style={{height: 60, justifyContent: 'center'}} onPress={()=> this.clickItem(item)}>
        {/* <Image source={{uri: item.img}} style={styles.img}/> */}
        <WingBlank size="lg">
          <Text>{item.title}</Text>
        </WingBlank>
      </TouchableOpacity>  
    )
  }
  renderLine(){
    return(
      <View style={{height: 1, flex: 1, backgroundColor: '#e1e1e1', marginBottom: 5}}>
      </View>  
    )
  }
  renderFooter() {
    return(
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <ActivityIndicator size='small' color='red' animating={this.state.isLoading} />
        <Text style={{color: 'red'}}>玩命加载中……</Text>
      </View>
    )
  }
  renderHeader() {
    return(
      <View style={{backgroundColor: '#f1f1f1', height: 50, justifyContent: 'center'}}>
        <Text style={{color: '#333', }}>
          热门
        </Text>  
      </View>  
    )
  }
  refresh() {
    this.fetchData(2)
  }
  render(){
    const { navigate } = this.props.navigation
    const { dataList, isrefresh } = this.state
    return(
      <View> 
        <StatusBar barStyle='light-content' />
        <FlatList
          data={dataList}
          keyExtractor={item=> item.id}
          ItemSeparatorComponent={()=> this.renderLine()}
          ListFooterComponent={()=> this.renderFooter()}
          ListHeaderComponent={()=> this.renderHeader()}
          onRefresh={()=> this.refresh()}
          refreshing={isrefresh}
          renderItem={({item, index}) => this.renderItem(item)}
          onEndReachedThreshold={.3}
          onEndReached={()=> this.setState({isLoading: true})}
        />
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: pxToDp(60),
    width: pxToDp(60)
  },
  img:{
    width: theme.screenWidth,
    height: pxToDp(400),
  },
})

export default connect((home)=> home)(Home)