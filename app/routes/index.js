import React, {memo} from 'react';
import {isEmpty, isNil} from 'lodash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreensNavigator from './mainNavigation';



const RootStackNavigtor = memo(() => {

  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      initialRouteName="Helper"
      screenOptions={{
        headerShown: false,
      }}>
        <RootStack.Screen
          name="App"
          component={MainScreensNavigator}
          options={{animation: 'none'}}
        />
    </RootStack.Navigator>
  );
});

export default RootStackNavigtor;
