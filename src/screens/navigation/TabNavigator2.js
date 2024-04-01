import React from 'react'
import { StyleSheet, Platform, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const activeTintColor = "black"

import HomeStack from './stacks/SpendWise/HomeStack';
import ReminderStack from './stacks/SpendWise/ReminderStack';


import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';

import { home, bel, accounts, reports, settings } from '../../constants/images';


const TabNavigator2 = () => {

  const hiddenTabRoutes = [
    'TransferValidate',
  ];

  const isTabBarVisible = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Home';

    return !hiddenTabRoutes.includes(routeName);
  };

  return (
    <Tab.Navigator
      initialRouteName="SpendWiseHome"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#1B2D56', height: Platform.OS === "ios" ? 100 : 60 },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = home;
          } else if (route.name === 'Reminder') {
            iconName = bel;
          } else if (route.name === 'Reports') {
            iconName = reports ;
          } else if (route.name === 'Accounts') {
            iconName = accounts;
          } else if (route.name === 'Settings') {
            iconName = settings;
          }

          return <Image source={iconName} style={{ width: s(20), height: s(20), resizeMode: "contain" }}/>;
        },
        tabBarVisible: isTabBarVisible(route),
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Reminder" component={ReminderStack} options={{ headerShown: false }} />
      <Tab.Screen name="Reports" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Accounts" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={HomeStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );

}

const styles = StyleSheet.create({

})

export default TabNavigator2

