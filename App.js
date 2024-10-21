import "react-native-gesture-handler"
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import RootStack from './app/routes'

import codePush from "react-native-code-push";
import { BalanceProvider } from "./app/assets/utils/balanceCard";




const app = () => {
  return (
    <BalanceProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </BalanceProvider>
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

