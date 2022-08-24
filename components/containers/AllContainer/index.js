import { View, ScrollViewComponent, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native"
import Header from '../../navbar'
import { handleInfinityScroll } from '../../../utils'

export default function AllContainer({ children, ScrollView = true, header = true, title, onScrollEnd = () => { } }) {
  return (
    <View style={styles.container}>
      {header && <Header title={title} />}
      {
        ScrollView &&
        <ScrollView nestedScrollEnabled onScroll={(event) => {
          if (handleInfinityScroll(event)) {
            onScrollEnd()
          }
        }}
        >
          {children}
        </ScrollView>
      }
      {children}
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
})