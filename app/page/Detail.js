import React, { Component } from 'react'
import {StyleSheet, View, WebView, Image, Dimensions, InteractionManager, StatusBar, Text, TouchableOpacity, ActivityIndicator, Alert, Linking, Clipboard, Modal, PanResponder, Animated, ToastAndroid} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import px2dp from '../utils/px2dp'
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
  static navigationOptions = {
    headerTitle: 'ddd'
  };
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        let y = gestureState.dy;
        if(y > this.moveYThreshold && this.animationFlag) { //drag down
          if (this.state.bottomInfoBarBottomValue === px2dp(0)) return;
          this.animationFlag = false;
          Animated.timing(this.state.bottomInfoBarBottomValue, {
            toValue: 0,
            duration: 300
          }).start(() => this.animationFlag = true);
        }
        if(y < -this.moveYThreshold && this.animationFlag) {  //drag up
          if (this.state.bottomInfoBarBottomValue === px2dp(-45)) return;
          this.animationFlag = false;
          Animated.timing(this.state.bottomInfoBarBottomValue, {
            toValue: px2dp(-45),
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
    const { navigate } = this.props.navigation
    const { bottomInfoBarBottomValue } = this.state
    return(
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
          
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
    height: 600,
  },
  webView: {
    flex: 1
  },
  bottomInfoBar: {
    position: 'absolute',
    height: 45,
    width: window.width,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1
  },
});
export default Detail