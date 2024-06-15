import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthStack from './stacks/AuthStack';
import LandingOne from '../AuthScreen/Landing/LandingOne';
import LandingStack from './stacks/LandingStack';
import PersistLogin from '../AuthScreen/PersistLogin';
import TabNavigator2 from './TabNavigator2';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const [isLoading, setIsLoading] = useState(true); // Initially, loading is true
    const { auth: { user } } = useSelector(state => state);

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    // If user data exists, update the state and stop loading
                    setIsLoading(false);
                }else{
                    setIsLoading(false)
                }
            } catch (e) {
                console.log(e);
            }
        };

        getData(); // Fetch user data when component mounts
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }

    return (
        <Stack.Navigator
            initialRouteName="LandingOne"
            headerMode={Platform.select({ ios: 'float', android: 'screen' })}
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="LandingOne" component={LandingStack} />
            <Stack.Screen name="login" component={AuthStack} />
            <Stack.Screen name="PersistLogin" component={PersistLogin} />
            <Stack.Screen name="Home" component={TabNavigator} /> 
            {/* {user.agentType === "user" ? <Stack.Screen name="Home" component={TabNavigator} /> :
            <Stack.Screen name="Home" component={TabNavigator2} />} */}
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default AppNavigator;
