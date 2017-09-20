import React, {Component} from 'react'
import { View, StyleSheet, Text, Image, ScrollView, InteractionManager } from 'react-native'
import {Toast, Button } from 'antd-mobile';
import { NavigatorForHome, Recommend } from '../components'
import px from '../utils/pxToDp'
import {connect} from 'react-redux'
import theme from '../utils/theme'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '发现音乐',
    header: null,
    tabBarIcon: ({tintColor}) => (<Image
      source={require('../img/icon_logo.png')}
      style={[styles.icon, {tintColor: tintColor}]}
    />)
  };
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setTimeout(()=> {
      this.props.dispatch({
        type: 'home/updateState',
        payload:{
          isDidMount: true
        }
      })
    },1400)
    InteractionManager.runAfterInteractions(()=>{
      storage.load({
        key: 'lized'
       }).then(ret => {
          this.props.dispatch({
            type: 'home/updateState',
            payload:{
              lized: ret
            }
          })
        }).catch(err => {
            if(err.name == 'NotFoundError'){
              this.props.dispatch({
                type: 'home/getPersonalized',
                payload: {}
              })
            }
        })
      storage.load({
        key: 'newSongs'
       }).then(ret => {
          this.updateState('newSongs',ret)
        }).catch(err => {
            if(err.name == 'NotFoundError'){
              this.props.dispatch({
                type: 'home/getNewSong',
                payload: {}
              })
            }
        })
      storage.load({
        key: 'mvList'
       }).then(ret => {
          this.updateState('mvList',ret)
        }).catch(err => {
            if(err.name == 'NotFoundError'){
              this.props.dispatch({
                type: 'home/getMv',
                payload: {}
              })
            }
        })
      storage.load({
        key: 'djList'
       }).then(ret => {
          this.updateState('djList',ret)
        }).catch(err => {
            if(err.name == 'NotFoundError'){
              this.props.dispatch({
                type: 'home/getDjProgram',
                payload: {}
              })
            }
        })
      storage.load({
        key: 'banner'
       }).then(ret => {
         this.props.dispatch({
           type: 'home/updateState',
           payload:{
             banner: ret
           }
         })
        }).catch(err => {
            if(err.name == 'NotFoundError'){
              this.props.dispatch({
                type: 'home/getBanner',
                payload: {}
              })
            }
        })
      storage.load({
        key: 'privatecontent'
       }).then(ret => {
          this.updateState('privatecontent',ret)
        }).catch(err => {
            if(err.name == 'NotFoundError'){
              this.props.dispatch({
                type: 'home/getPrivatecontent',
                payload: {}
              })
            }
        })
      storage.load({
        key: 'userInfo'
       }).then(ret => {
          //根据登录信息 请求首页数据
          
        }).catch(err => {
          switch (err.name) {
            case 'NotFoundError':
            
              break;
            case 'ExpiredError':
              // TODO
              break;
          }
        })
    })
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
        <NavigatorForHome {...this.props}/>
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
          <Recommend tabLabel="音乐" {...this.props}/>
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