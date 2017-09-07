import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Toast, ActivityIndicator, WingBlank } from 'antd-mobile';
import pxToDp from '../utils/pxToDp'
import theme from '../utils/theme'
import Swiper from 'react-native-swiper';

const ListForHome = (props)=> {
  const { fetchData, navigation, isFull, isLoading, currentPage, isrefresh, didMount, imgData,  updateState } = props
  console.log(props,'ListForHomeprops')
  const clickItem = (item)=> {
    navigation.navigate('Detail',{item: item})
  }
  const renderItem = (item) => {
    return(
      <TouchableOpacity style={{height: 60, justifyContent: 'center'}} onPress={()=> clickItem(item)}>
        {/* <Image source={{uri: item.img}} style={styles.img}/> */}
        <WingBlank size="lg">
          <Text>{item.title}</Text>
        </WingBlank>
      </TouchableOpacity>  
    )
  }
  const renderLine = ()=> {
    return(
      <View style={{height: 1, flex: 1, backgroundColor: '#e1e1e1', marginBottom: 5}}></View>  
    )
  }
  const renderFooter = ()=> {
    return(
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        {
          isFull? <Text>已为您加载全部</Text>: 
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ActivityIndicator size='small' color='red' animating={isLoading} />
            <Text style={{color: 'red'}}>玩命加载中……</Text>
          </View>
        }
      </View>
    )
  }
  //下拉加载
  const fetchMore = ()=> {
    const page = currentPage + 1
    updateState('currentPage', page)
    fetchData(page)

  }
  const renderHeader = ()=> {
    return(
      
      <Swiper autoplay={true} style={styles.wrapper} >
        {
          didMount?
            imgData.map((item, index)=> {
              return(
                <View key={index}>
                  <Image source={{uri: item.img}} style={{height: pxToDp(200), resizeMode: 'center', width: WIDTH}}/>
                </View>  
              )
            }) : <View></View>
        }
      </Swiper>
    )
  }
  const refresh = ()=> {
    updateState('currentPage', 1)
    updateState('isrefresh', true)
    fetchData(1)
  }
  return(
    <FlatList
      data={dataList}
      keyExtractor={item=> item.id}
      ItemSeparatorComponent={renderLine}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={renderHeader}
      onRefresh={refresh}
      refreshing={isrefresh}
      renderItem={({item, index}) => renderItem(item)}
      onEndReachedThreshold={.3}
      onEndReached={fetchMore}
    />
  )
}
const styles = StyleSheet.create({
  wrapper: {
    height: pxToDp(400),
  },
})

export default ListForHome