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
 
  const renderItem = (item)=> {
    return(
      <View></View>
    )
  }
  const renderFooter = ()=> {

  }
  //点击banner跳转时间
  const bannerPress = (item)=> {

  }
  const renderHeader = ()=> {
    return(
      <View style={{flex: 1}}>
        {/* banner 轮播 */}
        <Swiper autoplay={true} style={{height: px(260)}} >
           {
            banner.map((item, index)=> {
              return(
                <TouchableOpacity key={index} onPress={()=> bannerPress(item)}>
                  <Image source={{uri: item.pic}} style={{height: px(260), width: theme.screenWidth}}>
                    <Text style={{position: 'absolute', right: 0, bottom: px(10), paddingLeft: px(20), paddingRiht: px(20),
                        borderBottomLeftRadius: 20, borderTopLeftRadius: 20, backgroundColor: item.titleColor, color: '#fff'}}>{item.typeTitle}</Text>
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
                <TouchableOpacity onPress={()=> console.log(2222)} style={styles.iconBox}>
                  <View style={styles.imgBorder}>
                    <Image source={require(`../../img/${item.icon}`)} style={styles.icon}/>
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
            return <HomeCommonItem data={data} item={item} navigation={navigation}/>
          })
        }
      </View>
    )
  }
  return(
    <View style={{flex: 1}}>
      <FlatList
        data={[]}
        keyExtractor={(item,index)=> index}
        ListFooterComponent={renderFooter}
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