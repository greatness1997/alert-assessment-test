import React, { useRef, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { spout, visa, master } from "../../../constants/images";


const Account = ({ navigation }) => {

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / windowWidth);
    }

    const [selectedCard, setSelectedCard] = useState("visa");

    const handleCardPress = (cardType) => {
        setSelectedCard(cardType);
    };


    return (
        <ScrollView>
            <View style={{ padding: s(20), backgroundColor: "white", height: windowHeight }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ color: "black", fontSize: s(16), fontWeight: "500" }}>Account</Text>
                    <Text></Text>
                </View>


                <View style={{ marginBottom: 10, marginTop: s(20) }}>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: s(14) }}>Choose Payment Method</Text>
                </View>



                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#3282FF",
                            borderRadius: s(10),
                            padding: s(10),
                            width: "49%",
                            height: s(70),
                            marginRight: s(8)
                        }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: s(4) }}>
                                <View>
                                    <MaterialCommunityIcons name="bank" size={s(22)} color="green" />
                                </View>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: s(14),
                                        fontWeight: "600",
                                        marginLeft: s(10)
                                    }}>Transfer</Text>
                            </View>

                        </View>
                        <Text style={{ color: "#848484", fontWeight: "600", fontSize: s(9), marginTop: s(10) }}>Pay Using Your Local Currency</Text>
                    </View>

                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#3282FF",
                            borderRadius: s(10),
                            padding: s(10),
                            width: "49%",
                            height: s(70),
                            marginRight: s(8)
                        }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={spout} style={{ resizeMode: "contain", width: s(70), height: s(30) }} />
                            </View>

                        </View>
                        <Text style={{ color: "#848484", fontWeight: "600", fontSize: s(9), marginTop: s(5) }}>Fund and Pay Using Spoutpay</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={() => handleCardPress('visa')}>
                        <View style={{ backgroundColor: selectedCard === 'visa' ? "#E8F1FC" : "#FFFFFF", borderRadius: 10, marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Image source={visa} style={{ resizeMode: "contain" }} />
                                <View style={{ marginRight: s(20) }} >
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "500" }}>Alex Parkinson</Text>
                                        <View style={{ marginLeft: s(10), width: s(60), height: s(20), borderRadius: s(10), justifyContent: "center", alignItems: "center", backgroundColor: "#D2E1FF" }}>
                                            <Text style={{ fontSize: s(10), fontWeight: "bold", color: "#2335FF" }}>Primary</Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: "#7E7E7E", fontSize: s(11), fontWeight: "500" }}>*********1717</Text>
                                </View>
                            </View>
                            {selectedCard === 'visa' && <MaterialCommunityIcons name="check-circle" size={25} color="#2335FF" style={{ marginRight: 20 }} />}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleCardPress('master')}>
                        <View style={{ backgroundColor: selectedCard === 'master' ? "#E8F1FC" : "#FFFFFF", borderRadius: 10, marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{ margin: 10, backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 5, width: s(70), height: s(50) }}>
                                    <Image source={master} style={{ resizeMode: "contain" }} />
                                </View>
                                <View>
                                    <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "500" }}>Alex Parkinson</Text>
                                    <Text style={{ color: "#7E7E7E", fontSize: s(11), fontWeight: "500" }}>*********3864</Text>
                                </View>
                            </View>
                            {selectedCard === 'master' && <MaterialCommunityIcons name="check-circle" size={25} color="#2335FF" style={{ marginRight: 20 }} />}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginTop: s(20) }}>
                    <MaterialCommunityIcons name="plus" size={25} color="#2079F6" />
                    <Text style={{ fontSize: s(13), fontWeight: "600", color: "#2335FF" }}>Add New Card</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(20), backgroundColor: "#E3F7EF", borderRadius: s(10), marginTop: s(25) }}>
                    <MaterialCommunityIcons name="shield-half-full" size={30} color="#36B73E" />
                    <Text>We adherer entirely to the data security standard of the payment card industry</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    optionContainer: {
        padding: s(10),
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(10),
    },
    optionText: {
        fontWeight: "600",
    },
});

export default Account