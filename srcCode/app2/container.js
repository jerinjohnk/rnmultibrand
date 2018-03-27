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
    backgroundColor: '#00FF00',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

const App = () => (
  <View style={styles.container}>
    <Header headerText="APP2" />
  </View>
)

export default App
