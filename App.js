import "react-native-gesture-handler"
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  getStateFromPath,
  getPathFromState,
} from '@react-navigation/native';
import RootStack from './app/routes'

import codePush from "react-native-code-push";




const app = () => {
  return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "black"
  }
})


export default codePush(app)

