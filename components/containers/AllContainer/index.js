import { View, ScrollViewComponent, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native"
import Header from '../../navbar'

export default function AllContainer({ children }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
})