import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// TabScreens
import BottomNavigatorScreens from './tabNavigation';


const MainStack = createNativeStackNavigator();

const MainScreensNavigator = () => (
  <MainStack.Navigator
    initialRouteName="TabScreens"
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen name="TabScreens" component={BottomNavigatorScreens} />
  </MainStack.Navigator>
);

export default MainScreensNavigator;
