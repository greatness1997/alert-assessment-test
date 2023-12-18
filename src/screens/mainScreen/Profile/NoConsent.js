import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native'
import { s } from "react-native-size-matters";
import { wrong } from "../../../constants/images";


const NoConsent = ({ navigation }) => {

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
        image: {
            width: s(80),
            height: s(80),
            resizeMode: "contain",
            alignSelf: "center"
        },
    })


    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={{ width: "100%", height: "100%", backgroundColor: "#060C27" }}>
                <View style={{ marginTop: "50%" }} >
                    <Image source={wrong} style={styles.image} />
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: s(20) }}>
                        <Text style={{ color: "#FF223B", fontSize: s(14), fontWeight: "bold", marginBottom: s(10) }}>Account won't be released</Text>
                        <Text style={{ color: "#E2E2E2", fontSize: s(14), textAlign: "center", paddingLeft: s(20), paddingRight: s(20) }}>Are you sure you don't want to release your account?</Text>
                    </View>
                    <View style={{ marginTop: s(40), flexDirection: "row", justifyContent: "space-evenly" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{ width: s(150), height: s(55), borderColor: "#D70018", borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: s(30) }}>
                            <Text style={{ color: "#9F091A", fontWeight: "bold", fontSize: s(14) }}>Yes, Not Now</Text>
                        </TouchableOpacity>

                        <View style={{ width: s(150), height: s(55), backgroundColor: "#A9C2F8", borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: s(30) }}>
                            <Text style={{ color: "#1B2D56", fontWeight: "bold", fontSize: s(14) }}>Cancel</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>

    )
}

export default NoConsent