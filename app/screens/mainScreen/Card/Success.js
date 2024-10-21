import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../../assets/utils/respSizes';
import { colors } from '../../../assets/utils/colorTheme';
import Layout from '../../../components/Layout';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../../components/Botton';

const Success = ({ navigation, route }) => {

    const {message} = route.params

    return (

        <Layout>

            <View style={{ alignItems: "center", marginTop: moderateScale(200) }}>
                <MaterialCommunityIcon name="check-circle-outline" color={colors.purple} size={moderateScale(80)} />
                <Text style={{ color: colors.text, fontSize: moderateScale(25), fontWeight: "bold", marginTop: moderateScale(20) }}>COMPLETED</Text>
                <Text style={{ color: colors.gray, fontSize: moderateScale(18), fontWeight: "600", marginTop: moderateScale(10), width: moderateScale(250), textAlign: "center" }}>{message}</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Button
                    title="Done"
                    onPress={() => navigation.navigate("HomeView")}
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

export default Success;
