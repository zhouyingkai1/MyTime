import React, { Component } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'
import { Toast, SearchBar, Modal, WingBlank } from 'antd-mobile';
import * as TestApi from '../services/testServices'
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
    }
  }
  componentDidMount() {
   TestApi.artcleList({
      page: 1,
      sort: 0,
      categroyId: '',
      bigCate: '',
      userId: 1
   }).then(data=> {
     this.setState({
       dataList: data.data,
       total: data.total
     })
   })
  }
  clickItem(img) {
    this.setState({
      visible: true,
      modalImg: img
    })
  }
  renderItem(item) {
    return(
      <TouchableOpacity onPress={()=> this.clickItem(item.img)}>
        {/* <Image source={{uri: item.img}} style={styles.img}/> */}
        <Text>{item.title}</Text>
      </TouchableOpacity>  
    )
  }
  render(){
    const { navigate } = this.props.navigation
    const { dataList } = this.state
    return(
      <View> 
        <StatusBar barStyle='light-content' />
        <WingBlank size="sm">
        <FlatList
          data={dataList}
          keyExtractor={item=> item.id}
          renderItem={({item, index}) => this.renderItem(item)}
        />
        </WingBlank>
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
    height: 30,
    width: 30
  },
  header: {
    height: 64,
    backgroundColor:'#108ee9',
    paddingTop: 18,
  },
  img:{
    width: WIDTH,
    height: 200,
  },
  modalImg: {
    width: 400,
  }
})

export default Home