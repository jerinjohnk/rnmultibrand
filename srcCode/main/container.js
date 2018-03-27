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
    backgroundColor: '#0000FF',
  },
})

const App = () => (
  <View style={styles.container}>
    <Header headerText="Main" />
  </View>
)

export default App
