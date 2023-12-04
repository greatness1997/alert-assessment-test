import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { s } from "react-native-size-matters";


const Unlock = () => {

    const styles = StyleSheet.create({
        serviceContainer: {
            width: "95%",
            height: 65,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        serviceContainer1: {
            width: "95%",
            height: 65,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: s(7)
        },
    })


    return (
        <View style={{ padding: 0, marginTop: 0, width: "100%", backgroundColor: "#f5f5f5", borderWidth: 1, borderColor: "#3483f5", borderRadius: s(10) }}>
            <View style={{ alignItems: "center", padding: s(10), marginBottom: s(0) }}>

                <View style={styles.serviceContainer}>
                    <View style={{ width: "60%", paddingRight: s(18) }}>
                        <Text style={{ color: "black", lineHeight: s(15) }}>To use your virtual account, please provide consent to utilize your BVN.</Text>
                    </View>
                    <TouchableOpacity style={{ width: "35%", height: s(30), backgroundColor: "green", borderRadius: s(20), alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: "white" }}>Grant Consent</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 1, backgroundColor: "lightgrey", width: "90%", marginTop: s(5) }}></View>

                <View style={styles.serviceContainer1}>
                    <View style={{ width: "60%", paddingRight: s(18) }}>
                        <Text style={{ color: "black", lineHeight: s(15) }}>Once you give consent, click "Release Account" to remove the restriction.</Text>
                    </View>
                    <TouchableOpacity style={{ width: "40%", height: s(30), backgroundColor: "green", borderRadius: s(20), alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: "white" }}>Release Account</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        </View>

    )
}

export default Unlock