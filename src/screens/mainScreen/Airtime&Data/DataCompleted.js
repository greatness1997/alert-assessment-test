import React, { useState, useRef } from 'react'
import { Modal, Image, SafeAreaView, View, StyleSheet, Text, Alert, TextInput, TouchableOpacity } from 'react-native'



import { Complete } from '../../../constants/animation';
import Lottie from "lottie-react-native"



import { color } from '../../../constants/color';
import { s } from 'react-native-size-matters'

import moment from 'moment'
import { Print } from '../../../constants/images'
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import ViewShot from 'react-native-view-shot';
import Share from "react-native-share"

import "intl"
import "intl/locale-data/jsonp/en";

import { LogoBlue } from '../../../constants/images';



const DataCompleted = ({ navigation, route, setModalVisible }) => {

    const [showShareButton, setShowShareButton] = useState(true);
    const ref = useRef();

    const data = route.params

    const date = moment().format('DD-MM-YYYY')

    const time = moment().format('HH:mm')

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })

    const captureImage = async () => {
        try {
            const uri = await ref.current.capture();
            await CameraRoll.save(uri, { type: 'photo', album: 'MyAppAlbum' })
            Alert.alert('Saved to Library');
        } catch (error) {
            console.log(error)
            Alert.alert('Failed to Library')
        }
    };

    const shareImage = async () => {
        try {
            const uri = await ref.current.capture();
            await Share.open({ url: uri })
        } catch (error) {
            console.log(error)
        }
    }

    return (

       <View style={{ flex: 1, marginTop: s(100), marginLeft: s(15), width: "90%" }}>
            <View style={{  alignItems: "center" , justifyContent: "center"}}>
                <Lottie
                    source={Complete}
                    autoPlay
                    loop
                    style={styles.animation}
                />

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: s(10), width: "85%",  }}>
                    <Text style={{ fontSize: s(13), fontWeight: "600", color: "black",marginTop: s(20) }}>Transaction Completed</Text>
                    <Text style={{ fontSize: s(14), fontWeight: "400", color: "black", marginTop: s(5), textAlign: "center" }}>You have successfully Purchased Airtime {`₦${format.format(data.data.amount)}`} to {data.data.account}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.done}>
                <Text style={{ fontSize: s(12), fontWeight: "bold", color: "#ffffff" }}>Done</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    botton: {
        backgroundColor: color.primary2,
        width: "100%",
        marginTop: s(20)
    },
    animation: {
        position: "relative",
        width: s(150),
        height: s(150),
        backgrounColor: "green",
    },
    container: {
        width: "100%",
        height: s(300),
        backgroundColor: "white",
        // alignItems: "center",
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 0,
        padding: 20
    },
    print: {
        width: s(40),
        height: s(40),
        borderWidth: 2,
        borderColor: color.colorSeven,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(40),
        marginTop: s(20),
        marginBottom: 10
    },
    print: {
        backgroundColor: "#ffffff", 
        width: "45%", 
        padding: s(15), 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: s(50),
        borderWidth: s(1),
        borderColor: '#1b2d56'
    },
    done: {
        backgroundColor: "#1b2d56", 
        width: "100%", 
        padding: s(15), 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: s(50),
        borderWidth: s(1),
        borderColor: '#1b2d56',
        marginTop: s(20)
    }
})

export default DataCompleted