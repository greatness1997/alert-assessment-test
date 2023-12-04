import React, { useEffect, useState } from 'react'
import { StyleSheet, Modal, Text, SafeAreaView, View, StatusBar, Alert, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import { s } from "react-native-size-matters"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from 'react-redux'
import credentials from '../../config'
import axios from 'axios'
import "intl"
import "intl/locale-data/jsonp/en";

import moment from 'moment';
import CheckBox from '@react-native-community/checkbox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppButton from '../../components/AppButtonBlue'

import { mtn, airtel, nineMobile, glo } from "../../constants/images"
import { ikedc, bedc, kadc, ekedc, eedc, abdc, kdc, phdc, aa, ibedc } from "../../constants/images"






const WalletHistoryList = ({ navigation }) => {

    const [walletList, setWalletList] = useState([])
    const [loading, setLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('');
    const [show, setShow] = useState(false);
    const [startText, setStartText] = useState('')
    const [endText, setEndText] = useState('')
    const [itemValue, setItemValue] = useState()




    const onChange = (selectedDate) => {
        setShow(false);
        if (!selectedDate) return; // Handle case when no date is selected

        setDate(selectedDate);

        if (mode === 'startdate') {
            setStartText(formatDate(selectedDate));
        } else {
            setEndText(formatDate(selectedDate));
        }
        setMode('');
    };


    const showMode = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };

    const formatDate = (date) => {
        if (!date) return '';
        return moment(date).format('MMM DD, YYYY');

    };


    const formatter = () => {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + String(date.getDate()).padStart(2, 0);
    }

    const setFilterVal = (value) => {
        setItemValue(value)
    }



    const [filterOptions, setFilterOptions] = useState([
        { name: "Last 7 Days", value: 7, isChecked: false },
        { name: "Last 30 Days", value: 30, isChecked: false }
    ]);

    const handleCheckboxToggle = (index) => {
        const updatedOptions = filterOptions.map((item, i) => {
            return {
                ...item,
                isChecked: i === index,
            };
        });

        setFilterOptions(updatedOptions);
    };

    const { auth: { user } } = useSelector(state => state)

    const today = moment().format('YYYY-MM-DD');
    let startDate;
    if (itemValue) {
        startDate = moment().subtract(itemValue, 'days').format('YYYY-MM-DD');
    } else {
        startDate = moment().subtract(1, 'day').format('YYYY-MM-DD');
    }
    const endDate = today

    const transactionHistory = async () => {



        const url = `${credentials.URL2}/user/wallet-history`
        const options = { headers: { Authorization: `Bearer ${user.token}` } }
        const body = {
            "page": 1,
            "startDate": startText ? startText : startDate,
            "endDate": endText ? endText : endDate,
            "status": "",
            "reference": "",
            "product": "",
            "account": "",
            "channel": "",
            "provider": ""
        }

        try {
            setLoading(true)
            const response = await axios.post(url, body, options)
            const { walletHistory } = response.data
            console.log(walletHistory)
            setWalletList(walletHistory.docs)
            setLoading(false)

        } catch (error) {
            console.log(error.response.data, 'from catch')
            const { message } = error.response.data
            Alert.alert(`${message}`);
            setLoading(false)

        }
    }

    useEffect(() => {
        transactionHistory()
    }, [])

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 2
    })


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ marginTop: s(10), alignItems: "center", marginBottom: s(10), flexDirection: "row", justifyContent: "space-between", padding: s(10) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={s(22)} color= "black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: s(18), fontWeight: "700", color: "black" }}>Wallet History</Text>
                    <View></View>
                </View>
                <View style={{ width: "100%", height: "90%", padding: s(15), justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: s(5) }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => setModalVisible(true)}>
                            <Ionicons name="calendar" size={s(18)} color="#0B44BD" />
                            <Text style={{ marginLeft: s(4), fontWeight: "500", color: "black" }}>Filter By Date</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            {/* <Text style={{ marginLeft: s(4), fontWeight: "500", color: "#3C6BFA" }}>All Transactions</Text>
                            <Ionicons name="chevron-down-sharp" size={s(18)} color="#3C6BFA" /> */}
                        </View>
                    </View>

                    <Modal
                        visible={modalVisible}
                        animationType='slide'
                        transparent={true}
                    >
                        <View style={styles.modalScreen}>
                            <View style={styles.transparentContainer}></View>
                            <View style={styles.contentContainer}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: s(10) }}>
                                    <Text></Text>
                                    <Text style={{ fontSize: s(14), fontWeight: "500" }}>Filter by date</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                                        <Ionicons name="close-circle" size={s(27)} color="#9E9E9E" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: s(30), justifyContent: "space-between" }}>
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginRight: s(10) }} onPress={() => showMode("startdate")} >
                                        <Text style={{ marginRight: s(4) }}>From</Text>
                                        <View style={styles.dateContainer}>
                                            <Ionicons name="calendar" size={s(18)} color="#0B44BD" style={{ marginRight: s(10) }} />
                                            <Text>{startText !== "" ? startText : "Start Date"} </Text>
                                        </View>
                                    </TouchableOpacity>


                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => showMode("enddate")} >
                                        <Text style={{ marginRight: s(4) }}>To</Text>
                                        <View style={styles.dateContainer}>
                                            <Ionicons name="calendar" size={s(18)} color="#0B44BD" style={{ marginRight: s(10) }} />
                                            <Text>{endText !== "" ? endText : "End Date"}</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                {show && (
                                    <DateTimePickerModal
                                        isVisible={show}
                                        mode="date"
                                        date={date}
                                        onConfirm={onChange}
                                        onCancel={() => setShow(false)}
                                    />
                                )}
                                <ScrollView>
                                    {filterOptions.map((item, index) => {
                                        return (
                                            <TouchableOpacity style={styles.filterItem} key={index} onPress={() => setFilterVal(item.value)}>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                    <Text style={{ fontSize: s(14), fontWeight: "500" }}>{item.name}</Text>
                                                    <CheckBox
                                                        disabled={false}
                                                        value={item.isChecked}
                                                        onValueChange={() => handleCheckboxToggle(index)}
                                                        style={styles.checkbox}
                                                    />
                                                </View>
                                                <View style={{ height: s(0.5), backgroundColor: "#c4c4c4", width: "100%", marginTop: s(10) }}></View>
                                            </TouchableOpacity>
                                        )
                                    })}

                                    <AppButton title="Apply Filter" style={{ marginTop: s(15), borderRadius: s(10) }} onPress={() => { transactionHistory(), setModalVisible(false) }} />
                                </ScrollView>

                            </View>
                        </View>
                    </Modal>
                    <ScrollView>
                        {loading === true && <ActivityIndicator color="black" style={{ width: s(40), height: s(40), marginLeft: "50%" }} />}
                        {walletList.length === 0 && <Text style={{ marginTop: s(20), color: "black" }}> Nothing Here Yet </Text>}
                        {walletList.map((item, key) => {
                            return (
                                <React.Fragment key={key}>
                                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginTop: s(18), alignItems: "center", width: "100%" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            {/* {item.type === "credit" ? <MaterialCommunityIcons name="arrow-top-right-thick" size={s(18)} color="green" /> : <MaterialCommunityIcons name="arrow-bottom-left-thick" size={s(18)} color="red" />} */}

                                            <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: s(5) }}>
                                                <View style={{ paddingRight: s(5), alignItems: "center" }}>
                                                    <Text style={{ fontSize: s(10), fontWeight: "500", color: "grey", marginRight: s(10) }}>Prev. Balance</Text>
                                                    <Text style={{ fontSize: s(12), fontWeight: "600", color: "black", marginTop: s(2), marginRight: s(10) }}>{`₦${format.format(item.previousBalance)}`}</Text>
                                                </View>
                                                <View style={{ paddingRight: s(5), alignItems: "center" }}>
                                                    <Text style={{ fontSize: s(10), fontWeight: "500", color: "grey", marginRight: s(10) }}>New Balance</Text>
                                                    <Text style={{ fontSize: s(12), fontWeight: "600", color: "black", marginTop: s(2), marginRight: s(10) }}>{`₦${format.format(item.newBalance)}`}</Text>
                                                </View>
                                                <View style={{ paddingRight: s(5), alignItems: "center" }}>
                                                    <Text style={{ fontSize: s(10), fontWeight: "500", color: "grey", marginRight: s(10) }}>Commission</Text>
                                                    <Text style={{ fontSize: s(12), fontWeight: "600", color: "black", marginTop: s(2), marginRight: s(10) }}>{`₦${format.format(item.commission)}`}</Text>
                                                </View>
                                                <View style={{ paddingRight: s(5), alignItems: "center" }}>
                                                    <Text style={{ fontSize: s(10), fontWeight: "500", color: "grey", marginRight: s(10) }}>Charge</Text>
                                                    <Text style={{ fontSize: s(12), fontWeight: "600", color: "black", marginTop: s(2), marginRight: s(10) }}>{`₦${format.format(item.charge)}`}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%"
                                    }}>
                                        <View style={{ flex: 1 }}>
                                            <Text numberOfLines={5} style={{ marginTop: s(5), color: "green" }}>
                                                {item.description}
                                            </Text>
                                        </View>

                                        <View style={{ alignItems: "flex-end" }}>
                                            <Text style={{
                                                fontSize: s(14),
                                                fontWeight: "600",
                                                color: "#484747",
                                                marginBottom: s(5)
                                            }}>
                                                {`₦${format.format(item.amount)}`}
                                            </Text>
                                            {item.type === "credit" ? (
                                                <Text style={{ color: "#1B2D55" }}>{item.type}</Text>
                                            ) : (
                                                <Text style={{ color: "#7EBAED" }}>{item.type}</Text>
                                            )}
                                            <Text style={{ marginTop: s(2) }}>
                                                {formatDate(item.createdAt)}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ height: s(1), backgroundColor: "#e0e0e0", width: "100%", marginTop: s(8) }}></View>
                                </React.Fragment>
                            )

                        })}

                    </ScrollView>
                </View>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    modalScreen: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    transparentContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: s(0.5),
        borderRadius: s(4),
        padding: s(4)
    },
    filterItem: {
        marginTop: s(30),
        paddingRight: s(10),
        paddingLeft: s(5)
    },
    checkbox: {
        width: s(18),
        height: s(18)

    }
})

export default WalletHistoryList