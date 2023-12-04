import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, StatusBar, Image, TextInput, Alert, Platform } from 'react-native'
import { color } from '../../../../constants/color'
import { Logo, FingerPrint, image } from '../../../../constants/images'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useFocusEffect } from '@react-navigation/native'

import { Formik } from 'formik';
import * as Yup from 'yup';
import AppButton from '../../../../components/AppButtonBlue'
import cred from '../../../../config'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import TouchID from 'react-native-touch-id'
import DeviceInfo from 'react-native-device-info';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment'

import Clipboard from '@react-native-clipboard/clipboard'
import Share from "react-native-share"

import Unlock from '../Consent&Release'




const VirtualAccount = ({ navigation, route }) => {

    const data = route.params

    const vfdAcctDetails = {
        "accountName": "N/A",
        "accountNo": "N/A",
        "bank": "N/A"
    }

    const [loading, setIsLoadking] = useState(false)
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('');
    const [date, setDate] = useState(new Date());
    const [startText, setStartText] = useState('')
    const [userData, setUserData] = useState({})
    const [accountDetails, setAccountDetails] = useState(vfdAcctDetails)

    const dispatch = useDispatch()


    const onChange = (selectedDate) => {
        setShow(false);
        if (!selectedDate) return; // Handle case when no date is selected

        setDate(selectedDate);

        if (mode === 'date') {
            setStartText(formatDate(selectedDate));
        }
        setMode('');
    };

    const formatDate = (date) => {
        if (!date) return '';
        return moment(date).format('DD-MMM-YYYY');

    };

    const showMode = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };

    const Schema = Yup.object().shape({
        bvn: Yup.string().required('BVN is required'),
    });


    const { auth: { user } } = useSelector(state => state)


    const createVirtualAccount = async ({ bvn, dateOfBirth }) => {
        console.log("hello")
        console.log(bvn, dateOfBirth, "from from")
        const url = `${cred.URL}/virtual-account-create`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }
        const body = {
            bvn: bvn,
            dateOfBirth: dateOfBirth
        }

        try {
            setIsLoadking(true)
            const response = await axios.post(url, body, options)
            const { status, message, } = response.data
            console.log(response.data)

            if (status === "success") {
                Alert.alert(`${status}`, `${message}`)
                setIsLoadking(false)
                navigation.navigate("Profile")
            } else {
                setError(message)
                setIsLoadking(false)
            }



        } catch (err) {
            // console.log(error.response.data, 'from catch')
            const { error } = err.response.data
            setError(`${error}`);
            setIsLoadking(false)
        }
    }



    const getProfile = async () => {
        const url = `${cred.URL}/user/profile`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }

        try {
            const response = await axios.get(url, options)
            const { user } = response.data
            setAccountDetails(user.vfdAcctDetails || vfdAcctDetails)
            setUserData(user)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    useEffect(() => {
        getProfile()
    }, [])

    const shareText = async () => {
        try {
            const text = {
                message: `Bank: ${accountDetails.bank}\nAccount Number: ${accountDetails.accountNo}\nAccount Name: ${accountDetails.accountName}`,
            }
            await Share.open(text)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCopy = async (text) => {
        try {
            await Clipboard.setString(text)
            Alert.alert("Copied!")
        } catch (error) {
            console.log(error)
        }
    }

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            padding: s(8)

        },
        profileImage: {
            width: s(100),
            height: s(100),
            borderWidth: s(6),
            borderRadius: s(100),
            borderColor: color.colorOne,
            backgroundColor: "white",
            marginTop: s(18),
            justifyContent: "center", alignItems: "center"
        },
        loginContainer1: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: s(1),
            borderRadius: s(50),
            padding: ms(10),
            borderColor: userData.bvn ? "#d88e29" : "#3483f4",
            width: '100%',
            height: s(50),
            marginBottom: s(20),
        },
        loginContainer2: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: s(1),
            borderRadius: s(50),
            padding: ms(10),
            borderColor: "#3483f4",
            width: '100%',
            height: s(50),
            marginBottom: s(10),
        },
        input: {
            flex: 1,
            height: s(40),
            color: "black",
            paddingLeft: s(10),
            fontSize: s(15)
        },
        btn: {
            marginTop: s(28),
            height: s(50)
        },
        msgBox: {
            width: "100%",
            backgroundColor: "#fff3e2",
            alignItems: "center",
            padding: s(15),
            marginTop: s(25)
        },
        serviceContainer: {
            width: "95%",
            height: 65,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
    })

    return (
        <>

            <View style={styles.container}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: s(50) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={s(22)} color="black" />
                    </TouchableOpacity>
                    {accountDetails.accountNo === "N/A" ? <Text style={{ fontSize: s(16), fontWeight: "600", color: "#2e2e2e" }}>Account Validation</Text> : <Text style={{ fontSize: s(16), fontWeight: "600", color: "#2e2e2e" }}>Account Details</Text>}
                    <Text></Text>
                </View>
                {error && <View style={styles.msgBox}>
                    <Text style={{ fontSize: s(12), fontWeight: "500", color: "#1b2d56", textAlign: "center", marginTop: s(5) }}>
                        Hey! We are getting an Error, Please Check If The Details Below Are Correct.
                    </Text>
                </View>}
                {accountDetails.accountNo === "N/A" ? <View>
                    <Formik
                        initialValues={{ bvn: userData.bvn ? userData.bvn : "" }}
                        enableReinitialize={true}
                        onSubmit={(values) => {
                            Schema.validate(values)
                                .then((res) => {
                                    createVirtualAccount({ bvn: res.bvn, dateOfBirth: startText })
                                })
                                .catch((err) => setError("Both Fields Are Required"));
                        }}>
                        {(props) => {
                            const { handleChange, values, handleSubmit } = props;

                            return (
                                <View style={{ marginTop: s(40) }}>
                                    {userData.bvn ? <Text style={{ color: "#717171", marginBottom: s(10), fontSize: s(12), marginLeft: s(5) }}>Is This Your BVN?</Text> : <Text style={{ color: "#717171", marginBottom: s(10), fontSize: s(12), marginLeft: s(5) }}>BVN</Text>}
                                    <View style={styles.loginContainer1}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Enter you Bvn'
                                            placeholderTextColor="#bababa"
                                            onChangeText={handleChange('bvn')}
                                            keyboardType='numeric'
                                            value={values.bvn}
                                        />
                                        <MaterialCommunityIcons name="lock" size={25} color="#d0d0d0" style={{ marginRight: s(10) }} />
                                    </View>

                                    <Text style={{ color: "#717171", marginBottom: s(10), fontSize: s(12), marginLeft: s(5) }}>Date Of Birth</Text>
                                    <TouchableOpacity onPress={() => showMode("date")} style={styles.loginContainer2}>
                                        <MaterialCommunityIcons name="calendar" size={25} color="#1b2d55" style={{ marginLeft: s(10), marginRight: s(15) }} />
                                        {startText ? <Text style={{ color: "#2e2e2e", fontWeight: "600", fontSize: s(13) }}>{startText}</Text> : <Text style={{ fontSize: s(13), color: "#bababa" }}>Must Match the BVN</Text>}
                                        <Text></Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: s(10), fontWeight: '500', color: "#818181", marginBottom: s(20) }}>Please Make Sure Your Date Of Birth Matches Your BVN.</Text>
                                    {error && <Text style={{ color: "#DD1515", }}>{error}</Text>}
                                    <AppButton title="Validate" onPress={() => createVirtualAccount({ bvn: values.bvn, dateOfBirth: startText })} isSubmitting={loading} style={styles.btn} />

                                    {show && (
                                        <DateTimePickerModal
                                            isVisible={show}
                                            mode="date"
                                            date={date}
                                            onConfirm={onChange}
                                            onCancel={() => setShow(false)}
                                        />
                                    )}
                                </View>


                            );
                        }}
                    </Formik>
                </View> : null}

                {accountDetails.accountNo !== "N/A" ? <View style={{ marginTop: s(40) }}> 
                    <View style={styles.modalScreen}>
                        <View style={styles.transparentContainer1} />
                        <View style={styles.contentContainer1}>
                            <ScrollView>
                                <View style={{ padding: 0, marginTop: 0, width: "100%", backgroundColor: "#f5f5f5", borderWidth: 1, borderColor: "#3483f5", borderRadius: s(10) }}>

                                    <View style={{ alignItems: "center", padding: s(10), marginBottom: s(0) }}>

                                        <View style={styles.serviceContainer}>
                                            <View >

                                                <Text style={{ fontWeight: "500", marginLeft: 20, fontSize: 12, color: "black" }}>Account Name</Text>
                                                <Text style={{ fontWeight: "bold", marginLeft: 20, fontSize: 15, marginTop: 5, color: "black" }}>{accountDetails.accountName}</Text>

                                            </View>
                                            {accountDetails.accountName !== "N/A" && <TouchableOpacity onPress={() => handleCopy(accountDetails.accountName)}>
                                                <Ionicons name="copy-outline" size={s(18)} color="#3c68f8" style={{ marginLeft: s(5) }} />
                                            </TouchableOpacity>}

                                        </View>
                                    </View>
                                    <View style={{ height: 1, backgroundColor: "lightgrey", width: "80%", marginLeft: s(30) }}></View>
                                    <View style={{ alignItems: "center", padding: s(10), marginBottom: s(0) }}>

                                        <View style={styles.serviceContainer}>
                                            <View >

                                                <Text style={{ fontWeight: "500", marginLeft: 20, fontSize: 12,  color: "black" }}>Bank Name</Text>
                                                <Text style={{ fontWeight: "bold", marginLeft: 20, fontSize: 15, marginTop: 5, color: "black" }}>{accountDetails.bank}</Text>

                                            </View>
                                            {accountDetails.bank !== "N/A" && <TouchableOpacity onPress={() => handleCopy(accountDetails.bank)}>
                                                <Ionicons name="copy-outline" size={s(18)} color="#3c68f8" style={{ marginLeft: s(5) }} />
                                            </TouchableOpacity>}
                                        </View>
                                    </View>
                                    <View style={{ height: 1, backgroundColor: "lightgrey", width: "80%", marginLeft: s(30) }}></View>
                                    <View style={{ alignItems: "center", padding: s(10), marginBottom: s(0) }}>

                                        <View style={styles.serviceContainer}>
                                            <View >
                                                <Text style={{ fontWeight: "500", marginLeft: 20, fontSize: 12, color: "black" }}>Account Number</Text>
                                                <Text style={{ fontWeight: "bold", marginLeft: 20, fontSize: 15, marginTop: 5, color: "black" }}>{accountDetails.accountNo}</Text>
                                            </View>
                                            {accountDetails.accountNo !== "N/A" && <TouchableOpacity onPress={() => handleCopy(accountDetails.accountNo)}>
                                                <Ionicons name="copy-outline" size={s(18)} color="#3c68f8" style={{ marginLeft: s(5) }} />
                                            </TouchableOpacity>}

                                        </View>
                                    </View>

                                    <View style={{ height: 1, backgroundColor: "lightgrey", width: "80%", marginLeft: s(30) }}></View>
                                    <View style={{ alignItems: "center", padding: s(10), marginBottom: s(0) }}>

                                        <View style={styles.serviceContainer}>
                                            <View >
                                                <Text style={{ fontWeight: "500", marginLeft: 20, fontSize: 12, color: "black" }}>Wallet ID</Text>
                                                <Text style={{ fontWeight: "bold", marginLeft: 20, fontSize: 15, marginTop: 5, color: "black" }}>{user.walletId}</Text>
                                            </View>
                                            {accountDetails.accountNo !== "N/A" && <TouchableOpacity onPress={() => handleCopy(user.walletId)}>
                                                <Ionicons name="copy-outline" size={s(18)} color="#3c68f8" style={{ marginLeft: s(5) }} />
                                            </TouchableOpacity>}

                                        </View>
                                    </View>

                                </View>

                                {accountDetails.accountNo !== "N/A" ? <AppButton title="Share Account Details" style={{ marginTop: s(25) }} onPress={() => shareText()} /> : null}
                            </ScrollView>
                        </View>
                    </View>
                </View> : null}

                <Unlock />

            </View>
        </>
    )
}



export default VirtualAccount

