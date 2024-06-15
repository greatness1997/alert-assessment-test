import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Modal, Text, SafeAreaView, View, StatusBar, Alert, ScrollView, ActivityIndicator, TouchableOpacity, Image, TextInput } from 'react-native'
import { s } from "react-native-size-matters"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from 'react-redux'
import cred from '../../config'
import axios from 'axios'
import "intl"
import "intl/locale-data/jsonp/en";

import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppButton from '../../components/AppButtonBlue'
import { Logo, comm } from "../../constants/images"

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useToast } from "react-native-toast-notifications";






const WalletHistory = ({ navigation }) => {

    const [loading, setLoading] = useState(false)
    const [commLoading, setCommLoading] = useState(false)
    const [data, setData] = useState({ "commission": 0, "expenses": 0, "income": 0, "totalExp": 0 })
    const [balance, setBalance] = useState(0.00)
    const [commission, setCommission] = useState(0.00)
    const [modalBalance, setModalBalance] = useState(false)

    const { auth: { user } } = useSelector(state => state)

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
        toast.show('Commission Withdrawal Success', {
            type: 'custom_success_toast',
            animationDuration: 150,
            data: {
                // title: 'Login Failed',
            },
        });

    const close = () => {
        setModalBalance(false)
    }

    const walletSummary = async () => {

        const url = `${cred.URL2}/user/get-wallet-summary`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }

        try {
            setLoading(true)
            const response = await axios.get(url, options)
            const { data } = response.data

            setData(data)

        } catch (error) {
            console.log(error.response.data, 'from catch')
            const { message } = error.response.data
            Alert.alert(`${message}`);
            setLoading(false)

        }
    }

    const getBalance = async () => {
        const url = `${cred.URL}/user/wallet-balance`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }

        try {
            const response = await axios.get(url, options)
            const { data, message, status } = response.data
            setBalance(data.balance)
            setCommission(data.commission)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const withdrawCommission = async (res) => {
        setCommLoading(true)
        const body = {
            amount: Number(res.amount)
        }
        const url = `${cred.URL}/user/transfer-commission`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }

        try {
            const response = await axios.post(url, body, options)
            const { message, status } = response.data
            if (status === "success") {
                setCommLoading(false)
                setModalBalance(false)
                handleSuccessNotification(message)
            }

        } catch (error) {
            const { message } = error.response.data
            setCommLoading(false)
            setModalBalance(false)
            handleErrorNotification(message)
        }
    }

    useEffect(() => {
        walletSummary()
        const intervalId = setInterval(() => {
            getBalance()
        }, 5000);
        return () => clearInterval(intervalId);
    }, [])

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        box1: {
            marginTop: s(20),
            backgroundColor: "#1b2d56",
            width: windowWidth,
            height: "70%",
            borderRadius: s(15),
            // alignItems: "center"
        },
        box2: {
            // marginTop: s(20),
            backgroundColor: "white",
            width: "92%",
            height: "60%",
            borderRadius: s(10),
            marginLeft: "4%"
        },
        box3: {
            // marginTop: s(20),
            backgroundColor: "white",
            width: "92%",
            height: s(80),
            borderRadius: s(10),
            marginLeft: "4%",
            marginTop: s(10)
        },
        box4: {
            // marginTop: s(20),
            backgroundColor: "white",
            width: "92%",
            height: s(85),
            borderRadius: s(10),
            marginLeft: "4%",
            marginTop: s(10),
        },
        boxShadow: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            margin: 3,
        },
        modalScreen: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        transparentContainer: {
            flex: 1,
            backgroundColor: 'transparent',
        },
        contentContainer: {
            flex: 0.5,
            backgroundColor: 'white',
            borderTopLeftRadius: s(10),
            borderTopRightRadius: s(10),
            paddingHorizontal: s(5),
            paddingVertical: s(15),
        },
        serviceContainer: {
            width: "95%",
            height: 65,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        closeIconContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: s(10)
        },
        emailContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: s(0.5),
            borderRadius: s(10),
            borderColor: "black",
            paddingBottom: s(1),
            width: '100%',
            height: s(45),
            marginTop: '2%',
        },
        input: {
            flex: 1,
            color: "black",
            marginLeft: s(5)
        },
    })

    const Schema = Yup.object().shape({
        amount: Yup.string().required('Commission Amount is Required'),
    });


    return (
        <ScrollView>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ flexDirection: "row", marginTop: s(10), marginLeft: s(18) }}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name='arrow-left-thick' size={s(22)} color="black" />
                    </TouchableWithoutFeedback>

                    <View style={{ justifyContent: "center", marginLeft: s(100) }}>
                        <Text style={{ fontSize: s(16), fontWeight: "bold", color: "black" }}>Wallet Summary</Text>
                    </View>

                </View>
                <View style={styles.box1}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: s(15), paddingRight: s(20) }}>
                        <View>
                            <Text style={{ fontSize: s(20), fontWeight: "600", color: "white" }}>{`₦ ${format.format(balance)}`}</Text>
                            <Text style={{ marginTop: s(3), fontWeight: "500", color: "white" }}>Wallet Balance</Text>
                        </View>
                        <Image source={Logo} style={{ width: s(70), height: s(70), resizeMode: "contain" }} />
                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity onPress={() => navigation.navigate("WalletHistoryList")} style={{ padding: s(5), flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                            <Text style={{ fontSize: s(12), fontWeight: "bold", color: "#0C3CB9" }}>Today</Text>
                            <MaterialCommunityIcons name="chevron-right" size={s(22)} color="#2B3CB6" />
                        </TouchableOpacity>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "black" }}>Total Expenses</Text>
                            <Text style={{ marginTop: s(3), fontWeight: "bold", color: "grey" }}>{`₦ ${format.format(data.totalExp)}`}</Text>
                        </View>
                        <View style={{ flexDirection: "row", padding: s(10) }}>

                            {data.income !== 0 || data.expenses !== 0 ? (
                                <>
                                    <View
                                        style={{
                                            height: s(20),
                                            width: `${(data.income / (data.income + data.expenses)) * 100}%`,
                                            backgroundColor: "#1B2D55",
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            height: s(20),
                                            width: `${(data.expenses / (data.income + data.expenses)) * 100}%`,
                                            backgroundColor: "#7EBAED",
                                        }}
                                    ></View>
                                </>
                            ) : (
                                <>
                                    <View
                                        style={{
                                            height: s(20),
                                            width: "50%",
                                            backgroundColor: "#1B2D55",
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            height: s(20),
                                            width: "50%",
                                            backgroundColor: "#7EBAED",
                                        }}
                                    ></View>
                                </>
                            )}


                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: s(5) }}>
                            <View style={{ flexDirection: "row", padding: s(5), alignItems: "center" }}>
                                <View style={{ width: s(25), height: s(25), backgroundColor: "#1B2D55" }}>
                                </View>
                                <View style={{ marginLeft: s(5) }}>
                                    <Text style={{ fontWeight: "500", color: "grey" }}>{`₦ ${format.format(data.income)}`}</Text>
                                    <Text style={{ color: "grey" }}>Income</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", padding: s(5), alignItems: "center" }}>
                                <View style={{ width: s(25), height: s(25), backgroundColor: "#7EBAED" }}>
                                </View>
                                <View style={{ marginLeft: s(5) }}>
                                    <Text style={{ fontWeight: "500", color: "grey" }}>{`₦ ${format.format(data.expenses)}`}</Text>
                                    <Text style={{ color: "grey" }}>Expense</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.box3, styles.boxShadow]}>

                    </View>

                    <View style={[styles.box4, styles.boxShadow]}>
                        <TouchableOpacity onPress={() => navigation.navigate("WalletHistoryList")} style={{ padding: s(5), flexDirection: "row", alignItems: "center", justifyContent: "flex-end", marginBottom: s(5) }}>
                            <Text style={{ fontSize: s(12), fontWeight: "bold", color: "#0C3CB9" }}>View</Text>
                            <MaterialCommunityIcons name="chevron-right" size={s(22)} color="#2B3CB6" />
                        </TouchableOpacity>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: s(15), paddingRight: s(15) }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={comm} style={{ width: s(35), height: s(35) }} />
                                <View style={{ marginLeft: s(20) }}>
                                    <Text style={{ marginBottom: s(2), fontWeight: "bold", fontSize: s(12), color: "black" }}>Commission Tracker</Text>
                                    <Text style={{ fontWeight: "500", fontSize: s(14), color: "black" }}>{`₦ ${format.format(commission)}`}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setModalBalance(true)} style={{ padding: s(10), backgroundColor: "#1b2d56", borderRadius: s(20), width: "30%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white" }}>Withdraw</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <Modal
                    visible={modalBalance}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={styles.modalScreen}>
                        <View style={styles.transparentContainer} />
                        <View style={styles.contentContainer}>
                            <View style={styles.closeIconContainer}>
                                <Text></Text>
                                <TouchableWithoutFeedback onPress={close}>
                                    <MaterialCommunityIcons name="close-circle" size={s(21)} color="black" />
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{ width: "90%", marginLeft: "5%" }}>
                                <Formik
                                    initialValues={{ amount: "" }}
                                    enableReinitialize={true}
                                    onSubmit={(values) => {
                                        if(values.amount > commission){
                                            handleErrorNotification("Invalid Commission Amount")
                                            return
                                        }
                                        Schema.validate(values)
                                            .then((res) => {
                                                withdrawCommission(res);
                                            })
                                            .catch((err) => handleErrorNotification(err.message));
                                    }}>
                                    {(props) => {
                                        const { handleChange, values, handleSubmit, setFieldValue } = props;

                                        return (
                                            <View>
                                                <View style={{ marginTop: s(10), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                    <View style={{  width: "60%" }}>
                                                        {/* <Text style={{ marginTop: 10, fontWeight: "500", color: "black" }}>Amount</Text> */}
                                                        <View style={styles.emailContainer}>
                                                            <TextInput
                                                                style={styles.input}
                                                                placeholder='Enter Amount'
                                                                placeholderTextColor="grey"
                                                                keyboardType='numeric'
                                                                onChangeText={(value) => setFieldValue('amount', value)}
                                                                value={values.amount}
                                                                maxLength={15}
                                                            />
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity onPress={handleSubmit} style={{ padding: 15, backgroundColor: "#1b2d56", borderRadius: 10, width: "35%", height: s(45), justifyContent: "center", alignItems: "center" }}>
                                                        {commLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={{ color: "white" }}>PROCEED</Text>}
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={{ color: "black", fontWeight: "500", width: "70%", textAlign: "center", alignSelf: "center", marginTop: s(10) }}>Withdraw commission to your wallet with just a click.</Text>
                                            </View>
                                        );
                                    }}
                                </Formik>
                            </View>

                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </ScrollView>
    )
}



export default WalletHistory