import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { s, ms, vs } from 'react-native-size-matters'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { invList, amala, bike, bugger, rice, icecream, beans, eforiro, dress, fullAmala, cryspy, grilled } from '../../../constants/images'

import { launchImageLibrary } from 'react-native-image-picker'



const Home = ({ navigation }) => {



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: s(15), width: "100%", marginBottom: s(20) }}>
                <View style={{ width: s(35), height: s(35), borderColor: "#c6c6c6", borderWidth: s(2), borderRadius: s(5), alignItems: "center", justifyContent: "center", }}>
                    <Ionicons name="search" size={s(20)} color="#222222" />
                </View>

                <View style={styles.top}>
                    <Text style={{  color: "#ADADAD", fontWeight: "500" }}>Current Orders</Text>
                    <Text style={{  color: "#0B1036", fontWeight: "bold" , fontSize: s(13)}}>123</Text>
                    <AntDesign name="caretdown" size={s(25)} color="#000000" />
                </View>

                <View style={{ width: s(35), height: s(35), borderColor: "#c6c6c6", borderWidth: s(2), borderRadius: s(5), alignItems: "center", justifyContent: "center", }}>
                    <MaterialCommunityIcons name="bell" size={s(20)} color="#000000" />
                </View>
            </View>

            <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#4FAE5A", padding: s(10), width: "93%", borderRadius: s(10) }}>
                <View>
                    <Text style={{ color: "white", fontWeight: "400", fontSize: s(13) }}>Hello, <Text style={{ color: "white", fontWeight: "bold", fontSize: s(13) }}>Yakoyo</Text></Text>
                    <Text style={{ color: "white", fontWeight: "400", fontSize: s(13) }}>Create your list now!</Text>
                    <View style={{ backgroundColor: "#001036", width: s(100), height: s(35), borderRadius: s(20), marginTop: s(10), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>List Items</Text>
                    </View>
                </View>
                <View>
                    <Image source={invList} style={{ height: s(170), width: s(170), position: "absolute", right: s(-20), top: s(-50), }} />
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: s(20) }}>
                <TouchableOpacity onPress={() => navigation.navigate("ViewProduct", { image: amala })} style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={amala} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Amala</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={bike} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Bicycle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={bugger} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Burger</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ViewProduct", { image: rice })} style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={rice} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Rice</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: s(10) }}>
                <TouchableOpacity style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={icecream} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Ice Cream</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={beans} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Beans</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={eforiro} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Efo Riro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "20%", backgroundColor: "#f7f7f7", padding: s(10), borderRadius: s(5), alignItems: "center" }}>
                    <View style={{ backgroundColor: "white", padding: s(7), borderRadius: s(50), alignItems: "center", justifyContent: "center" }}>
                        <Image source={dress} style={{ width: s(35), height: s(35) }} />
                    </View>
                    <Text style={{ marginTop: s(15), color: "#0B1036", fontWeight: "bold", fontSize: s(11) }}>Wears</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop: s(15), marginBottom: s(5), marginLeft: s(15), color: "#0B1036", fontWeight: "500" }}>Daily Offers</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: s(15), marginRight: s(40) }}>
                    <TouchableOpacity style={{ width: "32%", marginRight: s(10) }}>
                        <View style={{ backgroundColor: "#F6B900", borderRadius: s(5), alignItems: "center" }}>
                            <Image source={grilled} style={{ width: s(80), height: s(70), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#0B1036", fontWeight: "bold", fontSize: s(13) }}>Amala Sanusi</Text>
                        <Text style={{ color: "#484848", fontWeight: "500", fontSize: s(12) }}>2 Meat 3 Pomo 1 Water</Text>
                        <View style={{ backgroundColor: "#001036", width: s(60), height: s(25), borderRadius: s(20), marginTop: s(10), justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>₦1000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "32%", marginRight: s(10) }}>
                        <View style={{ backgroundColor: "#F6B900", borderRadius: s(5), alignItems: "center" }}>
                            <Image source={fullAmala} style={{ width: "100%", height: s(70), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#0B1036", fontWeight: "bold", fontSize: s(13) }}>Crispy Chicken</Text>
                        <Text style={{ color: "#484848", fontWeight: "500", fontSize: s(12) }}>9 Piece 1 Water</Text>
                        <View style={{ backgroundColor: "#001036", width: s(60), height: s(25), borderRadius: s(20), marginTop: s(10), justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>₦1000</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "32%", marginRight: s(10) }}>
                        <View style={{ backgroundColor: "#F6B900", borderRadius: s(5), alignItems: "center" }}>
                            <Image source={cryspy} style={{ width: "100%", height: s(70), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#0B1036", fontWeight: "bold", fontSize: s(13) }}>Grilled Amala</Text>
                        <Text style={{ color: "#484848", fontWeight: "500", fontSize: s(12) }}>Bonless 1 Water</Text>
                        <View style={{ backgroundColor: "#001036", width: s(60), height: s(25), borderRadius: s(20), marginTop: s(10), justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}>₦1000</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    top: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: s(1),
        borderColor: "#e8e8e8",
        width: "73%",
        height: s(35),
        borderRadius: s(5)
    }
})

export default Home

