import React, { useRef, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { amazon, car, church, food, education, flight } from "../../../constants/images";


const Expenses = ({ navigation }) => {

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;


    const [selectedOption, setSelectedOption] = useState('Expenses');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };


    return (
        <View style={{ backgroundColor: "white", height: "100%" }}> 
            <ScrollView>
                <View style={{ padding: s(10) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                        <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                        <Text style={{ color: "#000000", fontSize: s(14), fontWeight: "600" }}>Expenses</Text>
                        <Text></Text>
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

                {selectedOption === "Expenses" && (<View style={{ padding: s(20) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F8F8F8", padding: s(10), borderRadius: s(10) }}>
                        <Text style={{ color: "#676767", fontSize: s(12), fontWeight: "500" }}>Total Expenses</Text>
                        <Text style={{ color: "#1B2D56", fontSize: s(13), fontWeight: "bold" }}>N 12,000</Text>
                    </View>

                    <View style={{ padding: s(5) }}>
                        <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={food} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Flex</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#D00808", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={amazon} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Amazon</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#D00808", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={church} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Church</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#D00808", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={education} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>School fee</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#D00808", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={car} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Transportation</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#D00808", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image source={flight} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Travels</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#D00808", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                        </View>
                    </View>
                </View>)}

                {selectedOption === "Income" && (<View style={{ padding: s(10) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#00910029", height: s(50), padding: s(10), borderRadius: s(5) }}>
                        <Text style={{ color: "#676767", fontSize: s(12), fontWeight: "500" }}>Total Income</Text>
                        <Text style={{ color: "#007700", fontSize: s(13), fontWeight: "bold" }}>N 12,000</Text>
                    </View>

                    <View style={{ padding: s(10) }}>
                        <View style={{ padding: s(5), marginTop: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Salary</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#007700", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5), marginTop: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Stock</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#007700", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5), marginTop: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Gambling</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#007700", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>

                        <View style={{ padding: s(5), marginTop: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Family Business</Text>
                                        <Text style={{ color: "#848484", fontWeight: "400", fontSize: s(10) }}>23.09.24 | 9am</Text>
                                    </View>
                                </View>
                                <Text style={{ color: "#007700", fontSize: s(11), fontWeight: "600" }}>N 12,000</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View>
                    </View>
                </View>)}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    optionContainer: {
        padding: s(7),
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(10),
    },
    optionText: {
        fontWeight: "600",
    },
});

export default Expenses