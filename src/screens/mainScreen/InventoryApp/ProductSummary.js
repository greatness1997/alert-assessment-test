import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, ScrollView, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, Animated, Easing } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { s, ms, vs } from 'react-native-size-matters'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { rice } from '../../../constants/images'

import { launchImageLibrary } from 'react-native-image-picker'

import AppButton from '../../../components/AppButtonBlue'



const ProductSummary = ({ navigation, route }) => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: s(10) }}>
            <View style={{ marginTop: s(20), flexDirection: "row", justifyContent: "space-between" }}>
                <Text></Text>
                <View style={{ alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", borderWidth: s(2), borderColor: "#168012", padding: s(2), borderRadius: s(100), }}>
                        <Image source={rice} style={{ resizeMode: "contain", width: s(50), height: s(50) }} />
                    </View>
                    <Text style={{ marginTop: s(10), fontSize: s(12), fontWeight: "bold", color: "#0B1036" }}>Check Out</Text>
                </View>
                <Text></Text>
            </View>

            <View style={{ marginTop: s(40), flexDirection: "row", justifyContent: "space-between", padding: s(5), alignItems: "center" }} >
                <Text style={{ color: "#0B1036", fontSize: s(12), fontWeight: "400" }}>1 Pack</Text>
                <View style={{ flexDirection: "row"  }}>
                    <View style={{ width: s(100), height: s(35), backgroundColor: "#00835027", borderRadius: s(50), justifyContent: "center", alignItems: "center", marginRight: s(10) }}>
                        <Text style={{ fontSize: s(10), fontWeight: "500", color: "#005335" }}>Add New Items</Text>
                    </View>
                    <View style={{ width: s(35), height: s(35), backgroundColor: "#FFE3E3", borderRadius: s(50), justifyContent: "center", alignItems: "center" }}>
                        <AntDesign name="delete" size={s(15)} color="red" />
                    </View>
                </View>
            </View>

            <View style={{ marginTop: s(10), padding: s(5), justifyContent: "space-between" }} >
                <Text style={{ fontSize: s(13), fontWeight: "bold", color: "#0B1036" }}>Amala</Text>
                <Text style={{ fontSize: s(11), fontWeight: "500", color: "#B4B4B4" }}>NGN 2000</Text>
            </View>





            <AppButton title="Place Order" style={{ height: s(45), backgroundColor: "#0B1036" }} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

})

export default ProductSummary

