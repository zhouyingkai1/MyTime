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
  const { } = props
  return(
    <ScrollView style={{flex: 1}}>
      <View stlye={styles.position}><Text style={{color: 'red', textAlign: 'center'}}>ddddd</Text></View>
      <View style={{flex: 1}}>
        <Swiper autoplay={true} style={{height: px(400)}} >
          {
            imgData.map((item, index)=> {
              return(
                <View key={index}>
                  <Image source={{uri: item.img}} style={{height: px(400), width: theme.screenWidth}}/>
                </View>  
              )
            }) 
          }
        </Swiper>
        <View style={styles.iconList}>
          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image srouce={require('../../img/icon_fm.png')} style={styles.icon}/>
            </View>
            <Text>私人FM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image srouce={require('../../img/icon_fm.png')} style={styles.icon}/>
            </View>
            <Text>私人FM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <View style={styles.imgBorder}>
              <Image srouce={require('../../img/icon_fm.png')} style={styles.icon}/>
            </View>
            <Text>私人FM</Text>
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
    // <View style={{flex: 1}}>
    //   <View stlye={styles.position}><Text style={{color: 'red', textAlign: 'center'}}>ddddd</Text></View>
    //   <ScrollView style={{flex: 1}}>
    //     <View style={{flex: 1}}>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //       <View><Text>ddddd</Text></View>
    //     </View>
    //   </ScrollView>
    // </View>
  )
}
const styles = StyleSheet.create({
  position: {
    position: absolute,
    zIndex: -10,
    top: px(20)
  },
  iconList: {
    flexDirection: 'row',
    alignItems: 'center',
    height: px(230),
    justifyContent: 'space-around'
  },
  iconBox: {
    width: px(300),
    height: px(230),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: theme.segment.width,
    borderColor: '#999'
  },
  imgBorder: {
    border: theme.segment.width,
    color: theme.themeColor,
    height: px(150),
    width: px(150),
    borderRadius: px(75),
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: px(100),
    heighh: px(100),
    tintColor: theme.themeColor
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
}],
export default Recommend