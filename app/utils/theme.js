'use strict';

import {Platform, Dimensions, PixelRatio, StatusBar} from 'react-native';
import pxToDp from './pxToDp';

export default {
  //mainThemeColor: favoriteColor,
  pageBackgroundColor: '#f4f4f4',
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
    height: Platform.OS === 'android' ? pxToDp(40) : pxToDp(49),
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //barColor: favoriteColor,
    titleColor: '#fff',
    titleSize: Platform.OS === 'android' ? pxToDp(16) : pxToDp(14),
    textBtnSize: Platform.OS === 'android' ? pxToDp(12) : pxToDp(11)
  }
}