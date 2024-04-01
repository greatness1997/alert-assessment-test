import "react-native-gesture-handler"
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator'
import { color } from './src/constants/color';
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./src/screens/OfflineNotice";
import codePush from "react-native-code-push";

import { request, PERMISSIONS } from 'react-native-permissions';






const app = () => {

   useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (result === 'granted') {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <>
    <View style={styles.container}>
      <StatusBar barStyle={Platform.select({ android: 'light-content', ios: 'light-content' })} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
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

