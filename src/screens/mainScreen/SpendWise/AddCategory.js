import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Dimensions, StyleSheet, Button, FlatList, TouchableOpacity, TextInput } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useToast } from "react-native-toast-notifications";

import cred from '../../../config'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { Formik } from 'formik'


const AddCategory = ({ navigation }) => {

    const toast = useToast()

    const handleErrorNotification = (message) =>
        toast.show('Failed', {
            type: 'custom_error_toast',
            animationDuration: 150,
            message,
            data: {
                // title: 'Login Failed',
            },
        });

    const handleSuccessNotification = () =>
        toast.show('Category Created Successfully', {
            type: 'custom_success_toast',
            animationDuration: 150,
            data: {
                // title: 'Login Failed',
            },
        });

    const scrollViewRef = useRef();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [banks, setBanks] = useState([])
    const [bankName, setBankName] = useState({})
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const data = banks;
    const bank = [...data].sort((a, b) => {
        const nameA = a.bankName.toUpperCase();
        const nameB = b.bankName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    // ref
    const bottomSheetModalRef = useRef(null);


    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    const { auth: { user } } = useSelector(state => state)


    const createCategory = async (values) => {
        setLoading(true)
        const url = `${cred.URL}/create/category`
        const options = { headers: { Authorization: cred.API_KEY, Token: user.token } }
        const body = {
            "name": values.name,
            "accountNo": values.accountNo,
            "bankCode": bankName === null ? "" : bankName.bankCode,
            "beneficiary": values.beneficiary,
            "occurs": values.occurs,
            "amount": values.amount,
            "service": "transfer",
            "channel": "mobile",
            "phoneNumber": values.phoneNumber
        }

        try {
            const response = await axios.post(url, body, options)
            const { data, message, status } = response.data
            handleSuccessNotification()
            setLoading(false)
            navigation.goBack()

        } catch (error) {
            const { message } = error.response.data
            handleErrorNotification(message)
            setLoading(false)
        }
    }

    const getBanks = async () => {
        console.log("here")
        const url = `${cred.URL}/vas/get-bank-codes`
        const options = { headers: { Authorization: cred.API_KEY, Token: user.token } }
        const body = {
            "service": "transfer"
        }

        try {

            const data = await axios.post(url, body, options)

            const { message, response, status } = data.data
            setBanks(response.bankCodes)
        } catch (error) {
            const { message } = error.response.data
            handleErrorNotification(message)

        }

    }

    const renderItem = ({ item }) => {

        return (
            <>
                <TouchableOpacity
                    style={styles.bankList}
                    onPress={() => {
                        setBankName(item);
                        bottomSheetModalRef.current?.dismiss();
                    }}
                >
                    <View
                        style={{
                            width: s(30),
                            height: s(30),
                            backgroundColor: "lightgrey",
                            borderRadius: s(50),
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <MaterialCommunityIcons name="bank" size={s(18)} color="grey" />
                    </View>
                    <Text style={{ fontSize: s(12), fontWeight: "500", marginLeft: s(12), color: "grey" }}>
                        {item.bankName}
                    </Text>
                </TouchableOpacity>
            </>
        );
    };

    return (
        <GestureHandlerRootView>
            <ScrollView ref={scrollViewRef}>
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

                    <View>
                        <Formik
                            initialValues={{ name: "", accountNumber: "", bankCode: "", beneficiary: "", occurs: "", amount: "", phoneNumber: "" }}
                            enableReinitialize={true}
                            onSubmit={(values) => {
                                createCategory(values)
                            }}>
                            {(props) => {
                                const { handleChange, values, handleSubmit } = props;

                                return (
                                    <View style={{ marginTop: s(10) }}>
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
                                                placeholderTextColor="#414a5e"
                                                onChangeText={handleChange('name')}
                                                value={values.name}
                                                placeholder="Example Tithe Offering"
                                                style={{ height: s(50), color: "black" }}
                                            />
                                            <Text style={{ color: "#FF0000", fontSize: s(10) }}>Required</Text>
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
                                                <TextInput
                                                    placeholderTextColor="#414a5e"
                                                    onChangeText={handleChange('beneficiary')}
                                                    value={values.beneficiary}
                                                    placeholder="Gospel Church"
                                                    style={{ height: s(50), color: "black" }}
                                                />
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
                                                <TextInput
                                                    placeholderTextColor="#414a5e"
                                                    onChangeText={handleChange('accountNo')}
                                                    value={values.accountNo}
                                                    placeholder="0 1 2 3 4 5 6 7 8 9 0"
                                                    style={{ height: s(50), color: "black" }}
                                                    maxLength={10}
                                                    keyboardType='numeric'
                                                />
                                                <TouchableOpacity onPress={() => { getBanks(), handlePresentModalPress() }}>
                                                    <MaterialCommunityIcons name="bank" size={s(25)} color="#002B8E" style={{ marginRight: s(10) }} />
                                                </TouchableOpacity>

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
                                                <TextInput
                                                    placeholderTextColor="#414a5e"
                                                    onChangeText={handleChange('occurs')}
                                                    value={values.occurs}
                                                    placeholder="01-January-2020"
                                                    style={{ height: s(50), color: "black" }}
                                                />

                                                <MaterialCommunityIcons name="calendar" size={s(20)} color="#002B8E" style={{ marginRight: s(10) }} />
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
                                                <Text style={{ color: "#002B8E", fontSize: s(11), fontWeight: "400" }}>Amount</Text>
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
                                                    placeholderTextColor="#414a5e"
                                                    onChangeText={handleChange('amount')}
                                                    value={values.amount}
                                                    placeholder="100"
                                                    style={{ height: s(50), color: "black" }}
                                                    keyboardType='numeric'
                                                />
                                                <Text style={{ color: "#FF0000", fontSize: s(10) }}>Required</Text>
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
                                                <Text style={{ color: "#002B8E", fontSize: s(11), fontWeight: "400" }}>Phone No</Text>
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
                                                    placeholderTextColor="#414a5e"
                                                    onChangeText={handleChange('phoneNumber')}
                                                    value={values.phoneNumber}
                                                    placeholder="080 000 00000"
                                                    style={{ height: s(50), color: "black" }}
                                                    keyboardType='numeric'
                                                />
                                                <Text style={{ color: "#FF0000", fontSize: s(10) }}>Required</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity onPress={() => handleSubmit()} style={{
                                            backgroundColor: "#1B2D56",
                                            width: "100%",
                                            height: s(50),
                                            marginTop: s(80),
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>

                                            {loading ? <ActivityIndicator color="white" /> : <Text style={{ color: "white", fontSize: s(12) }}>Add To Category List</Text>}
                                        </TouchableOpacity>

                                    </View>


                                );
                            }}
                        </Formik>
                    </View>

                </View>
            </ScrollView>

            <BottomSheetModalProvider>
                <View style={styles.container}>
                    <Button
                        onPress={handlePresentModalPress}
                        title="Present Modal"
                        color="black"
                    />
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        enableContentPanningGesture={false}
                    >
                        <BottomSheetView style={styles.contentContainer}>
                            <FlatList
                                data={bank}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => item._id}
                                renderItem={renderItem}
                            />
                        </BottomSheetView>

                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
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

    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 1,
    },
    bankList: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: s(10),
        marginLeft: s(10),
        padding: s(5)
    },

});

export default AddCategory