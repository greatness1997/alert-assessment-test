import React, { useRef, useState, useEffect } from "react"
import { View, Text, Image, FlatList, ScrollView, Dimensions, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { amazon, car, church, food, education, flight } from "../../../constants/images";

import { useSelector } from 'react-redux'
import cred from '../../../config'
import axios from 'axios'
import "intl"
import "intl/locale-data/jsonp/en";

import { useToast } from "react-native-toast-notifications";
import { useCameraRoll } from "@react-native-camera-roll/camera-roll";


const Reminder = ({ navigation }) => {

    const toast = useToast()

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const [selectedOption, setSelectedOption] = useState('Reminder');
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [categoryLoading, setCategoryLoading] = useState({});

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };



    const { auth: { user } } = useSelector(state => state)
    console.log(user)

    const handleErrorNotification = (message) =>
        toast.show('Failed', {
            type: 'custom_error_toast',
            animationDuration: 150,
            message,
            data: {
                // title: 'Login Failed',
            },
        });

    const handleSuccessNotification = (message) =>
        toast.show('Category Retrieved', {
            type: 'custom_success_toast',
            animationDuration: 150,
            data: {
                // title: 'Login Failed',
            },
        });


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


    const updateCategoryStatus = async (id) => {
        setCategoryLoading((prevState) => ({
            ...prevState,
            [id]: true,
        }));
        const url = `${cred.URL}/update/category/status/${id}`;
        const options = { headers: { Authorization: `Bearer ${user.token}` } };
    
        try {
            const res = await axios.put(url, options);
            const { status, message } = res.data;
            handleSuccessNotification(message);
            getCategories()
        } catch (error) {
            console.log(error.response.data)
            setCategoryLoading((prevState) => ({
                ...prevState,
                [id]: false,
            }));
            const { message } = error.response.data
            handleErrorNotification(message)

        } finally {
            setCategoryLoading((prevState) => ({
                ...prevState,
                [id]: false,
            }));
        }

    }
    

    useEffect(() => {
        getCategories()

    }, [])


    const renderItem = ({ item }) => {

        const categoryName = item.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const beneficiary = item.beneficiary.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        const date = new Date(item.occurs);

        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        return (
            <View style={{ padding: s(5) }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={food} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                            <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>{categoryName}</Text>
                        </View>
                        <Text style={{ color: "#000000", fontWeight: "400", fontSize: s(10), marginTop: s(2) }}>{formattedDate} | {item.accountNo}</Text>
                    </View>

                    <TouchableOpacity onPress={() => updateCategoryStatus(item._id)} style={{ width: s(70), height: s(30), borderColor: "#1C913C", backgroundColor: item.status === "pay" && "#1C913C", borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: s(20) }}>
                        {categoryLoading[item._id] ? (
                            <ActivityIndicator size="small" color= "lightgray" />
                        ) : (
                            <Text style={{ color: item.status === "pay" ? "white" : "#1C913C", fontSize: s(11), fontWeight: "600" }}>{item.status.toUpperCase()}</Text>
                        )}
                    </TouchableOpacity>


                </View>
                <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
            </View>
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
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <ScrollView>
                <View style={{ padding: s(10) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                        <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                        <Text style={{ color: "#000000", fontSize: s(14), fontWeight: "600" }}>Reminders</Text>
                        <Text></Text>
                    </View>


                    <View style={{ padding: s(10), backgroundColor: "#F7F7F7", flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                        <TouchableOpacity onPress={() => handleOptionSelect('Reminder')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Reminder' ? "#1B2D56" : "#F7F7F7" }]}>
                            <Text style={[styles.optionText, { color: selectedOption === 'Reminder' ? "white" : "#1B2D56" }]}>Reminders</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleOptionSelect('Pending')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Pending' ? "#1B2D56" : "#F7F7F7" }]}>
                            <Text style={[styles.optionText, { color: selectedOption === 'Pending' ? "white" : "#1B2D56" }]}>Pending bills</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {selectedOption === "Reminder" && (<View style={{ padding: s(20) }}>
                    <View style={{ padding: s(5) }}>

                        <FlatList
                            data={categories}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item._id}
                            renderItem={renderItem}
                        />

                        {/* <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={food} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Flex</Text>
                                    </View>
                                    <Text style={{ color: "#000000", fontWeight: "400", fontSize: s(10), marginTop: s(2) }}>April 23.09.24 | <Text style={{ color: "#848484" }}>10am</Text></Text>
                                </View>

                                <View style={{ width: s(70), height: s(30), borderColor: "#1C913C", borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: s(20) }}>
                                    <Text style={{ color: "#1C913C", fontSize: s(11), fontWeight: "600" }}>PAUSE</Text>
                                </View>

                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View> */}

                        {/* <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={amazon} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Amazon</Text>
                                    </View>
                                    <Text style={{ color: "#000000", fontWeight: "400", fontSize: s(10), marginTop: s(2) }}>April 23.09.24 | <Text style={{ color: "#848484" }}>10am</Text></Text>
                                </View>

                                <View style={{ width: s(70), height: s(30), backgroundColor: "#1C913C", justifyContent: "center", alignItems: "center", borderRadius: s(20) }}>
                                    <Text style={{ color: "#fff", fontSize: s(11), fontWeight: "600" }}>PLAY</Text>
                                </View>

                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View> */}

                        {/* <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={church} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Church</Text>
                                    </View>
                                    <Text style={{ color: "#000000", fontWeight: "400", fontSize: s(10), marginTop: s(2) }}>April 23.09.24 | <Text style={{ color: "#848484" }}>10am</Text></Text>
                                </View>

                                <View style={{ width: s(70), height: s(30), borderColor: "#1C913C", borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: s(20) }}>
                                    <Text style={{ color: "#1C913C", fontSize: s(11), fontWeight: "600" }}>PAUSE</Text>
                                </View>

                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View> */}

                        {/* <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={education} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>School Fee</Text>
                                    </View>
                                    <Text style={{ color: "#000000", fontWeight: "400", fontSize: s(10), marginTop: s(2) }}>April 23.09.24 | <Text style={{ color: "#848484" }}>10am</Text></Text>
                                </View>

                                <View style={{ width: s(70), height: s(30), backgroundColor: "#1C913C", justifyContent: "center", alignItems: "center", borderRadius: s(20) }}>
                                    <Text style={{ color: "#fff", fontSize: s(11), fontWeight: "600" }}>PLAY</Text>
                                </View>

                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View> */}

                        {/* <View style={{ padding: s(5) }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={car} style={{ resizeMode: "contain", width: s(20), height: s(20), marginRight: s(5) }} />
                                        <Text style={{ color: "#000000", fontWeight: "bold", fontSize: s(13) }}>Transportation</Text>
                                    </View>
                                    <Text style={{ color: "#000000", fontWeight: "400", fontSize: s(10), marginTop: s(2) }}>April 23.09.24 | <Text style={{ color: "#848484" }}>10am</Text></Text>
                                </View>

                                <View style={{ width: s(70), height: s(30), backgroundColor: "#1C913C", justifyContent: "center", alignItems: "center", borderRadius: s(20) }}>
                                    <Text style={{ color: "#fff", fontSize: s(11), fontWeight: "600" }}>PLAY</Text>
                                </View>

                            </View>
                            <View style={{ backgroundColor: "gray", height: s(0.4), marginTop: s(8) }}></View>
                        </View> */}
                    </View>
                </View>)}

                {selectedOption === "Pending" && (<View style={{ padding: s(20) }}>
                    <View style={{ flexDirection: "row", marginTop: s(30), alignItems: "center", backgroundColor: "#B4D2FF26", borderRadius: s(5), borderColor: "#0C5ED7", borderWidth: 1, padding: s(15), justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Rent</Text>
                            <View style={{ width: s(100) }}>
                                <Text style={{ fontSize: s(10), fontWeight: "600", color: "#9F9F9F", marginTop: s(5) }}>All expense here are Tag to HOUSE RENT</Text>
                            </View>
                        </View>
                        <View style={{ width: s(100), height: s(40), backgroundColor: "#1B2D56", justifyContent: "center", alignItems: "center", borderRadius: s(20), flexDirection: "row" }}>
                            <MaterialCommunityIcons name="bell" size={s(16)} color="#FFFFFF" />
                            <Text style={{ color: "#FFFFFF", fontSize: s(10), fontWeight: "600" }}>1:46PM</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: s(10), alignItems: "center", backgroundColor: "#FFF8F6", borderRadius: s(5), borderColor: "#FE4E1D", borderWidth: 1, padding: s(15), justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Rent</Text>
                            <View style={{ width: s(100) }}>
                                <Text style={{ fontSize: s(10), fontWeight: "600", color: "#9F9F9F", marginTop: s(5) }}>All expense here are Tag to children fees</Text>
                            </View>
                        </View>
                        <View style={{ width: s(100), height: s(40), backgroundColor: "#FE4E1D", justifyContent: "center", alignItems: "center", borderRadius: s(20), flexDirection: "row" }}>
                            <MaterialCommunityIcons name="bell" size={s(16)} color="#FFFFFF" />
                            <Text style={{ color: "#FFFFFF", fontSize: s(10), fontWeight: "600" }}>1:46PM</Text>
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate("AddCategory")}
                        style={{
                            width: s(50),
                            height: s(50),
                            backgroundColor: "#0073F3",
                            borderRadius: s(50),
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            marginTop: "20%",
                            alignSelf: "flex-end",
                        }}>
                        <MaterialCommunityIcons name="plus" size={s(25)} color="white" />
                    </TouchableOpacity>
                </View>)
                }
            </ScrollView >
        </View >
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

export default Reminder