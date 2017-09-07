import React, { Component } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import { Toast, ActivityIndicator, Modal, WingBlank } from 'antd-mobile';
import * as TestApi from '../services/testServices'
import { NavigatorBar } from '../components/common/NavigatorBar' 
import Swiper from 'react-native-swiper';
import pxToDp from '../utils/pxToDp'
const WIDTH = Dimensions.get('window').width;
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
    this.state={
      visible: false,
      text: '',
      modalImg: '',
      dataList: [],
      total: 1,
      isrefresh: false,
      currentPage: 1,
      isFull: false,
      didMount: false
    }
  }
  componentDidMount() {
    this.fetchData(1)
    setTimeout(()=> {
      this.setState({
        didMount: true
      })
    }, 100)
  }
  fetchData(page) {
    if(page > this.state.total ){
      this.setState({
        isFull: true
      })
      return
    }
    this.setState({
      currentPage: page
    })
    TestApi.artcleList({
      page: page,
      sort: 0,
      categroyId: '',
      bigCate: '',
      userId: 1
    }).then(data=> {
      if(page>1){
        this.setState({
          dataList: this.state.dataList.concat(data.data),
          total: Math.ceil(data.total/10),
          refresh: false,
          isLoading: false,
        })
      }else{
        this.setState({
          dataList: data.data,
          total: data.total,
          refresh: false
        })
      }
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
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        {
          this.state.isFull? <Text>已为您加载全部</Text>: 
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ActivityIndicator size='small' color='red' animating={this.state.isLoading} />
            <Text style={{color: 'red'}}>玩命加载中……</Text>
          </View>
        }
      </View>
    )
  }
  //下拉加载
  fetchMore() {
    const page = this.state.currentPage + 1
    this.setState({
      isLoading: true,
    })
    this.fetchData(page)
  }
  renderHeader() {
    return(
      
      <Swiper autoplay={true} style={styles.wrapper} >
        {
          this.state.didMount?
            data.map((item, index)=> {
              return(
                <View key={index}>
                  <Image source={{uri: item.img}} style={{height: pxToDp(200), resizeMode: 'center', width: WIDTH}}/>
                </View>  
              )
            }) : <View></View>
        }
      </Swiper>
    )
  }
  refresh() {
    this.fetchData(1)
  }
  render(){
    const { navigate } = this.props.navigation
    const { dataList, isrefresh } = this.state
    return(
      <View> 
        <NavigatorBar barStyle='ligth-content' title='首页'/>
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
          onEndReached={()=> this.fetchMore()}
        />
        
        <Modal
          transparent
          maskClosable={false}
          visible={this.state.visible}
          onClose={()=> this.setState({visible: false})}
          footer={[{ text: '下载', onPress: () => {} }]}
          >
            <View style={{flex: 1}}>
              <Image  source={{uri: this.state.modalImg}} style={styles.modalImg}/>
            </View>  
        </Modal>  
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: pxToDp(60),
    width: pxToDp(60)
  },
  header: {
    height: pxToDp(128),
    backgroundColor:'#108ee9',
    paddingTop: pxToDp(36),
  },
  img:{
    width: WIDTH,
    height: pxToDp(400),
    resizeMode: 'center'
  },
  wrapper: {
    height: pxToDp(400),
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default Home