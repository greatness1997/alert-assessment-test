import React, { useRef, useState, useEffect } from "react"
import { View, Text, ActivityIndicator, ScrollView, Dimensions, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { spout, visa, master } from "../../../constants/images";

import { useSelector } from 'react-redux'
import cred from '../../../config'
import axios from 'axios'
import "intl"
import "intl/locale-data/jsonp/en";

import { useToast } from "react-native-toast-notifications";

import { useFocusEffect } from '@react-navigation/native';



const Category = ({ navigation }) => {

    const toast = useToast()

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    const { auth: { user } } = useSelector(state => state)

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

    useEffect(() => {
        getCategories()
    }, [navigation])

    useFocusEffect(
        React.useCallback(() => {
            getCategories();

        }, [])
    );


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
            <>
                <TouchableOpacity onPress={() => navigation.navigate("EditCategory")} style={{ flexDirection: "row", marginTop: s(25), alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: s(15), fontWeight: "600", color: "#000000" }}>{categoryName}</Text>
                        <Text style={{ fontSize: s(10), fontWeight: "400", color: "#9F9F9F", marginTop: s(5) }}>{item.accountNo} | {beneficiary} | {formattedDate}</Text>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={s(20)} color="#B7B7B7" />
                </TouchableOpacity>
                <View style={{ width: "100%", height: s(1), backgroundColor: "#B7B7B7", marginTop: s(7) }}></View>
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
            <View style={{ padding: s(20), backgroundColor: "white", height: windowHeight }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ color: "black", fontSize: s(16), fontWeight: "500" }}></Text>
                    <Text></Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <MaterialCommunityIcons name="church" size={s(30)} color="black" />
                    <Text style={{ fontSize: s(14), fontWeight: "bold", color: "black", marginLeft: s(15) }}>Church</Text>
                </View>

                <View>
                    <FlatList
                        data={categories.reverse()}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => item._id}
                        renderItem={renderItem}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("AddCategory")}
                    style={{
                        width: s(50),
                        height: s(50),
                        backgroundColor: "#0073F3",
                        borderRadius: s(50),
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        marginTop: windowHeight / 10,
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