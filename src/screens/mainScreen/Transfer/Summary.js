import React, { useState, useEffect } from 'react'
import { Modal, SafeAreaView, View, StyleSheet, Text, Alert, TextInput, TouchableWithoutFeedback,TouchableOpacity } from 'react-native'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'

import cred from '../../../config'
import axios from 'axios'

import SummaryCard from '../../../components/SummaryCard';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SwipeButton from '../../../components/SwipeButton';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import TransferPin from './TransferPin'
import AppButton from '../../../components/AppButtonBlue';



const Summary = ({ navigation, route }) => {

    const [trasnferBody, setTransferBody] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const data = route.params

    //generate uniqueId
    const generateUniqueId = () => {
        const d = new Date();
        const n = d.getTime();
        const p = user.firstName.substring(0, 5).toUpperCase();

        return `${p}-${n}`;
    };

    const { auth: { user } } = useSelector(state => state)

    useEffect(() => {
        const body = {
            phoneNumber: user.phoneNumber,
            narration: data.res.narration,
            transactionId: data.data,
            service: 'transfer',
            senderName: `${user.firstName} ${user.lastName}`,
            uniqueId: generateUniqueId(),
            paymentMethod: 'cash',
        };

        setTransferBody(body);
    }, []);

    const next = (trasnferBody, summaryData) => {
        setModalVisible(true)
        // navigation.navigate("TransferPin", { data: trasnferBody, summaryData })
    }



    return (
        <View style={{ flex: 1, marginTop: s(50), marginLeft: s(16), width: "90%" }}>

            <View style={{ flexDirection: "row", marginBottom: s(35) }}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name='arrow-left-thick' size={s(22)} color="black" />
                </TouchableWithoutFeedback>

                <View style={{ justifyContent: "center", marginLeft: s(80) }}>
                    <Text style={{ fontSize: s(16), fontWeight: "500", color: "black" }}>Transfer Summary</Text>
                </View>
            </View>

            <SummaryCard data={data} />

            { Platform.OS === "android" ? <AppButton title="Proceed" style={{ marginTop: s(35) }} onPress={() => setModalVisible(true)} /> : <SwipeButton style={{ marginTop: s(35) }} onSwipeEnd={() => setModalVisible(true)} title="Swipe to Send" />} 
            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.modalScreen}>
                    <View style={styles.transparentContainer}></View>
                    <View style={styles.contentContainer}>
                    <TouchableOpacity style={styles.iconCont} onPress={() => setModalVisible(false)}>
                        <MaterialCommunityIcons name="close-circle" size={30} color="black" />
                    </TouchableOpacity>
                        <TransferPin data={trasnferBody} summaryData={data} navigation={navigation}  setModalVisible={setModalVisible}/>
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
    text1: {
        fontSize: s(16),
        marginTop: s(3),
        fontWeight: "bold"
    },
})

export default Summary