import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../../assets/utils/respSizes';
import { colors } from '../../../assets/utils/colorTheme';
import Layout from '../../../components/Layout';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../components/Botton';
import useLogic from './index.logic';

const MyModal = ({ visible, onClose, navigation }) => {

    const { 
        displayedValue, 
        setDisplayedValue,
        handleNumberPress,
        handleDecimalPress,
        handleDeletePress,
        isDisabled
    } = useLogic()



    return (
        <Modal
            transparent={false}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <Layout>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: moderateScale(24), color: colors.text, fontWeight: "bold", marginLeft: moderateScale(10) }}>Top Up</Text>
                    </View>

                    <TouchableOpacity onPress={onClose}>
                        <MaterialCommunityIcon name="close-thick" color={colors.text} size={moderateScale(25)} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: moderateScale(30), backgroundColor: colors.black, padding: moderateScale(20), borderRadius: moderateScale(10), height: scale(250) }}>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ backgroundColor: colors.pink, padding: moderateScale(25), borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center" }}>

                            </View>
                            <View>
                                <Text style={{ color: colors.text, fontWeight: "600", fontSize: moderateScale(16), marginLeft: moderateScale(10) }}>US Dollar</Text>
                                <Text style={{ color: colors.lighterGray, fontWeight: "600", fontSize: moderateScale(14), marginLeft: moderateScale(10), marginTop: moderateScale(4) }}>$590.95</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#232425", width: moderateScale(80), padding: moderateScale(10), alignItems: "center", justifyContent: "center", borderRadius: moderateScale(20) }}>
                            <Text style={{ color: colors.text, fontWeight: "600", fontSize: moderateScale(14) }}>Use Max</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, marginTop: moderateScale(20), backgroundColor: "#232425" }} />
                    <View style={{ flex: 1 }} />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: moderateScale(25) }}>
                        <Text style={styles.naira}>$</Text>
                        <Text style={styles.display}>{displayedValue}</Text>
                    </View>
                </View>


                <View style={{ marginTop: moderateScale(20), backgroundColor: colors.black, padding: moderateScale(15), borderRadius: moderateScale(10), flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: colors.text, borderRadius: moderateScale(5), justifyContent: "center", alignItems: "center", height: scale(20), width: moderateScale(40) }}>

                    </View>
                    <View>
                        <Text style={{ color: colors.lighterGray, fontWeight: "600", fontSize: moderateScale(14), marginLeft: moderateScale(20), marginTop: moderateScale(4) }}>For</Text>
                        <Text style={{ color: colors.text, fontWeight: "600", fontSize: moderateScale(16), marginLeft: moderateScale(20) }}>Virtual Card</Text>
                    </View>
                </View>


                {/* button here */}

                <View style={styles.numPadContainer}>
                    {[1, 2, 3].map((num) => (
                        <TouchableOpacity key={num} style={styles.numPad} onPress={() => handleNumberPress(num.toString())}>
                            <Text style={styles.number}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numPadContainer}>
                    {[4, 5, 6].map((num) => (
                        <TouchableOpacity key={num} style={styles.numPad} onPress={() => handleNumberPress(num.toString())}>
                            <Text style={styles.number}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numPadContainer}>
                    {[7, 8, 9].map((num) => (
                        <TouchableOpacity key={num} style={styles.numPad} onPress={() => handleNumberPress(num.toString())}>
                            <Text style={styles.number}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.numPadContainer}>
                    <TouchableOpacity style={styles.numPad} onPress={handleDecimalPress}>
                        <Text style={styles.number}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numPad} onPress={() => handleNumberPress("0")}>
                        <Text style={styles.number}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.numPad} onPress={handleDeletePress}>
                        <MaterialCommunityIcon name="chevron-left" color="white" size={moderateScale(18)} />
                    </TouchableOpacity>
                </View>

                <Button 
                    title="Continue"
                    onPress={() => {onClose(), setDisplayedValue("0"), navigation.navigate("PreviewTopUp", { data: displayedValue })}}
                    style={[styles.continueButton, isDisabled && { opacity: 0.5 }]}
                    disabled={isDisabled} 
                />
            </Layout>
        </Modal>
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

export default MyModal;
