import { useState } from 'react'
import { View, Text, Switch, TouchableOpacity } from 'react-native'
import Layout from '../../../components/Layout'
import { scale, verticalScale, moderateScale } from '../../../assets/utils/respSizes'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'


import { colors } from '../../../assets/utils/colorTheme'
import MyModal from './Modal'
import useLogic from './index.logic'


const CardScreen = ({ navigation }) => {

    // const [modalVisible, setModalVisible] = useState(false);
    // const { cardBalance } = useBalance()


    // const handleTopUpPress = () => {
    //     setModalVisible(true);
    // };

    // const handleCloseModal = () => {
    //     setModalVisible(false);
    // };

    // const formattedCardBalance = cardBalance.toString();

    // const displayCardBalance = formattedCardBalance.length > 1 && formattedCardBalance.startsWith('0')
    //     ? formattedCardBalance.slice(1)
    //     : formattedCardBalance;

    const {
        modalVisible,
        setModalVisible,
        handleTopUpPress,
        handleCloseModal,
        displayCardBalance
    } = useLogic()


    return (
        <Layout>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: colors.pink, padding: moderateScale(8), borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: moderateScale(14), color: colors.black, fontWeight: "bold" }}>CC</Text>
                    </View>
                </View>

            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: moderateScale(45), color: colors.text, fontWeight: "bold", marginTop: moderateScale(10) }}>${displayCardBalance}</Text>
                <Text style={{ fontSize: moderateScale(16), color: colors.lighterGray, fontWeight: "500", marginTop: moderateScale(5) }}>Available to spend</Text>
            </View>

            <View style={{ marginTop: moderateScale(20), backgroundColor: colors.text, padding: moderateScale(10), borderRadius: moderateScale(10), height: scale(170) }}>

            </View>

            <View style={{ alignSelf: "center", flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(30), width: moderateScale(330) }}>
                <TouchableOpacity onPress={handleTopUpPress} style={{ flex: 1, marginHorizontal: moderateScale(5), height: scale(46), backgroundColor: colors.darkerGray, borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Text style={{ fontSize: moderateScale(18), color: "white", fontWeight: "500", marginLeft: moderateScale(6) }}>Top Up</Text>
                </TouchableOpacity>

                <View style={{ flex: 1, marginHorizontal: moderateScale(5), width: verticalScale(100), height: scale(46), backgroundColor: colors.darkerGray, borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Text style={{ fontSize: moderateScale(18), color: "white", fontWeight: "500", marginLeft: moderateScale(6) }}>Withdraw</Text>
                </View>
            </View>


            <View style={{ marginTop: moderateScale(40) }}>
                <Text style={{ fontSize: moderateScale(14), marginBottom: moderateScale(20), color: colors.lighterGray, fontWeight: "500" }}>MANAGE CARD</Text>

                <View style={{ marginBottom: moderateScale(10), padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcon name="credit-card-chip-outline" color={colors.lighterGray} size={moderateScale(30)} />
                        <Text style={{ color: colors.text, fontSize: moderateScale(16), fontWeight: '500', marginLeft: moderateScale(10) }}>Card Details</Text>
                    </View>

                    <MaterialCommunityIcon name="dots-vertical" color={colors.lighterGray} size={moderateScale(25)} />
                </View>

                <View style={{ marginBottom: moderateScale(10), padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcon name="snowflake" color={colors.lighterGray} size={moderateScale(30)} />
                        <Text style={{ color: colors.text, fontSize: moderateScale(16), fontWeight: '500', marginLeft: moderateScale(10) }}>Freeze Card</Text>
                    </View>

                    <Switch />
                </View>

                <View style={{ marginBottom: moderateScale(10), padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcon name="trash-can" color={colors.lighterGray} size={moderateScale(30)} />
                        <Text style={{ color: colors.text, fontSize: moderateScale(16), fontWeight: '500', marginLeft: moderateScale(10) }}>Delete Card</Text>
                    </View>
                </View>
            </View>

            <MyModal visible={modalVisible} onClose={handleCloseModal} navigation={navigation} />
        </Layout>
    )
}


export default CardScreen