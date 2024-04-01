import React, { useRef, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { transfe, internet, light, green, black, orange } from "../../../constants/images";


const Home = ({ navigation }) => {

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;

    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / windowWidth);
    }

    const [selectedOption, setSelectedOption] = useState('Expenses');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };


    return (
        <ScrollView>
            <View style={{ padding: s(10) }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                    <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                    <Text style={{ color: "#586684", fontSize: s(14), fontWeight: "500" }}>Spend Wise</Text>
                    <Text></Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                    <Text style={{ color: "#000000", fontSize: s(14), fontWeight: "500" }}> Hello Sanusi</Text>
                    <MaterialCommunityIcons name="bell" size={s(25)} color="#000000" />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "#0077FA", fontSize: s(12), fontWeight: "600", marginBottom: s(2) }}>Today</Text>
                        <View style={{ backgroundColor: "#0077FA", height: s(2), width: s(40) }}></View>
                    </View>
                    <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600" }}>Tomorrow</Text>
                    <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600" }}>3Days</Text>
                    <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600" }}>7Days</Text>
                    <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600" }}>This  Week</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("SpendWiseAccount")}>
                    <ImageBackground source={green} style={{ width: "100%", resizeMode: "cover" }}>

                        <View style={{ padding: s(10) }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: s(10) }}>
                                <View
                                    style={{
                                        backgroundColor: "#68925f",
                                        width: s(35),
                                        height: s(35),
                                        borderRadius: s(50),
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                    <MaterialCommunityIcons name="wallet" size={s(18)} color="#156513" />
                                </View>

                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "white", fontSize: s(14), fontWeight: "400" }}>Liquid Cash</Text>
                                    <Text style={{ color: "white", fontSize: s(20), fontWeight: "bold" }}>200,000,000</Text>
                                </View>


                                <View
                                    style={{
                                        backgroundColor: "#68925f",
                                        width: s(35),
                                        height: s(35),
                                        borderRadius: s(50),
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                    <SimpleLine name="options-vertical" size={s(16)} color="white" />
                                </View>
                            </View>

                            <Text style={{ color: "white", fontSize: s(11), fontWeight: "400", alignSelf: "center" }}>This is the current available cash at hand</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginTop: s(5) }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Expenses")}>
                        <ImageBackground source={orange} style={{ width: windowWidth / 2.1, resizeMode: "cover", marginRight: s(6) }}>
                            <View style={{ padding: s(15) }}>
                                <View style={{ alignSelf: "flex-end", backgroundColor: "black", borderRadius: s(50) }}>
                                    <MaterialCommunityIcons name="chevron-right" color="white" size={s(18)} />
                                </View>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "400" }}>Expenses</Text>
                                <Text style={{ color: "white", fontSize: s(16), fontWeight: "bold", marginTop: s(2) }}>N-200,000,000</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <ImageBackground source={black} style={{ width: windowWidth / 2.1, resizeMode: "cover" }}>
                        <View style={{ padding: s(15) }}>
                            <View style={{ alignSelf: "flex-end", backgroundColor: "orange", borderRadius: s(50) }}>
                                <MaterialCommunityIcons name="chevron-right" color="white" size={s(18)} />
                            </View>
                            <Text style={{ color: "white", fontSize: s(12), fontWeight: "400" }}>Expected Income</Text>
                            <Text style={{ color: "white", fontSize: s(16), fontWeight: "bold", marginTop: s(2) }}>N200,000,000</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ paddingLeft: s(10), paddingRight: s(10), flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: s(11) }}>Self Services</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(10) }}>
                    <View
                        style={{
                            backgroundColor: "white",
                            width: s(70),
                            height: s(75),
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: s(5)
                        }}>
                        <View
                            style={{
                                backgroundColor: "#A9C2F833",
                                width: s(45),
                                height: s(45),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: s(5)
                            }}>
                            <Image source={transfe} style={{ width: s(35), height: s(35), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#1b2d56", fontSize: s(12), fontWeight: "500", alignSelf: "center" }}>Transfer</Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: "white",
                            width: s(70),
                            height: s(75),
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: s(5)
                        }}>
                        <View
                            style={{
                                backgroundColor: "#A9C2F833",
                                width: s(45),
                                height: s(45),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: s(5)
                            }}>
                            <Image source={light} style={{ width: s(35), height: s(35), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#1b2d56", fontSize: s(12), fontWeight: "500", alignSelf: "center" }}>Electricity</Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: "white",
                            width: s(70),
                            height: s(75),
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: s(5)
                        }}>
                        <View
                            style={{
                                backgroundColor: "#A9C2F833",
                                width: s(45),
                                height: s(45),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: s(5)
                            }}>
                            <Image source={internet} style={{ width: s(35), height: s(35), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#1b2d56", fontSize: s(12), fontWeight: "500", alignSelf: "center" }}>Airtime</Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: "white",
                            width: s(70),
                            height: s(75),
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: s(5)
                        }}>
                        <View
                            style={{
                                backgroundColor: "#A9C2F833",
                                width: s(45),
                                height: s(45),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: s(5)
                            }}>
                            <Image source={internet} style={{ width: s(35), height: s(35), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ color: "#1b2d56", fontSize: s(12), fontWeight: "500", alignSelf: "center" }}>Data</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(10) }}>
                    <View
                        style={{
                            backgroundColor: "#9ad0a950",
                            padding: s(3),
                            width: "49%",
                            flexDirection: "row"
                        }}>
                        <MaterialCommunityIcons name="bell-ring" size={s(12)} color="#1c913c" />
                        <View style={{ alignItems: "center", marginLeft: s(10), marginTop: s(8) }}>
                            <Text style={{ color: "#1c913c", fontSize: s(11), fontWeight: "400" }}>We Noticed A Credit</Text>
                            <Text style={{ color: "#1c913c", fontSize: s(9), fontWeight: "600", marginTop: s(5) }}>CLICK TO UPDATE</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffcece",
                            padding: s(3),
                            width: "49%",
                            flexDirection: "row"
                        }}>
                        <MaterialCommunityIcons name="bell-ring" size={s(12)} color="#f80319" />
                        <View style={{ alignItems: "center", marginLeft: s(10), marginTop: s(8), paddingBottom: s(5) }}>
                            <Text style={{ color: "#f80319", fontSize: s(11), fontWeight: "400" }}>We Noticed A Credit</Text>
                            <Text style={{ color: "#f80319", fontSize: s(9), fontWeight: "600", marginTop: s(5) }}>CLICK TO UPDATE</Text>
                        </View>

                    </View>
                </View>

                <View>
                    <Text></Text>
                </View>

                <View style={{ paddingLeft: s(10), paddingRight: s(10), flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: "black", fontWeight: "600" }}>Upcoming Bills</Text>
                    <Text style={{ color: "#0077FA", fontWeight: "400", fontSize: s(12) }}>See all</Text>
                </View>

                <ScrollView
                    ref={scrollViewRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={handleScrollEnd}
                >

                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(10), marginRight: s(75) }}>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: s(10),
                                padding: s(3),
                                width: "35%",
                                height: s(75),
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: s(8)
                            }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text></Text>
                                <View
                                    style={{
                                        backgroundColor: "black",
                                        width: s(50),
                                        height: s(20),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: s(10),
                                        marginBottom: s(5)
                                    }}>
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: s(11)
                                        }}>TITHE</Text>
                                </View>
                                <View>
                                    <MaterialCommunityIcons name="chevron-right" size={s(14)} color="#b7b7b7" />
                                </View>

                            </View>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: s(14) }}>N 1,123,456,00</Text>
                            <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>is Due in 7 Days</Text>
                        </View>

                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: s(10),
                                padding: s(3),
                                width: "35%",
                                height: s(75),
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: s(8)
                            }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text></Text>
                                <View
                                    style={{
                                        backgroundColor: "black",
                                        width: s(50),
                                        height: s(20),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: s(10),
                                        marginBottom: s(5)
                                    }}>
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: s(11)
                                        }}>TITHE</Text>
                                </View>
                                <View>
                                    <MaterialCommunityIcons name="chevron-right" size={s(14)} color="#b7b7b7" />
                                </View>

                            </View>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: s(14) }}>N 1,123,456,00</Text>
                            <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>is Due in 7 Days</Text>
                        </View>

                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: s(10),
                                padding: s(3),
                                width: "35%",
                                height: s(75),
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: s(8)
                            }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text></Text>
                                <View
                                    style={{
                                        backgroundColor: "black",
                                        width: s(50),
                                        height: s(20),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: s(10),
                                        marginBottom: s(5)
                                    }}>
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: s(11)
                                        }}>TITHE</Text>
                                </View>
                                <View>
                                    <MaterialCommunityIcons name="chevron-right" size={s(14)} color="#b7b7b7" />
                                </View>

                            </View>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: s(14) }}>N 1,123,456,00</Text>
                            <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>is Due in 7 Days</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={{ paddingLeft: s(10), paddingRight: s(10), flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <Text style={{ color: "black", fontWeight: "600" }}>Spending Categories</Text>
                    <Text style={{ color: "#0077FA", fontWeight: "400", fontSize: s(12) }}>See all</Text>
                </View>

                <ScrollView
                    ref={scrollViewRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={handleScrollEnd}
                >
                    <View style={{ padding: s(10), flexDirection: "row" }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#0077FA",
                            borderWidth: 0.7,
                            padding: s(5),
                            marginRight: s(7)
                        }}>
                            <MaterialCommunityIcons name="plus" size={s(25)} color="#0077FA" />
                            <Text style={{ color: "#0077FA", fontSize: s(14), fontWeight: "bold" }}>Add</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("SpendWiseCategory")} style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#000000",
                            borderWidth: 0.7,
                            padding: s(8),
                            marginRight: s(7),
                            backgroundColor: "#DEDEDE6E"
                        }}>
                            <MaterialCommunityIcons name="church" size={s(25)} color="#000000" />
                            <Text style={{ color: "#000000", fontSize: s(14), fontWeight: "bold", marginLeft: s(10) }}>Church</Text>
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#B70DF9",
                            borderWidth: 0.7,
                            padding: s(5),
                            marginRight: s(7),
                            backgroundColor: "#B70DF919",
                        }}>
                            <Entypo name="drink" size={s(20)} color="#B70DF9" />
                            <Text style={{ color: "#B70DF9", fontSize: s(14), fontWeight: "bold", marginLeft: s(10) }}>Clubbing</Text>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#F90D95",
                            borderWidth: 0.7,
                            padding: s(5),
                            marginRight: s(7),
                            backgroundColor: "#B70DF919",
                        }}>
                            <FontAwesome name="graduation-cap" size={s(20)} color="#F90D95" />
                            <Text style={{ color: "#F90D95", fontSize: s(14), fontWeight: "bold", marginLeft: s(10) }}>Education</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={{ paddingLeft: s(10), paddingRight: s(10), flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: s(11) }}>Self Services</Text>
                </View>

                <View style={{ padding: s(10), backgroundColor: "#F7F7F7", flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <TouchableOpacity onPress={() => handleOptionSelect('Expenses')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Expenses' ? "#1B2D56" : "#F7F7F7" }]}>
                        <Text style={[styles.optionText, { color: selectedOption === 'Expenses' ? "white" : "#1B2D56" }]}>Expenses</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleOptionSelect('Income')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Income' ? "#1B2D56" : "#F7F7F7" }]}>
                        <Text style={[styles.optionText, { color: selectedOption === 'Income' ? "white" : "#1B2D56" }]}>Income</Text>
                    </TouchableOpacity>
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

export default Home