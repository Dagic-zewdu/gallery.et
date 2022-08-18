import { View, Text } from 'react-native'
import React from 'react'
import {StyleSheet} from "react-native"

export default function AllContainer({children}) {
  return (
    <View style={Styles.container}>
      {children}
    </View>
  )
}

const Styles= StyleSheet.create({
    container :{
       flex:1,
       backgroundColor: "#fff",
    }
})