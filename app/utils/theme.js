'use strict';

import {Platform, Dimensions, PixelRatio, StatusBar} from 'react-native';
import pxToDp from './pxToDp';

export default {
  //mainThemeColor: favoriteColor,
  mainColor: '#e72b2b',
  themeColor: '#108ee9',
  pageBackgroundColor: '#fbfcfd',
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  touchableHighlightUnderlayColor: 'rgba(0,0,0,.4)',
  touchableOpacityActiveOpacity: 0.8,
  segment: {
    color: '#ccc',
    width: 1/PixelRatio.get()
  },
  tabButton: {
    normalColor: '#aaa'
  },
  toolbar: {
    height: Platform.OS === 'android' ? pxToDp(100) : pxToDp(128),
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : pxToDp(30),
    //barColor: favoriteColor,
    // titleColor: '#fff',
    // titleSize: Platform.OS === 'android' ? pxToDp(40) : pxToDp(34),
    // textBtnSize: Platform.OS === 'android' ? pxToDp(24) : pxToDp(22)
  }
}