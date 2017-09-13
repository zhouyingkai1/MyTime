/*
个性推荐
*/
import React from 'react'
import { View, Image, Text, StyleSheet, ScrollView, InteractionManager, TouchableOpacity } from 'react-native'
import {Toast, Button } from 'antd-mobile';
import px from '../../utils/pxToDp'
import theme from '../../utils/theme'
import Swiper from 'react-native-swiper';

const Recommend = (props)=> {
  // const { } = props
  return(
    <ScrollView style={{flex: 1}}>
      <View stlye={styles.position}><Text style={{color: 'red', textAlign: 'center'}}>ddddd</Text></View>
      <View style={{flex: 1}}>
        <Swiper autoplay={true} style={{height: px(260)}} >
          {
            imgData.map((item, index)=> {
              return(
                <View key={index}>
                  <Image source={{uri: item.img}} style={{height: px(260), width: theme.screenWidth}}/>
                </View>  
              )
            }) 
          }
        </Swiper>
        <View style={styles.iconList}>
          <TouchableOpacity onPress={()=> console.log(2222)} style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image source={require('../../img/icon_fm.png')} style={styles.icon}/>
            </View>
            <Text style={styles.iconText}>私人FM</Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=> Toast.show(2)}  style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image source={require('../../img/icon_fm.png')} style={styles.icon}/>
            </View>
            <Text style={styles.iconText}>每日推荐</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Toast.show(2)}  style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image source={require('../../img/icon_cal.png')} style={[styles.icon,{justifyContent:'center',alignItems:'center'}]}>
                <Text style={{marginTop: px(12), color: theme.themeColor, fontSize: px(20)}}>14</Text>
              </Image>
            </View>
            <Text style={styles.iconText}>歌单</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> Toast.show(3)}  style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image source={require('../../img/icon_rank.png')} style={styles.icon}/>
            </View>
            <Text style={styles.iconText}>排行榜</Text>
          </TouchableOpacity>
        </View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
        <View><Text>ddddd</Text></View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    zIndex: -10,
    bottom: px(20)
  },
  iconList: {
    flexDirection: 'row',
    alignItems: 'center',
    height: px(190),
    justifyContent: 'space-around',
    borderBottomWidth: theme.segment.width,
    borderColor: '#999'
  },
  iconBox: {
    width: px(200),
    height: px(190),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBorder: {
    borderWidth: theme.segment.width,
    borderColor: theme.themeColor,
    height: px(100),
    width: px(100),
    borderRadius: px(75),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: px(10)
  },
  icon: {
    width: px(52),
    height: px(52),
    tintColor: theme.themeColor
  },
  iconText: {
    color: '#333',
    fontSize: px(20)
  }
})
const imgData= [{
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
export default Recommend