import { View,ScrollViewComponent } from 'react-native'
import React from 'react'
import {StyleSheet} from "react-native"
import Header from '../../navbar'

export default function AllContainer({children}) {
  return (
    <View style={styles.container}>
       <Header />
      {children}
    </View>   
  )
}

const styles= StyleSheet.create({
    container :{
       flex:1,
       backgroundColor: "#fff",
    }
})