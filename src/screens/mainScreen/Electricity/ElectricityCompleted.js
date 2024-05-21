import React, { useState } from 'react'
import { Modal, SafeAreaView, View, StyleSheet, Text, Alert, TextInput, TouchableWithoutFeedback } from 'react-native'


import { Complete } from '../../../constants/animation';
import Lottie from "lottie-react-native"

import { color } from '../../../constants/color';
import { s } from 'react-native-size-matters'

import "intl"
import "intl/locale-data/jsonp/en";




const ElectricityCompleted = ({ navigation, route }) => {

    const completeData = route.params

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })


    return (

        <View style={{ flex: 1, marginTop: s(100), marginLeft: s(15), width: "90%" }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Lottie
                    source={Complete}
                    autoPlay
                    loop
                    style={styles.animation}
                />

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: s(10), width: "85%", }}>
                    <Text style={{ fontSize: s(13), fontWeight: "600", color: "black", marginTop: s(20) }}>Transaction Completed</Text>
                    <Text style={{ fontSize: s(14), fontWeight: "400", color: "black", marginTop: s(5), textAlign: "center" }}>You have successfully Purchased {data.data.details.creditToken.value || data.data.details.units || ""} of electricity for {`₦${format.format(data.data.amount || data.data.details.amount)}`}</Text>
                    <Text style={{ fontSize: s(14), fontWeight: "400", color: "black", marginTop: s(5), textAlign: "center" }}>{data.data.token || data.data.details.creditToken.creditToken || ""}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.done}>
                <Text style={{ fontSize: s(12), fontWeight: "bold", color: "#ffffff" }}>Done</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    botton: {
        backgroundColor: color.primary2,
        width: "100%",
        marginTop: s(20)
    },
    animation: {
        position: "relative",
        width: s(150),
        height: s(150),
        backgrounColor: "green",
    },
    done: {
        backgroundColor: "#1b2d56", 
        width: "100%", 
        padding: s(15), 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: s(50),
        borderWidth: s(1),
        borderColor: '#1b2d56',
        marginTop: s(20)
    }
})

export default ElectricityCompleted