import React, { useRef, useState, useEffect } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, Modal, FlatList, ActivityIndicator } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { transfe, internet, light, green, black, orange, amazon, car, church, food, education, flight } from "../../../constants/images";

import { useSelector } from 'react-redux'
import cred from '../../../config'
import axios from 'axios'
import "intl"
import "intl/locale-data/jsonp/en";

import { useFocusEffect } from '@react-navigation/native';





const Home = ({ navigation }) => {

    const [selectedCard, setSelectedCard] = useState("visa");
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;

    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / windowWidth);
    }


    const [selectedOption, setSelectedOption] = useState('Income');
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [balance, setBalance] = useState(0.00)

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };


    const handleCardPress = (cardType) => {
        setSelectedCard(cardType);
    };



    const { auth: { user } } = useSelector(state => state)

    const getBalance = async () => {
        const url = `${cred.URL}/user/wallet-balance`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }

        try {
            const response = await axios.get(url, options)
            const { data, message, status } = response.data
            setBalance(data.balance)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const getCategories = async () => {
        setIsLoading(true)
        const url = `${cred.URL}/get/categories`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }

        try {

            const res = await axios.get(url, options)

            const { message, data, status } = res.data
            setCategories(data)
            // handleSuccessNotification()
        } catch (error) {
            setIsLoading(false)
            const { message } = error.response.data
            handleErrorNotification(message)

        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getCategories()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getCategories();

        }, [])
    );


    useEffect(() => {
        const intervalId = setInterval(() => {
            getBalance()
        }, 5000);
        return () => clearInterval(intervalId);
    }, [])

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })


    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity 
                 style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "#000000",
                    borderWidth: 0.7,
                    padding: s(8),
                    marginRight: s(7),
                    backgroundColor: "#DEDEDE6E",
                    borderRadius: s(3),
                    height: s(35)
                }}>
                    <MaterialCommunityIcons name="church" size={s(18)} color="#000000" />
                    <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>{item.name}</Text>
                </TouchableOpacity>
            </>
        );
    };


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }



    return (
        <ScrollView>
            <View style={{ padding: s(10) }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                    <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                    <Text style={{ color: "#586684", fontSize: s(14), fontWeight: "500" }}>Spend Wise</Text>
                    <Text></Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                    <Text style={{ color: "#000000", fontSize: s(14), fontWeight: "500" }}> Hello {user.firstName.replace(/^\w/, c => c.toUpperCase())}</Text>
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
                    <ImageBackground source={green} style={{ width: "100%", resizeMode: "cover" }} imageStyle={{ borderRadius: s(5) }} >

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
                                    <Text style={{ color: "white", fontSize: s(20), fontWeight: "bold" }}>₦{format.format(balance)}</Text>
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
                        <ImageBackground source={orange} style={{ width: windowWidth / 2.1, resizeMode: "cover", marginRight: s(6) }} imageStyle={{ borderRadius: s(5) }}>
                            <View style={{ padding: s(15) }}>
                                <View style={{ alignSelf: "flex-end", backgroundColor: "black", borderRadius: s(50) }}>
                                    <MaterialCommunityIcons name="chevron-right" color="white" size={s(18)} />
                                </View>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "400" }}>Expenses</Text>
                                <Text style={{ color: "white", fontSize: s(16), fontWeight: "bold", marginTop: s(2) }}>N-200,000,000</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <ImageBackground source={black} style={{ width: windowWidth / 2.1, resizeMode: "cover" }} imageStyle={{ borderRadius: s(5) }}>
                            <View style={{ padding: s(15) }}>
                                <View style={{ alignSelf: "flex-end", backgroundColor: "orange", borderRadius: s(50) }}>
                                    <MaterialCommunityIcons name="chevron-right" color="white" size={s(18)} />
                                </View>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "400" }}>Expected Income</Text>
                                <Text style={{ color: "white", fontSize: s(16), fontWeight: "bold", marginTop: s(2) }}>N200,000,000</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingLeft: s(10), paddingRight: s(10), flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: s(11) }}>Self Services</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(10) }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("TransferValidate")}
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
                            <Image source={transfe} style={{ width: s(30), height: s(30), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ marginTop: s(5), color: "#1b2d56", fontSize: s(11), fontWeight: "500", alignSelf: "center" }}>Transfer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Provider")}
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
                            <Image source={light} style={{ width: s(30), height: s(30), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ marginTop: s(5), color: "#1b2d56", fontSize: s(11), fontWeight: "500", alignSelf: "center" }}>Electricity</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("AirtimeOrData")}
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
                            <Image source={internet} style={{ width: s(30), height: s(30), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ marginTop: s(5), color: "#1b2d56", fontSize: s(11), fontWeight: "500", alignSelf: "center" }}>Airtime</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("AirtimeOrData")}
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
                            <Image source={internet} style={{ width: s(30), height: s(30), resizeMode: "contain" }} />
                        </View>
                        <Text style={{ marginTop: s(5), color: "#1b2d56", fontSize: s(11), fontWeight: "500", alignSelf: "center" }}>Data</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(10) }}>
                    <View
                        style={{
                            backgroundColor: "#9ad0a950",
                            padding: s(5),
                            width: "49%",
                            flexDirection: "row",
                            borderRadius: s(3)
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
                            padding: s(5),
                            width: "49%",
                            flexDirection: "row",
                            borderRadius: s(3)
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
                        <TouchableOpacity
                            onPress={() => setVisible2(true)}
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
                        </TouchableOpacity>

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

                <View style={{ flexDirection: "row", padding: s(10) }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SpendWiseCategory")}
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#0077FA",
                            borderWidth: 0.7,
                            padding: s(5),
                            marginRight: s(7),
                            borderRadius: s(3),
                            width: s(70),
                            height: s(35)
                        }}>
                        <MaterialCommunityIcons name="plus" size={s(18)} color="#0077FA" />
                        <Text style={{ color: "#0077FA", fontSize: s(12), fontWeight: "bold" }}>Add</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={categories}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => item._id}
                        renderItem={renderItem}
                    />
                </View>

                <View style={{ paddingLeft: s(10), paddingRight: s(10), flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: s(11) }}>Self Services</Text>
                </View>

                <View style={{ padding: s(10), flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                    <TouchableOpacity onPress={() => handleOptionSelect('Expenses')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Expenses' ? "#1B2D56" : "#F7F7F7" }]}>
                        <Text style={[styles.optionText, { color: selectedOption === 'Expenses' ? "white" : "#1B2D56" }]}>Expenses</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleOptionSelect('Income')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Income' ? "#1B2D56" : "#F7F7F7" }]}>
                        <Text style={[styles.optionText, { color: selectedOption === 'Income' ? "white" : "#1B2D56" }]}>Income</Text>
                    </TouchableOpacity>
                </View>

                {selectedOption === "Expenses" && (<View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(10), borderRadius: s(10) }}>
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

                {selectedOption === "Income" && (<View>
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
            </View>

            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setVisible(false);
                }}
                transparent={true}>
                <View style={{ justifyContent: "flex-end" }}>
                    <View style={{ height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <TouchableOpacity onPress={() => setVisible(false)} style={{ position: 'absolute', top: 0, left: 0, right: s(10), bottom: s(10), justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <MaterialCommunityIcons name="close-circle" color="white" size={s(25)} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "white", padding: s(20), borderRadius: s(10), height: '50%' }}>
                        <ScrollView>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: s(10) }}>
                                <Text style={{ color: "black", fontWeight: "500" }}>EXPECTED INCOME</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#0077FA", paddingLeft: s(10), paddingRight: s(10), paddingTop: s(5), paddingBottom: s(5), borderRadius: s(20) }}>
                                    <MaterialCommunityIcons name="plus" color="white" size={s(20)} />
                                    <Text style={{ color: "white", fontWeight: "500" }}>ADD</Text>
                                </View>
                            </View>

                            <View>
                                <TouchableOpacity onPress={() => handleCardPress('income')}>
                                    <View style={{ backgroundColor: selectedCard === 'income' ? "#A9C2F879" : "#E8E8E879", borderRadius: s(10), marginTop: (10), flexDirection: "row", alignItems: "center", padding: s(10), justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ backgroundColor: "white", width: s(50), height: s(50), borderRadius: s(50), justifyContent: "center", alignItems: "center" }}>
                                                <MaterialCommunityIcons name="database-outline" color="black" size={s(40)} />
                                            </View>
                                            <View style={{ marginRight: s(20) }} >
                                                <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>ALL INCOME</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>N 12,000,000.00</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleCardPress('salary')}>
                                    <View style={{ backgroundColor: selectedCard === 'salary' ? "#A9C2F879" : "#E8E8E879", borderRadius: s(10), marginTop: (10), flexDirection: "row", alignItems: "center", padding: s(10), justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ backgroundColor: "white", width: s(50), height: s(50), borderRadius: s(50), justifyContent: "center", alignItems: "center" }}>
                                                <MaterialCommunityIcons name="database-outline" color="black" size={s(40)} />
                                            </View>
                                            <View style={{ marginRight: s(20) }} >
                                                <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>Salary</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>N 12,000,000.00</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleCardPress('stock')}>
                                    <View style={{ backgroundColor: selectedCard === 'stock' ? "#A9C2F879" : "#E8E8E879", borderRadius: s(10), marginTop: (10), flexDirection: "row", alignItems: "center", padding: s(10), justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ backgroundColor: "white", width: s(50), height: s(50), borderRadius: s(50), justifyContent: "center", alignItems: "center" }}>
                                                <MaterialCommunityIcons name="database-outline" color="black" size={s(40)} />
                                            </View>
                                            <View style={{ marginRight: s(20) }} >
                                                <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>Stock</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>N 12,000,000.00</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handleCardPress('bet9ja')}>
                                    <View style={{ backgroundColor: selectedCard === 'bet9ja' ? "#A9C2F879" : "#E8E8E879", borderRadius: s(10), marginTop: (10), flexDirection: "row", alignItems: "center", padding: s(10), justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ backgroundColor: "white", width: s(50), height: s(50), borderRadius: s(50), justifyContent: "center", alignItems: "center" }}>
                                                <MaterialCommunityIcons name="database-outline" color="black" size={s(40)} />
                                            </View>
                                            <View style={{ marginRight: s(20) }} >
                                                <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>Bet9ja</Text>
                                            </View>
                                        </View>
                                        <Text style={{ color: "#000000", fontSize: s(12), fontWeight: "bold", marginLeft: s(10) }}>N 12,000,000.00</Text>
                                    </View>
                                </TouchableOpacity>


                            </View>

                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                visible={visible2}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setVisible2(false);
                }}
                transparent={true}>
                <View style={{ justifyContent: "flex-end" }}>
                    <View style={{ height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <TouchableOpacity onPress={() => setVisible2(false)} style={{ position: 'absolute', top: 0, left: 0, right: s(10), bottom: s(10), justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <MaterialCommunityIcons name="close-circle-outline" color="white" size={s(25)} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "white", padding: s(20), borderRadius: s(10), height: '60%' }}>
                        <View style={{ backgroundColor: "#FE4E1D27", borderRadius: s(10), padding: s(20), alignItems: "center" }}>
                            <View style={{ width: s(50), height: s(50), borderRadius: s(50), backgroundColor: "#FE4E1D", justifyContent: "center", alignItems: "center" }}>
                                <FontAwesome name="house-damage" color="white" size={s(25)} />
                            </View>
                            <Text style={{ color: "#FE4E1D", fontWeight: "bold", marginTop: s(5) }}>HOUSE RENT</Text>
                            <Text style={{ color: "black", fontWeight: "bold", marginTop: s(10), fontSize: s(15) }}>N 1,345,353.00</Text>
                            <Text style={{ color: "#808080", fontWeight: "500", marginTop: s(5), fontSize: s(11) }}>Due Now</Text>
                            <View style={{ marginTop: s(20), borderWidth: 1, borderRadius: s(20), borderColor: "#1B2D56", padding: s(10), width: s(100), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#1B2D56", fontWeight: "500", fontSize: s(11) }}>Pause</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: "#D1D1D127", borderRadius: s(10), padding: s(10), marginTop: s(10) }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: "#191919", fontWeight: "500", fontSize: s(12) }}>Next Payment</Text>
                                <Text style={{ color: "#0073F3", fontWeight: "500", fontSize: s(12) }}>November 12, 2034</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <View style={{ marginTop: s(20), borderWidth: 1, borderRadius: s(20), backgroundColor: "#1B2D56", padding: s(10), width: s(120), justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "white", fontWeight: "500", fontSize: s(11) }}>Confirm</Text>
                                </View>
                                <View style={{ marginTop: s(20), borderWidth: 1, borderRadius: s(20), borderColor: "#FF0000", padding: s(10), width: s(120), justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#1B2D56", fontWeight: "500", fontSize: s(11) }}>Cancel</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
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