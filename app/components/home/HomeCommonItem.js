import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import px from '../../utils/pxToDp'
import computerNum from '../../utils/computerNum'
import theme from '../../utils/theme'
import { Toast } from 'antd-mobile';
const HomeCommonItem = (props)=> {
  const {data, item, navigation} = props
  const handlePress = ()=> {

  }
  return (
    <View>
      <TouchableOpacity onPress={()=> handlePress()} style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View style={{height: px(40), width: px(4), backgroundColor: theme.themeColor}}></View>
        <Text style={{backgroundColor: 'transparent', marginLeft: px(20), marginRight: px(20), fontSize: px(28)}}>{item.name}</Text>
        <Image source={require('../../img/arrow_right.png')} style={{height: px(40), width: px(40)}}/>
      </TouchableOpacity>
        {item.key == 'lized'?
          <View style={styles.box}>
            {
              data.map((data, index)=> {
                return (
                  <TouchableOpacity onPress={()=>Toast.show(data.id)} key={index} onLongPress={()=> Toast(data.copywriter)} style={styles.item}>
                    <Image style={styles.bgImg} source={{uri: data.picUrl}}>
                      <View style={styles.positoin}>
                        <Image style={style.img} source={require('../../img/headset.png')}/>
                        <Text style={styles.playCount}>{computerNum(data.playCount)}</Text>
                      </View>
                    </Image>
                    <Text numberOfLines={2} style={styles.font}>{data.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View> : null
        }
        {item.key == 'newSongs'?
          <View>
            <Text>最新音乐</Text>
          </View> : null
        }
        {item.key == 'mvList'?
          <View>
            <Text>mvList</Text>
          </View> : null
        }
        {item.key == 'djList'?
          <View>
            <Text>djList</Text>
          </View> : null
        }
        {item.key == 'privatecontent'?
          <View>

          </View> : null
        }
        {item.key == 'lized'?
          <View>

          </View> : null
        }
    </View>
  )
}
const styles = StyleSheet.create({
  lized: {

  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: theme.screenWidth / 3 - px(4),
    marginBottom: px(30)
  },
  bgImg: {
    width: theme.screenWidth / 3 - px(4),
    height: theme.screenWidth / 3 - px(4)
  },
  positoin: {
    position: 'absolute',
    right: px(20),
    top: px(20),
    flexDirection: 'row'
  },
  img: {
    width: px(30),
    height: px(30)
  },
  playCount: {
    color: '#fff',
  },
  font: {
    color: '#333',
    fontSize: px(28)
  }
})
export default HomeCommonItem