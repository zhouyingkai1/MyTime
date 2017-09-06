import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

const ImageBtn = (props)=> {
  const { onPress={}, style } = props
  return(
    <TouchableOpacity onPress={onPress}>
      <Image 
        source={source}
        style={...style}
      />
    </TouchableOpacity>
  )
}
export default ImageBtn