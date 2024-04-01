import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../mainScreen/SpendWise/Home';
import Account from '../../../mainScreen/SpendWise/Account';
import Category from '../../../mainScreen/SpendWise/Category';
import AddCategory from '../../../mainScreen/SpendWise/AddCategory';
import EditCategory from '../../../mainScreen/SpendWise/EditCategory';
import Expenses from '../../../mainScreen/SpendWise/Expenses';


const Stack = createNativeStackNavigator();

const HomeStack = () => {


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
            <Stack.Screen name='SpendWiseHome' component={Home} />
            <Stack.Screen name='SpendWiseAccount' component={Account} />
            <Stack.Screen name='SpendWiseCategory' component={Category} />
            <Stack.Screen name='AddCategory' component={AddCategory} />
            <Stack.Screen name='EditCategory' component={EditCategory} />
            <Stack.Screen name='Expenses' component={Expenses} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default HomeStack

