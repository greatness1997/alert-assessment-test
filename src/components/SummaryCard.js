import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { color } from "../constants/color"
import "intl"
import "intl/locale-data/jsonp/en";

import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



const SummaryCard = ({ data }) => {
    console.log(data, "here")
    // const fullName = data.tranRes.name; // "OTOKINA GREATNESS OMOKHAFE"

    // const names = fullName.split(" "); // Split the full name by spaces

    // const firstName = names[0]; // "OTOKINA"
    // const lastName = names.slice(1, -1).join(" "); // "GREATNESS"
    // const surname = names[names.length - 1];

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })

    const amount = parseFloat(data.res.amount); // Assuming `data.res.amount` is a number

    const updatedAmount = amount + 20; // Adding 10 to the amount

    const formattedAmount = format.format(updatedAmount);

    return (
        <>
            {/* <View style={{ alignItems: "center", marginBottom: s(8)}}>
                <View style={{ width: s(60), height: s(60), backgroundColor: "lightgrey", borderRadius: s(45), alignItems: "center", justifyContent: "center" }}>
                    <MaterialCommunityIcons name="bank" size={s(30)} color="#110449" />
                </View>
            </View> */}

            <View style={[styles.container, styles.boxShadow]}>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: s(10) }}>
                    <Text style={{ fontSize: s(14), fontWeight: "600", paddingBottom: s(3), color: color.colorSix }}>{data.tranRes.name} </Text>
                    <Text style={{ fontSize: s(12), fontWeight: "400", color: color.colorFive }}>{data.tranRes.account}</Text>
                </View>
                <View style={{ marginTop: s(18) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: s(18) }}>
                        <Text style={{ fontSize: s(12), fontWeight: "400", color: color.colorFour }}>Amount</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{`₦${format.format(data.res.amount)}`}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: s(14) }}>
                        <Text style={{ fontSize: s(12), fontWeight: "400", color: color.colorFour }}>Bank</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{data.res.banks}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: s(14) }}>
                        <Text style={{ fontSize: s(12), fontWeight: "400", color: color.colorFour }}>Charge</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{`₦${format.format(20)}`}</Text>
                    </View>
                </View>
                {/* <View style={{ width: "100%", height: 0.5, backgroundColor: color.colorFour, marginTop: s(18) }}></View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                    <Text style={{ fontSize: s(16), fontWeight: "400", color: color.colorFour }}>Total</Text>
                    <View style={{ width: s(120), height: s(40), backgroundColor: "#00000029", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                        <Text style={{ fontSize: s(16), fontWeight: "600", color: color.colorSeven }}>{`₦${formattedAmount}`}</Text>
                    </View>

                </View> */}

                <View style={{ width: "100%", backgroundColor: "#d8d8d8", height: s(1), marginTop: s(20) }}></View>

                <View style={{ marginTop: s(15), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: s(13), fontWeight: "400", color: color.colorFour }}>Total</Text>
                    <View style={{ borderRadius: s(5), backgroundColor: "#eceff7", paddingLeft: s(20), paddingRight: s(20), paddingTop: s(10), paddingBottom: s(10), justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: s(14), fontWeight: "600", color: "#1b2d56" }}>{`₦${formattedAmount}`}</Text>
                            <View style={{ width: s(1), backgroundColor: "#707070", height: s(20), marginLeft: s(7) }}></View>
                        </View>

                    </View>
                </View>


            </View>

            {/* <View style={{ marginTop: s(18), }}>
                <Text style={{ color: color.colorSeven, fontSize: s(14), fontWeight: "600" }}>Save Beneficiary?</Text>
                <Switch
                    style={{ marginTop: s(8) }}
                />
            </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: s(280),
        backgroundColor: "white",
        // alignItems: "center",
        borderRadius: s(8),
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 0,
        padding: ms(18),
        position: "relative"
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 3,
    },
})

export default SummaryCard