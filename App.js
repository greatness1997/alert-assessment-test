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

import {ToastProvider} from 'react-native-toast-notifications';
import CustomToast from "./src/components/CustomToast";







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
          <ToastProvider
            placement="top"
            duration={5000}
            animationType="slide-in"
            animationDuration={250}
            successColor="#028a0f"
            dangerColor="#60100b"
            warningColor="#e69b00"
            normalColor="gray"
            textStyle="white"
            style={{ elevation: 10 }}
            renderType={{
              custom_toast: toast => <CustomToast toast={toast} />,
              custom_error_toast: toast => (
                <CustomToast toast={toast} variant="error" />
              ),
              custom_success_toast: toast => (
                <CustomToast toast={toast} variant="success" />
              ),
              custom_attention_toast: toast => (
                <CustomToast toast={toast} variant="warning" />
              ),
            }}
            swipeEnabled={true}>
            <AppNavigator />
          </ToastProvider>
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

