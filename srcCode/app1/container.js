import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { Header } from '@component/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
})

const App = () => (
  <View style={styles.container}>
    <Header headerText="APP1" />
  </View>
)

export default App
