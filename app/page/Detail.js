import React, { Component } from 'react'
import {StyleSheet, View, WebView, Image, Dimensions, InteractionManager, StatusBar, Text, TouchableOpacity, ActivityIndicator, Alert, Linking, Clipboard, Modal, PanResponder, Animated, ToastAndroid} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import pxToDp from '../utils/pxToDp'
import NavigatorBar from '../components/common/NavigatorBar'
const window = Dimensions.get('window');
class Detail extends Component{
  constructor(props){
    super(props)
    this.state = {
      didMount: false,
      showMoreContent: false,
      bottomInfoBarBottomValue: new Animated.Value(0),
      title: '名称'
    };
    this.moveYThreshold = 5;
    this.animationFlag = true;
  }
  
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        let y = gestureState.dy;
        if(y > this.moveYThreshold && this.animationFlag) { //drag down
          if (this.state.bottomInfoBarBottomValue === pxToDp(0)) return;
          this.animationFlag = false;
          Animated.timing(this.state.bottomInfoBarBottomValue, {
            toValue: 0,
            duration: 300
          }).start(() => this.animationFlag = true);
        }
        if(y < -this.moveYThreshold && this.animationFlag) {  //drag up
          if (this.state.bottomInfoBarBottomValue === pxToDp(-90)) return;
          this.animationFlag = false;
          Animated.timing(this.state.bottomInfoBarBottomValue, {
            toValue: pxToDp(-90),
            duration: 300
          }).start(() => this.animationFlag = true);
        }
      }
    });
  }
  componentDidMount(){
    // super.componentDidMount();
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        didMount: true
      });
    });
  }
  // <ParallaxScrollView
  //   style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
  //   renderBackground={() => <Image source={{ uri: params.item.img, width: window.width, height: 350 }}/>}
  //   renderFixedHeader={() => {}}
  //   parallaxHeaderHeight={ 350 }>
  // </ParallaxScrollView>
  render(){
    const { params } = this.props.navigation.state
    const { navigate, goBack } = this.props.navigation
    const { bottomInfoBarBottomValue } = this.state
    return(
      <View style={{flex: 1}}>
        {/* <NavigatorBar barStyle='light-content' goBack={goBack} leftBtnText={true} title={params.item.title}/> */}
          
        <View style={[styles.container, {backgroundColor: '#f1f1f1'}]}>
          <View style={styles.contentContainer} {...this._panResponder.panHandlers}>
            {this.state.didMount ?
              <WebView
                ref={(ref)=>{this.webView = ref}}
                style={[styles.webView, {backgroundColor: '#f1f1f1'}]}
                source={{uri: params.item.url}}
                renderLoading={this._renderLoading.bind(this)}
                renderError={this._renderError.bind(this)}
                startInLoadingState={true}
              />
              :
              null
            }
          </View>
          <Animated.View style={[styles.bottomInfoBar, {bottom: bottomInfoBarBottomValue, backgroundColor: '#f1f1f1', borderTopColor: '#e1e1e1'}]}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>后退</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>前进</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>点赞</Text>
            </View>
          </Animated.View>
        </View> 

      </View>  
    ) 
  }
  _renderLoading(){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color='#333' size="large"/>
        <Text style={{marginTop: 10, color: '#333'}}>玩命加载中...</Text>
      </View>
    );
  }

  _renderError(){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text>Oooops~, 出错了, 重新刷新下吧～</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    height: pxToDp(600),
  },
  webView: {
    flex: 1
  },
  bottomInfoBar: {
    position: 'absolute',
    height: pxToDp(90),
    width: window.width,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1
  },
});
export default Detail