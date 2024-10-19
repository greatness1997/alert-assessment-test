/* eslint-disable react/no-unstable-nested-components */
import React, { memo } from 'react';
import { View, Image, Platform, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/mainScreen/HomeScreen';
import HistoryScreen from '../screens/mainScreen/History';
import CardScreen from '../screens/mainScreen/Card';

import { scale, verticalScale  } from '../assets/utils/respSizes';

import {
    Home1,
    Home2,
    Transfer1,
    Transfer2,
    Bank1,
    Bank2,
} from '../assets/tab-image-export';
import { colors } from '../assets/utils/colorTheme';


// Home
const HomeStack = createNativeStackNavigator();
const HomeTabScreensNavigator = () => (
    <HomeStack.Navigator
        initialRouteName="HomeView"
        screenOptions={{
            headerShown: false,
        }}>
        <HomeStack.Screen name="HomeView" component={Home} />
    </HomeStack.Navigator>
);


// History
const HistoryStack = createNativeStackNavigator();
const HistoryTabScreensNavigator = () => (
    <HistoryStack.Navigator
        initialRouteName="HistoryScreen"
        screenOptions={{
            headerShown: false,
        }}>
        <HistoryStack.Screen name="HistoryScreen" component={HistoryScreen} />
    </HistoryStack.Navigator>
);

// Account
const CardStack = createNativeStackNavigator();
const CardTabScreensNavigator = () => (
    <CardStack.Navigator
        initialRouteName="CardScreen"
        screenOptions={{
            headerShown: false,
        }}>
        <CardStack.Screen name="CardScreen" component={CardScreen} />
    </CardStack.Navigator>
);


const MainNav = createBottomTabNavigator();

const BottomNavigatior = () => {


    return (
        <MainNav.Navigator
            initialRouteName="HomeTab"
            screenOptions={() => {
                return {
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "black",
                    tabBarStyle: {
                        backgroundColor: "black",
                        height: scale(75)
                    },
                    tabBarShowLabel: true,
                    headerShown: false,
                };
            }}>
            <MainNav.Screen
                name="HomeTab"
                component={HomeTabScreensNavigator}
                options={{
                    tabBarLabel: labelProps => (
                        // <TabBarLabel {...labelProps}>Home</TabBarLabel>
                        <Text style={{ color: colors.text, fontWeight: "bold" }}></Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 16,
                                opacity: focused ? 1 : 0.75,
                                height: scale(32),
                                width: verticalScale(64),
                            }}>
                            <View
                                style={{
                                    height: scale(20),
                                    width: verticalScale(20),
                                }}>
                                <Image
                                    resizeMode="contain"
                                    source={focused ? Home1 : Home2}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        flex: 1,
                                        tintColor: "white"
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />


            <MainNav.Screen
                name="HistoryTab"
                component={HistoryTabScreensNavigator}
                options={{
                    tabBarLabel: labelProps => (
                        // <TabBarLabel {...labelProps}>Accounts</TabBarLabel>
                        <Text style={{ color: colors.text, fontWeight: "bold" }}></Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 16,
                                opacity: focused ? 1 : 0.75,
                                height: scale(32),
                                width: verticalScale(64),
                            }}>
                            <View
                                style={{
                                    height: scale(20),
                                    width: verticalScale(20),
                                }}>
                                <Image
                                    resizeMode="contain"
                                    source={focused ? Transfer1 : Transfer2}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        flex: 1,
                                        tintColor: colors.text
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />

            <MainNav.Screen
                name="CardTab"
                component={CardTabScreensNavigator}
                options={{
                    tabBarLabel: labelProps => (
                        // <TabBarLabel {...labelProps}>Settings</TabBarLabel>
                        <Text style={{ color: colors.text, fontWeight: "bold" }}></Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 16,
                                opacity: focused ? 1 : 0.75,
                                height: scale(32),
                                width: verticalScale(64),
                            }}>
                            <View
                                style={{
                                    height: scale(20),
                                    width: verticalScale(20),
                                }}>
                                <Image
                                    resizeMode="contain"
                                    source={focused ? Bank1 : Bank2}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        flex: 1,
                                        tintColor: colors.text
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />
        </MainNav.Navigator>

    );
};

export default memo(BottomNavigatior);
