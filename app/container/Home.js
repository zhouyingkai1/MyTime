import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import { Button, Toast, WingBlank,  ActivityIndicator, Modal } from 'antd-mobile';
class Home extends Component{
  static navigationOptions = {
    title: '自定义',
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
      visible: false
    }
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content')
    Toast.info('执行', 1)
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <View> 
        <StatusBar barStyle='dark-content' />
        <WingBlank size="sm">
          <View>
            <Button style={{ marginBottom: 15}} type='primary' onClick={()=> {this.setState({visible: true})}}>可以吗</Button>
            <Button type='primary' onClick={()=> navigate('Detail',{id: 10})}>跳转lo</Button>
            <ActivityIndicator
              text="Loading..."
            />
            <Modal
              title="这是 title"
              transparent
              maskClosable={false}
              visible={this.state.visible}
              onClose={()=> {}}
              footer={[{ text: '确定', onPress: () => { this.setState({visible: false})} }]}
            >
              <Image style={{ height: 300}}  source={{uri: 'http://ww4.sinaimg.cn/large/610dc034jw1f41lxgc3x3j20jh0tcn14.jpg'}} />
            </Modal>
          </View>  
        </WingBlank>
      </View>  
    ) 
  }
}
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30
  }
})

export default Home