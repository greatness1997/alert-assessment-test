import React, { useRef, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { spout, visa, master } from "../../../constants/images";


const Category = ({ navigation }) => {

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;




    return (
        <ScrollView>
            <View style={{ padding: s(20), backgroundColor: "white", height: windowHeight }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ color: "black", fontSize: s(16), fontWeight: "500" }}></Text>
                    <Text></Text>
                </View>

                

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: s(30) }}>
                    <MaterialCommunityIcons name="church" size={s(30)} color="black" />
                    <Text style={{ fontSize: s(14), fontWeight: "bold", color: "black", marginLeft: s(15) }}>Church</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("EditCategory")} style={{ flexDirection: "row", marginTop: s(30), alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Tithe</Text>
                        <Text style={{ fontSize: s(9), fontWeight: "400", color: "#9F9F9F", marginTop: s(5) }}>This occur every last sunday of the month</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={s(20)} color="#B7B7B7" />
                </TouchableOpacity>
                <View style={{ width: "100%", height: s(1), backgroundColor: "#B7B7B7", marginTop: s(7) }}></View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: s(20) }}>
                    <View>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Church building levy</Text>
                        <Text style={{ fontSize: s(9), fontWeight: "400", color: "#9F9F9F", marginTop: s(5) }}>This occur every last sunday of the month</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={s(20)} color="#B7B7B7" />
                </View>
                <View style={{ width: "100%", height: s(1), backgroundColor: "#B7B7B7", marginTop: s(7) }}></View>

                <TouchableOpacity onPress={() => navigation.navigate("AddCategory")}
                    style={{ 
                        width: s(50), 
                        height: s(50), 
                        backgroundColor: "#0073F3", 
                        borderRadius: s(50), 
                        justifyContent: "center", 
                        alignItems: "center", 
                        position: "relative", 
                        marginTop: windowHeight / 5, 
                        alignSelf: "flex-end", 
                    }}>
                    <MaterialCommunityIcons name="plus" size={s(25)} color="white" />
                </TouchableOpacity>

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

export default Category