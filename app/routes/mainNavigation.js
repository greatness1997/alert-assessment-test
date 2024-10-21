import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// TabScreens
import BottomNavigatorScreens from './tabNavigation';
import PreviewTopUp from '../screens/mainScreen/Card/PreviewTopUp';
import Success from '../screens/mainScreen/Card/Success';



const MainStack = createNativeStackNavigator();

const MainScreensNavigator = () => (
  <MainStack.Navigator
    initialRouteName="TabScreens"
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen name="TabScreens" component={BottomNavigatorScreens} />
    <MainStack.Screen name="PreviewTopUp" component={PreviewTopUp} />
    <MainStack.Screen name="Success" component={Success} />
  </MainStack.Navigator>
);

export default MainScreensNavigator;
