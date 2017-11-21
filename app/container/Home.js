import React, {Component} from 'react'
import { View, StyleSheet, Text, Image, ScrollView, InteractionManager } from 'react-native'
import {Toast, Button } from 'antd-mobile';
import px from '../utils/pxToDp'
import {connect} from 'react-redux'
import theme from '../utils/theme'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    headerTitle: '首页',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('../img/icon_logo.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    />)
  };
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    
  }
  updateState = ( name, val) => {
    this.props.dispatch({
      type: 'home/updateState',
      [name]: val
    })
  }
  render() {
    const { isSearch } = this.props.home
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollableTabView
          tabBarUnderlineStyle={{backgroundColor: 'transparent',position: 'absolute', bottom: -px(2), borderColor: theme.themeColor, borderBottomWidth: px(4)}}
          tabBarActiveTextColor={theme.themeColor}
          tabBarInactiveTextColor='#333'
          tabBarBackgroundColor='#fafafa'
          prerenderingSiblingsNumber={1}
          tabBarPosition='overlayTop'
          backgroundColor={'rgba(240,240,240,0.98)'}
          tabBarTextStyle={{marginTop: px(20), fontSize: px(26),fontWeight: '400'}}
        >
          <Text tabLabel="视频">歌单</Text>
          <Text tabLabel="电台">主播电台</Text>
        </ScrollableTabView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    height: px(48),
    width: px(48)
  }
})
const mapStateToProps = (state)=> ({
    home: state.home,
    app: state.app
})
export default connect(mapStateToProps)(Home)