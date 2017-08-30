import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button, Toast, WingBlank, ActivityIndicator, Modal } from 'antd-mobile';
class Home extends Component{
  static navigationOptions = {
    title: '首页',
  };
  constructor(props){
    super(props)
    this.state={
      visible: false
    }
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <WingBlank size="sm">
        <View>
          <Button style={{marginTop: 15, marginBottom: 15}} type='primary' onClick={()=> {this.setState({visible: true})}}>可以吗</Button>
          <Button type='primary' onClick={()=> navigate('User',{name: '周莹凯'})}>跳转呀</Button>
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
    ) 
  }
}
export default Home