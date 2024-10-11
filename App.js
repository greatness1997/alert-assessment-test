import "react-native-gesture-handler"
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import codePush from "react-native-code-push";







const app = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#060C27"
  }
})


export default codePush(app)

