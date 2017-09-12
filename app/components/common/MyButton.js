import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const MyButton = (props)=> {
  const { onPress, textStyle={}, touchStyle={}, text } = props
  return(
    <TouchableOpacity onPress={onPress} style={touchStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}
// ...touchStyle
//...textStyle
export default MyButton