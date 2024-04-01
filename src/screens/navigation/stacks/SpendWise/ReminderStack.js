import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Reminder from '../../../mainScreen/SpendWise/Reminder';


const Stack = createNativeStackNavigator();

const ReminderStack = () => {


    return (
        <Stack.Navigator
            // initialRouteName="Home"
            headerMode={Platform.select({ ios: 'float', android: 'screen' })}
            screenOptions={() => ({
                headerTitle: '',
                headerBackTitleVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name='Reminder' component={Reminder} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default ReminderStack

