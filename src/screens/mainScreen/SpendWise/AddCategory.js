import React, { useRef, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { spout, visa, master } from "../../../constants/images";


const AddCategory = ({ navigation }) => {

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



                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: s(20) }}>
                    <Text style={{ fontSize: s(16), fontWeight: "bold", color: "black", marginLeft: s(15) }}>Add New Category</Text>
                </View>

                <View style={{ marginTop: s(30) }}>
                    <View style={{
                        width: s(100),
                        height: s(20),
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        zIndex: 1,
                        marginLeft: s(15)
                    }}>
                        <Text style={{ color: "#002B8E", fontSize: s(11), fontWeight: "400" }}>Name of Category</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        height: s(50),
                        borderWidth: s(1),
                        borderColor: "#000000",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: s(7),
                        position: "absolute",
                        marginTop: s(15)
                    }}>
                        <TextInput
                            placeholder="Example Tithe Offering"
                            style={{ height: s(50) }}
                        />
                        <Text style={{ color: "#FF0000", fontSize: s(10) }}>Required</Text>
                    </View>
                </View>

                <View style={{ marginTop: s(60) }}>
                    <View style={{
                        width: s(80),
                        height: s(20),
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        zIndex: 1,
                        marginLeft: s(15)
                    }}>
                        <Text style={{ color: "#002B8E", fontSize: s(11), fontWeight: "400" }}>Beneficiary</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        height: s(50),
                        borderWidth: s(1),
                        borderColor: "#000000",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: s(7),
                        position: "absolute",
                        marginTop: s(15)
                    }}>
                        <Text style={{ color: "#2F2F2F", fontSize: s(13), fontWeight: "600", marginLeft: s(15) }}>Holy Trinity Church</Text>
                        <Text style={{ color: "#FF0000", fontSize: s(10) }}>Required</Text>
                    </View>
                </View>

                <View style={{ marginTop: s(60) }}>
                    <View style={{
                        width: s(100),
                        height: s(20),
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        zIndex: 1,
                        marginLeft: s(15)
                    }}>
                        <Text style={{ color: "#002B8E", fontSize: s(11), fontWeight: "400" }}>Account Details</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        height: s(50),
                        borderWidth: s(1),
                        borderColor: "#000000",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: s(7),
                        position: "absolute",
                        marginTop: s(15)
                    }}>
                        <Text style={{ color: "#2F2F2F", fontSize: s(13), fontWeight: "600", marginLeft: s(15) }}>0 2 4 2 2 5 1 4 5 1</Text>
                        <MaterialCommunityIcons name="bank" size={s(25)} color="#002B8E" />
                    </View>
                </View>

                <View style={{ marginTop: s(60) }}>
                    <View style={{
                        width: s(70),
                        height: s(20),
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        zIndex: 1,
                        marginLeft: s(15)
                    }}>
                        <Text style={{ color: "#002B8E", fontSize: s(11), fontWeight: "400" }}>Occurs</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        height: s(50),
                        borderWidth: s(1),
                        borderColor: "#000000",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: s(7),
                        position: "absolute",
                        marginTop: s(15)
                    }}>
                        <Text style={{ color: "#2F2F2F", fontSize: s(13), fontWeight: "600", marginLeft: s(15) }}>Every Last Sunday</Text>
                        <MaterialCommunityIcons name="calendar" size={s(20)} color="#002B8E" style={{ marginRight: s(20) }} />
                    </View>
                </View>

                <View style={{
                    backgroundColor: "#1B2D56",
                    width: "100%",
                    height: s(50),
                    marginTop: s(80),
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "white", fontSize: s(12) }}>Add To Category List</Text>
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

export default AddCategory