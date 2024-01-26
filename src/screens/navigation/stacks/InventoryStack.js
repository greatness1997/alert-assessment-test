import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../mainScreen/InventoryApp/Home';
import ViewProduct from '../../mainScreen/InventoryApp/ViewProduct';
import ProductSummary from '../../mainScreen/InventoryApp/ProductSummary';



const Stack = createNativeStackNavigator();

const InventoryStack = () => {


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
            <Stack.Screen name='Inventory' component={Home} />
            <Stack.Screen name='ViewProduct' component={ViewProduct} />
            <Stack.Screen name='ProductSummary' component={ProductSummary} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default InventoryStack

