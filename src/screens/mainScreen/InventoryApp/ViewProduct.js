import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, ScrollView, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, Animated, Easing } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { s, ms, vs } from 'react-native-size-matters'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { invList, amala, bike, bugger, rice, icecream, beans, eforiro, dress, fullAmala, cryspy, grilled } from '../../../constants/images'

import { launchImageLibrary } from 'react-native-image-picker'

import AppButton from '../../../components/AppButtonBlue'



const ViewProduct = ({ navigation, route }) => {

    const animatedValue = useRef(new Animated.Value(0)).current;

    const { image } = route.params

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500, // You can adjust the duration as needed
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, []);

    const interpolatedWidth = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [s(10), s(90)],
    });

    const interpolatedHeight = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [s(10), s(90)],
    });

    const interpolatedRotate = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: s(10) }}>
            <View style={{ marginTop: s(20), flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" color="black" size={s(25)} />
                </TouchableOpacity>
                <Animated.View style={{ backgroundColor: "white", borderWidth: s(4), borderColor: "#168012", padding: s(5), borderRadius: s(100), transform: [{ rotate: interpolatedRotate }], }}>
                    <Animated.Image source={image} style={{ resizeMode: "contain", width: interpolatedWidth, height: interpolatedHeight }} />
                </Animated.View>
                <Text></Text>
            </View>

            <View style={{ flexDirection: "row", padding: s(5) }} >
                <View style={{ width: "40%" }}>
                    <Text style={{ fontSize: s(12), fontWeight: "bold", color: "#0B1036" }}>Amala</Text>
                    <Text style={{ fontSize: s(10), color: "#B4B4B4" }}>Lorem ipsum dolor sit amet, consectetur ut labore et</Text>
                </View>
                <View></View>
                <View></View>
            </View>

            <View style={{ marginTop: s(10), flexDirection: "row", padding: s(5), justifyContent: "space-between" }} >
                <Text style={{ fontSize: s(13), fontWeight: "600", color: "#0B1036" }}>Item Type</Text>
                <Text style={{ fontSize: s(13), fontWeight: "600", color: "#0B1036" }}>Quantity</Text>
            </View>

            <View style={{ flexDirection: "row", padding: s(5), justifyContent: "space-between", marginTop: s(5) }} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#F7F7F7", width: s(50), height: s(50), alignItems: "center", justifyContent: "center", borderRadius: s(5) }}>
                        <Image source={image} />
                    </View>
                    <View style={{ marginLeft: s(5) }}>
                        <Text style={{ fontWeight: "500", color: "#0B1036" }}>Amala</Text>
                        <Text style={{ color: "#B4B4B4", fontSize: s(10) }}>200 Per Spoon</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "25%" }}>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#707070" }}>-</Text>
                    </View>
                    <Text style={{ fontSize: s(16), fontWeight: "bold", color: "#1B2D56" }}>4</Text>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#3E6BFF" }}>+</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: s(5), flexDirection: "row", padding: s(5), justifyContent: "space-between" }} >
                <Text style={{ fontSize: s(13), fontWeight: "400", color: "#838383" }}>Add Ons</Text>
                <Text></Text>
            </View>

            <View style={{ flexDirection: "row", padding: s(5), justifyContent: "space-between", marginTop: s(5) }} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#F7F7F7", width: s(50), height: s(50), alignItems: "center", justifyContent: "center", borderRadius: s(5) }}>
                        <Image source={image} />
                    </View>
                    <View style={{ marginLeft: s(5) }}>
                        <Text style={{ fontWeight: "500", color: "#0B1036" }}>beef</Text>
                        <Text style={{ color: "#B4B4B4", fontSize: s(10) }}>200 Per Spoon</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "25%" }}>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#707070" }}>-</Text>
                    </View>
                    <Text style={{ fontSize: s(16), fontWeight: "bold", color: "#1B2D56" }}>4</Text>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#3E6BFF" }}>+</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", padding: s(5), justifyContent: "space-between", marginTop: s(0) }} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#F7F7F7", width: s(50), height: s(50), alignItems: "center", justifyContent: "center", borderRadius: s(5) }}>
                        <Image source={image} />
                    </View>
                    <View style={{ marginLeft: s(5) }}>
                        <Text style={{ fontWeight: "500", color: "#0B1036" }}>Pomo</Text>
                        <Text style={{ color: "#B4B4B4", fontSize: s(10) }}>200 Per Spoon</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "25%" }}>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#707070" }}>-</Text>
                    </View>
                    <Text style={{ fontSize: s(16), fontWeight: "bold", color: "#1B2D56" }}>4</Text>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#3E6BFF" }}>+</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", padding: s(5), justifyContent: "space-between", marginTop: s(0) }} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#F7F7F7", width: s(50), height: s(50), alignItems: "center", justifyContent: "center", borderRadius: s(5) }}>
                        <Image source={image} />
                    </View>
                    <View style={{ marginLeft: s(5) }}>
                        <Text style={{ fontWeight: "500", color: "#0B1036" }}>Kpanla</Text>
                        <Text style={{ color: "#B4B4B4", fontSize: s(10) }}>Free</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "25%" }}>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#707070" }}>-</Text>
                    </View>
                    <Text style={{ fontSize: s(16), fontWeight: "bold", color: "#1B2D56" }}>4</Text>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#3E6BFF" }}>-</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", padding: s(5), justifyContent: "space-between", marginTop: s(0) }} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: "#F7F7F7", width: s(50), height: s(50), alignItems: "center", justifyContent: "center", borderRadius: s(5) }}>
                        <Image source={image} />
                    </View>
                    <View style={{ marginLeft: s(5) }}>
                        <Text style={{ fontWeight: "500", color: "#0B1036" }}>Take Away</Text>
                        <Text style={{ color: "#B4B4B4", fontSize: s(10) }}>Free</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "25%" }}>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#707070" }}>-</Text>
                    </View>
                    <Text style={{ fontSize: s(16), fontWeight: "bold", color: "#1B2D56" }}>4</Text>
                    <View style={{ borderColor: "#707070", borderWidth: s(1), width: s(25), height: s(25), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: "#3E6BFF" }}>-</Text>
                    </View>
                </View>
            </View>

            <AppButton onPress={() => navigation.navigate("ProductSummary")} title="Checkout Order" style={{ height: s(45), backgroundColor: "#0B1036" }} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

})

export default ViewProduct

