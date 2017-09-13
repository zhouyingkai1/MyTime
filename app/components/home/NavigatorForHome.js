import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SearchBar } from 'antd-mobile'
import theme from '../../utils/theme'
import px from '../../utils/pxToDp'
const NavigatorForHome = (props)=> {
  const {  } = props
  return(
    <View style={[styles.container,theme.toolbar]}>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.themeColor
  }
})
export default NavigatorForHome