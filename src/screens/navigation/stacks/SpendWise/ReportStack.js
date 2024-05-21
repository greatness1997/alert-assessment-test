import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Report from '../../../mainScreen/SpendWise/Report';


const Stack = createNativeStackNavigator();

const ReportStack = () => {


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
            <Stack.Screen name='Reports' component={Report} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default ReportStack

