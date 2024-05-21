import React, { useRef, useState, useEffect } from 'react'
import { TextInput, View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { color } from '../../../constants/color'
import { useSelector } from "react-redux"

import cred from '../../../config'
import DeviceInfo from 'react-native-device-info';
import axios from 'axios'

import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import LoadingScreen from '../../../components/Loading'

import Geolocation from '@react-native-community/geolocation';

import { useToast } from "react-native-toast-notifications";


const AirtimeOTP = ({ code, setCode, setPinReady, maxLength, navigation, data, secureTextEntry, setModalVisible }) => {
    const [isContFocus, setIsConFocus] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const [phoneId, setPhoneId] = useState("")

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const position = () => {
        Geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            error => {
                console.error('Error getting location:', error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    };



    useEffect(() => {
        const fetchDeviceInformation = async () => {
            const deviceId = DeviceInfo.getUniqueId();
            const deviceName = DeviceInfo.getModel();
            setPhoneId(deviceId._j)
        };

        fetchDeviceInformation();
        position()
    }, []);

    const inputRef = useRef(null)

    const network = data.networkName === "Airtel" || data.networkName === "Glo" || data.networkName === "Mtn" ? data.networkName.toLowerCase() : data.networkName

    const digitArray = new Array(maxLength).fill(0)

    const digitInput = (_value, index) => {
        // const emptyInputNum = " "
        // const digit = code[index] || emptyInputNum
        const digit = code[index] || '';
        const displayDigit = digit ? '*' : '';

        return (
            <View style={styles.box} key={index}>
                <Text style={styles.text}>{displayDigit}</Text>
            </View>
        )
    }

    const handlePress = () => {
        setIsConFocus(true)
        inputRef.current.focus()
    }

    const handleOnBlur = () => {
        setIsConFocus(true)
    }

    useEffect(() => {
        if (code.length === maxLength) {
            makeTransfer()
            setCode('')
        }


    }, [code])

    const { auth: { user } } = useSelector(state => state)

    //generate uniqueId
    const generateUniqueId = () => {
        const d = new Date();
        const n = d.getTime();
        const p = user.firstName.substring(0, 5).toUpperCase();

        return `${p}-${n}`;
    };


    const toast = useToast()

    const handleErrorNotification = (message) =>
        toast.show("failed", {
            type: 'custom_error_toast',
            animationDuration: 150,
            message,
            data: {

            },
        });

    const makeTransfer = async () => {
        setIsLoading(true)
        const url = `${cred.URL}/vas/airtime/purchase`
        const options = { headers: { Authorization: cred.API_KEY, Token: user.token } }
        const body = {
            "amount": data.data.amount,
            "channel": "mobile",
            "phoneNumber": data.data.phoneNumber,
            "service": `${network}vtu`,
            "uniqueId": generateUniqueId(),
            "paymentMethod": "cash",
            "pin": code,
            "deviceId": phoneId,
            "longitude": longitude,
            "latitude": latitude,
        }


        try {
            const data = await axios.post(url, body, options)

            const { response, responseCode } = data.data
            if (responseCode === "00") {
                navigation.navigate("AirtimeCompleted", { data: response })
                setIsLoading(false)
                setModalVisible(false)
                
            }

        } catch (error) {
            setModalVisible(false)
            setIsLoading(false)
            const { message } = error.response.data
            handleErrorNotification(message)

        }
    }

    return (
        <>
            <Pressable style={styles.container} onPress={handlePress}>
                {/* <View style={styles.box}> */}
                {/* <Text style={styles.text}></Text> */}
                {digitArray.map(digitInput)}
                {/* </View> */}
            </Pressable>

            <View style={styles.inputBox}>
                <TextInput
                    keyboardType='numeric'
                    value={code}
                    onChangeText={setCode}
                    maxLength={maxLength}
                    textContentType='oneTimeCode'
                    returnKeyType='done'
                    ref={inputRef}
                    onBlur={handleOnBlur}
                    secureTextEntry={true}
                />
            </View>
            {loading && <LoadingScreen />}
        </>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        position: 'absolute',
        width: 1,
        height: 1,
        opacity: 0
    },
    box: {
        borderWidth: 2,
        borderColor: "black",
        width: s(45),
        height: s(50),
        padding: s(10),
        borderRadius: 5,
        marginRight: s(10)
    },
    container: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: s(45),
        marginBottom: s(18),
    },
    text: {
        fontSize: s(25),
        fontWeight: 'bold',
        textAlign: 'center',
        color: "black"
    }
});

export default AirtimeOTP