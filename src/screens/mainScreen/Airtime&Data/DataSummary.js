import React, { useState, useEffect } from 'react'
import { Modal, Image, SafeAreaView, View, StyleSheet, Text, Alert, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'

import cred from '../../../config'
import axios from 'axios'

import SummaryCard from '../../../components/SummaryCard';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SwipeButton from '../../../components/SwipeButton';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';

import moment from 'moment'
import { Print } from '../../../constants/images'
import { color } from '../../../constants/color';
import DataVerify from './DataVerify';


import "intl"
import "intl/locale-data/jsonp/en";
import AppButton from '../../../components/AppButtonBlue';



const DataSummary = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const data = route.params
    console.log(data, "from summary")


    const date = moment().format('DD-MM-YYYY')

    const time = moment().format('HH:mm')

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })

    return (
        <View style={{ flex: 1, marginTop: s(60), marginLeft: s(16), width: "90%" }}>

            <View style={{ flexDirection: "row", marginBottom: s(35) }}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                    <MaterialCommunityIcons name='arrow-left-thick' size={s(22)} color="black"  />
                </TouchableWithoutFeedback>

                <View style={{ justifyContent: "center", marginLeft: s(80), }}>
                    <Text style={{ fontSize: s(16), fontWeight: "600", color: "black"  }}>Data Summary</Text>
                </View>
            </View>
            <Image source={data.networkImage} style={styles.image} />


            <View style={[styles.container, styles.boxShadow]}>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: s(10) }}>
                    {/* <Text style={{ fontSize: s(13), fontWeight: "600", paddingBottom: 5, color: color.colorSix }}>{data.data.name}</Text> */}
                    <Text style={{ marginBottom: s(10), color: "#e66e54" }}>Beneficiary details</Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: "#2e2e2e" }}>{data.data.phoneNumber}</Text>
                </View>
                <View style={{ marginTop: s(15) }}>
                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: "400", color: color.colorFour }}>RRN</Text>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: color.colorThree }}>{data.RN}</Text>
                    </View> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <Text style={{ fontSize: s(13), fontWeight: "400", color: color.colorFour }}>Amount</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{`₦${format.format(data.amount)}`}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <Text style={{ fontSize: s(13), fontWeight: "400", color: color.colorFour }}>Bundle</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{data.plan}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <Text style={{ fontSize: s(13), fontWeight: "400", color: color.colorFour }}>Date</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{date}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <Text style={{ fontSize: s(13), fontWeight: "400", color: color.colorFour }}>Time</Text>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: color.colorThree }}>{time}</Text>
                    </View>

                </View>

                <View style={{ width: "100%", backgroundColor: "#d8d8d8", height: s(1), marginTop: s(20) }}></View>

                <View style={{ marginTop: s(15), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: s(13), fontWeight: "400", color: color.colorFour }}>Total</Text>
                    <View style={{ borderRadius: s(5), backgroundColor: "#eceff7", paddingLeft: s(20), paddingRight: s(20), paddingTop: s(10), paddingBottom: s(10), justifyContent: "center", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: s(14), fontWeight: "600", color: "#1b2d56" }}>{`₦${format.format(data.amount)}`}</Text>
                            <View style={{ width: s(1), backgroundColor: "#707070", height: s(20), marginLeft: s(7) }}></View>
                        </View>

                    </View>
                </View>

            </View>


            {Platform.OS === "android" ? <AppButton title="Proceed" style={{ marginTop: s(35) }} onPress={() => setModalVisible(true)} /> : <SwipeButton style={{ marginTop: s(35) }} onSwipeEnd={() => setModalVisible(true)} title="Swipe to Send" />}

            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.modalScreen}>
                    <View style={styles.transparentContainer}></View>
                    <View style={styles.contentContainer}>
                        <TouchableOpacity style={styles.iconCont} onPress={() => setModalVisible(false)}>
                            <MaterialCommunityIcons name="close-circle" size={25} color="black" />
                        </TouchableOpacity>
                        <DataVerify data={data} navigation={navigation} setModalVisible={setModalVisible} />
                    </View>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        paddingBottom: s(1),
        width: '100%',
        height: s(45),
        marginTop: '2%',

    },
    input: {
        flex: 1
    },
    bankList: {
        padding: s(6)
    },
    container: {
        position: "relative",
        width: "100%",
        height: s(310),
        backgroundColor: "white",
        // alignItems: "center",
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 10,
        padding: 20
    },
    image: {
        position: "absolute",
        top: 50,
        left: "60%",
        transform: [{ translateX: -s(50) }],
        zIndex: 1,
    },
    modalScreen: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    transparentContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: s(20),
        borderTopRightRadius: s(20),
        paddingHorizontal: s(10),
        paddingTop: s(20),
        paddingBottom: s(200), // Adjust this value to shift the modal up or down
        top: s(0),
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
})

export default DataSummary