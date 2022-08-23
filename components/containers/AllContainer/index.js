import { View, ScrollViewComponent, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native"
import Header from '../../navbar'
import { handleInfinityScroll } from '../../../utils'

export default function AllContainer({ children, title, onScrollEnd = () => { } }) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <ScrollView onScroll={(event) => {
        if (handleInfinityScroll(event)) {
          onScrollEnd()
        }
      }}
      >
        {children}
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
})