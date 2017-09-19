import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Animated } from 'react-native'
import { SearchBar, Toast } from 'antd-mobile'
import theme from '../../utils/theme'
import px from '../../utils/pxToDp'
const NavigatorForHome = (props)=> {
  const { isSearch } = props.home
  const updateState = (name, val)=> {
    props.dispatch({
      type: 'home/updateState',
      payload: {
        [name]: val
      }
    })
  }
  const handleSearch = (val)=> {
    Toast.show(val)
  }
  const handleFocus = ()=> {
    updateState('isSearch', true)
  }
  const handleCancel = ()=> {
    updateState('isSearch', false)
  }
  return(
    <View style={[styles.container,theme.toolbar]}>
      
      {
        !isSearch?
        <TouchableOpacity style={styles.iconBtn} onPress={()=> Toast.show('mic')}>
          <Image source={require('../../img/icon_mic.png')} style={{width: px(48), height: px(48), tintColor: '#fff'}}/>
        </TouchableOpacity> : null
      }
      <View style={{flex: 1, justifyContent: 'center'}}>
       {/* <SearchBar 
        style={{height: px(60),borderRadius: px(30), backgroundColor: 'transparent'}}
        placeholder="搜索音乐、歌词、电台" 
        onSubmit={(val)=> handleSearch(val)}
        onFocus={()=> handleFocus()}
        onCancel={()=> handleCancel()}
        /> */}
        <Text style={{color: '#fff', textAlign: 'center'}}>我的音乐</Text>
      </View>
      {
        !isSearch?
        <TouchableOpacity style={styles.iconBtn} onPress={()=> Toast.show('icon_music')}>
          <Image source={require('../../img/icon_sound.png')} style={{width: px(40), height: px(40), tintColor: '#fff'}}/>
        </TouchableOpacity> : null
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.themeColor,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconBtn: {
    width: px(88),
    height: px(48),
    alignItems: 'center'
  }
})
export default NavigatorForHome