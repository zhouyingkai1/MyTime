/*
个性推荐
*/
import React from 'react'
import { View, Image, Text, StyleSheet, FlatList, InteractionManager, TouchableOpacity } from 'react-native'
import {Toast, Button } from 'antd-mobile';
import px from '../../utils/pxToDp'
import theme from '../../utils/theme'
import Swiper from 'react-native-swiper';
import HomeCommonItem from './HomeCommonItem'
const Recommend = (props)=> {
  const { banner, lized, newSongs, mvList, djList, privatecontent, listsOrder, navigation } = props.home
  console.log(props,'ss')
  const renderItem = (item)=> {
    return(
      <View></View>
    )
  }
  //点击banner跳转时间
  const bannerPress = (item)=> {

  }
  const renderHeader = ()=> {
    return(
      <View style={{flex: 1}}>
        <View style={{height: px(80)}}></View>
        {/* banner 轮播 */}
        <Swiper autoplay={true} style={{height: px(280)}} >
           {
            banner.map((item, index)=> {
              return(
                <TouchableOpacity key={index} onPress={()=> bannerPress(item)}>
                  <Image source={{uri: item.pic}} style={{height: px(280), width: theme.screenWidth}}>
                    <View style={{position: 'absolute', borderTopLeftRadius: 20,backgroundColor: item.titleColor, 
                    paddingLeft: px(20),  borderBottomLeftRadius: 20, height: px(32), justifyContent: 'center',right: 0, bottom: px(10), }}>
                     <Text style={{fontSize: px(20), marginRight:px(10), color: '#fff'}}>{item.typeTitle}</Text>
                    </View>
                  </Image>  
                </TouchableOpacity>  
              )
             }) 
           }
         </Swiper>
         {/* icon 快捷入口 */}
         <View style={styles.iconList}>
           {iconList.map((item, index)=> {
              return (
                <TouchableOpacity key={index} onPress={()=> console.log(2222)} style={styles.iconBox}>
                  <View style={styles.imgBorder}>
                    {item.id == 1?<Image source={require('../../img/icon_fm.png')} style={styles.icon}/>:null}
                    {item.id == 3?<Image source={require('../../img/icon_fm.png')} style={styles.icon}/>:null}
                    {item.id == 2?
                      <Image source={require('../../img/icon_cal.png')} style={[styles.icon,{justifyContent: 'center', alignItems: 'center'}]}>
                        <Text style={{backgroundColor: 'transparent', fontSize: px(22), color: theme.themeColor, marginTop: px(14)}}>12</Text>
                      </Image>
                      :null}
                    {item.id == 4?<Image source={require('../../img/icon_rank.png')} style={styles.icon}/>:null}
                  </View>
                  <Text style={styles.iconText}>{item.name}</Text>
                </TouchableOpacity >
              )
            })
           }
         </View>   
        {/* 分类列表 */}
        {
          listsOrder.map((item, index) => {
            let data = []
            switch(item.key){
              case 'lized':
                data = lized
                break;
              case 'newSongs':
                data = newSongs
                break;
              case 'mv':
                data = mvList
                break;
              case 'dj':
                data = djList
                break;
              case 'privatecontent':
                data = privatecontent
                break;
            }
            return <HomeCommonItem key={index} data={data} item={item} navigation={navigation}/>
          })
        }
      </View>
    )
  }
  return(
    <View style={{flex: 1,}}>
      <FlatList
        data={[]}
        keyExtractor={(item,index)=> index}
        ListHeaderComponent={renderHeader}
        renderItem={({item, index}) => renderItem(item)}
      />
    </View>
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
    borderColor: '#999',
    marginBottom: px(20),
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
    fontSize: px(26)
  }
})
const iconList= [{
  id: 1,
  name: '私人FM',
  icon: 'icon_fm.png'
},{
  id: 2,
  name: '每日推荐',
  icon: 'icon_cal.png'
},{
  id: 3,
  name: '歌单',
  icon: 'icon_cal.png'
},{
  id: 4,
  name: '排行榜',
  icon: 'icon_rank.png'
},]
export default Recommend