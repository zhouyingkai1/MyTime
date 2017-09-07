/**
 * Created by wangdi on 23/11/16.
 */
import React, { Component } from 'react';
import {StyleSheet, Platform, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import theme from '../../utils/theme';
import pxToDp from '../../utils/pxToDp';

const NavigationBar = (props) =>{
    
  const {barStyle, title, leftBtnText, leftBtnPress, rightBtnText, rightBtnPress} = props;
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle={barStyle || 'dark-light'} />
      <View style={[styles.toolbar, {backgroundColor: theme.mainColor}]}>
        <View style={styles.fixedCell}>
          {leftBtnText?
              <Button text={leftBtnText} onPress={leftBtnPress} />
              :
              null
          }
        </View>
        <View style={styles.centerCell}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.fixedCell}>
          {( rightBtnText) ?
            <Button  text={rightBtnText} onPress={rightBtnPress} />
            :
            null
          }
        </View>
      </View>
    </View>
  );
}
const Button = (props)=> {
  return(
    <TouchableOpacity
      onPress={this.props.onPress}
      activeOpacity={theme.touchableOpacityActiveOpacity}>
      <View style={styles.btn}>
        <Image source={require('../../img/icon_back.png')} style={{tintColor: '#fff', width: theme.toolbar.height, height: theme.toolbar.height}}/>
        <Text style={styles.btnText}>{this.props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { //in order to display the shadow on home tab
    height: theme.toolbar.height + pxToDp(4),
    width: theme.screenWidth,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  toolbar: {
    height: theme.toolbar.height,
    //backgroundColor: theme.toolbar.barColor,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 0 : pxToDp(6),
    elevation: 3,
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: {height: 2, width: 1},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  fixedCell: {
    width: theme.toolbar.height,
    height: theme.toolbar.height,
    flexDirection:'row',
  },
  centerCell: {
    flex: 1,
    height: theme.toolbar.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.toolbar.titleSize,
    color: theme.toolbar.titleColor
  },
  btn: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    width: theme.toolbar.height,
    height: Platform.OS === 'android' ? theme.toolbar.height : theme.toolbar.height - pxToDp(6),
  },
  btnText: {
    color: theme.toolbar.titleColor,
    fontSize: theme.toolbar.textBtnSize
  }
});


export default NavigationBar