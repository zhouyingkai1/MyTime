import React, {Component} from 'react'
import { View, StyleSheet, ScrollView, InteractionManager } from 'react-native'
import {Toast, Button } from 'antd-mobile';
import { NavigatorForHome } from '../components'
import px from '../utils/pxToDp'
import {connect} from 'react-redux'
import theme from '../utils/theme'
// import ScrollableTabView from 'react-native-scrollable-tab-view'

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
    InteractionManager.runAfterInteractions(()=>{
      storage.load({
        key: 'userInfo'
       }).then(ret => {
          //根据登录信息 请求首页数据
          this.props.dispatch({
            type: 'home/getPersonalized',
            payload: {}
          })
        }).catch(err => {
          switch (err.name) {
            case 'NotFoundError':
              this.props.navigation.navigate('LoginTypeSelect')
              break;
            case 'ExpiredError':
              // TODO
              break;
          }
        })
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
        <NavigatorForHome {...this.props}/>
        <ScrollView style={{flex: 1}}>

        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    height: px(60),
    width: px(60)
  }
})
const mapStateToProps = (state)=> ({
    home: state.home,
    app: state.app
})
export default connect(mapStateToProps)(Home)