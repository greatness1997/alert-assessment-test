import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../../assets/utils/respSizes';
import { colors } from '../../../assets/utils/colorTheme';
import Layout from '../../../components/Layout';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../components/Botton';

import { useBalance } from '../../../assets/utils/balanceCard';
import useLogic from './index.logic';

const PreviewTopUp = ({ navigation, route }) => {

    const { transfer } = useLogic()

    const { data } = route.params
   

    return (

        <Layout>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcon name="chevron-left" color={colors.text} size={moderateScale(25)} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                </View>

            </View>

            <View style={{ marginTop: moderateScale(50) }}>
                <View style={{ backgroundColor: colors.darkerGray, width: verticalScale(50), padding: moderateScale(20), borderRadius: moderateScale(50) }}>
                    <MaterialCommunityIcon name="arrow-up" color={colors.text} size={moderateScale(25)} />
                </View>

                <Text style={{ color: colors.text, fontSize: moderateScale(24), width: "75%", fontWeight: "600", marginTop: moderateScale(20) }}>Confirm Details for Virtual Account Creation</Text>

                <View style={{ marginTop: moderateScale(30) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.gray, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>You will receive</Text>
                        <Text style={{ color: colors.text, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>${data}</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.gray, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>Insurance Fee</Text>
                        <Text style={{ color: colors.text, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>$1</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.gray, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>Transaction Type</Text>
                        <Text style={{ color: colors.text, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>Card Top Up</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.gray, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>Total Debit</Text>
                        <Text style={{ color: colors.text, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(20) }}>$6</Text>
                    </View>
                </View>
            </View>


            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text style={{ marginBottom: moderateScale(30), textAlign: "center", color: colors.gray, fontSize: moderateScale(14), fontWeight: "600" }}>Please note once you tap "Confirm & Pay" this transaction cannot be reversed</Text>
                <Button
                    title="Confirm & Pay"
                    onPress={() => transfer(data)}
                    style={[styles.continueButton]}
                />
            </View>
        </Layout>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000221",
    },
    display: {
        color: "white",
        fontSize: moderateScale(70),
        fontWeight: "bold",
        alignSelf: "center",
        marginLeft: moderateScale(5)
    },
    numPadContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: moderateScale(10)
    },
    numPad: {
        justifyContent: "center",
        alignItems: "center",
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(40)
    },
    number: {
        color: colors.text,
        fontSize: moderateScale(24),
        fontWeight: "bold"
    },
    naira: {
        color: "white",
        fontSize: moderateScale(40),
        fontWeight: "bold"
    },
    buttonContainer: {
        width: moderateScale(120),
        height: moderateScale(42),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(10)
    }
});

export default PreviewTopUp;
