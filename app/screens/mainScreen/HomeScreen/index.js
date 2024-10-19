
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import Layout from '../../../components/Layout'
import { scale, verticalScale, moderateScale } from '../../../assets/utils/respSizes'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


import { colors } from '../../../assets/utils/colorTheme'


const HomeScreen = ({ navigation }) => {

    const currentDate = new Date();


    const transactions = [
        { id: '1', name: 'Convert Money', description: 'Swap between currencies', iconName: "dots-vertical", cateIcon: "cached" },
        { id: '2', name: 'Tuition payment', description: 'Pay your tuition in school', iconName: "chevron-right", cateIcon: "school" },
        { id: '3', name: 'Pay a merchant', description: 'Pay your suppliers globally', iconName: "chevron-right", cateIcon: "briefcase" },
    ];

    const renderTransactionItem = ({ item }) => {
        return (
            <View>
                <View style={{ marginBottom: moderateScale(10), padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ backgroundColor: colors.purple, padding: moderateScale(8), borderRadius: moderateScale(15), marginRight: moderateScale(20), alignItems: "center" }}>
                            <MaterialCommunityIcon name={item.cateIcon} color={colors.text} size={moderateScale(30)} />
                        </View>
                        <View>
                            <Text style={{ color: colors.text, fontSize: moderateScale(16), fontWeight: '500' }}>{item.name}</Text>
                            <Text style={{ color: 'gray', fontSize: moderateScale(16), marginTop: moderateScale(8), fontWeight: "500" }}>{item.description}</Text>
                        </View>
                    </View>

                    <MaterialCommunityIcon name={item.iconName} color={colors.lighterGray} size={moderateScale(25)} />
                </View>
            </View>
        )
    }


    const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <Layout>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: colors.pink, padding: moderateScale(8), borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: moderateScale(14), color: colors.black, fontWeight: "bold" }}>CC</Text>
                    </View>
                    <Text style={{ fontSize: moderateScale(24), color: colors.text, fontWeight: "bold", marginLeft: moderateScale(10) }}>Home</Text>
                </View>

                <MaterialCommunityIcon name="focus-field" color={colors.text} size={moderateScale(25)} />

            </View>

            <View style={{ marginTop: moderateScale(30), backgroundColor: colors.background, padding: moderateScale(10), borderRadius: moderateScale(10) }}>
                <Text style={{ fontSize: moderateScale(16), color: colors.text, fontWeight: "500", marginBottom: moderateScale(15) }}>USD Balance</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: moderateScale(35), color: colors.text, fontWeight: "bold" }}>$10,000.10</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(30) }}>
                    <View style={{ flex: 1, marginHorizontal: moderateScale(5), height: scale(46), backgroundColor: colors.gray, borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: moderateScale(18), color: "white", fontWeight: "500", marginLeft: moderateScale(6) }}>Add Money</Text>
                    </View>

                    <View style={{ flex: 1, marginHorizontal: moderateScale(5), width: verticalScale(100), height: scale(46), backgroundColor: colors.gray, borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: moderateScale(18), color: "white", fontWeight: "500", marginLeft: moderateScale(6) }}>Transfer</Text>
                    </View>
                </View>
            </View>


            <View style={{ marginTop: moderateScale(30), flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <View style={{ flex: 1, marginHorizontal: moderateScale(5), padding: moderateScale(10), backgroundColor: colors.background, borderRadius: moderateScale(10) }}>
                    <View style={{ width: moderateScale(50), alignItems: 'center', padding: moderateScale(10), backgroundColor: colors.darkerGray, borderRadius: moderateScale(50) }}>
                        <MaterialCommunityIcon name="bank" color={colors.text} size={moderateScale(30)} />
                    </View>
                    <Text style={{
                        fontSize: moderateScale(16), color: colors.text, fontWeight: "500", marginTop:
                            (35)
                    }}>Bills Payment</Text>
                    <Text style={{
                        fontSize: moderateScale(14), color: colors.lighterGray, fontWeight: "500", marginTop:
                            (5)
                    }}>Show account info</Text>
                </View>

                <View onPress={() => navigation.navigate("Savings")} style={{ flex: 1, marginHorizontal: moderateScale(5), padding: moderateScale(10), backgroundColor: colors.background, borderRadius: moderateScale(10) }}>
                    <View style={{ width: moderateScale(50), alignItems: 'center', padding: moderateScale(10), backgroundColor: colors.darkerGray, borderRadius: moderateScale(50) }}>
                        <Ionicons name="paper-plane" color={colors.text} size={moderateScale(30)} />
                    </View>
                    <Text style={{ fontSize: moderateScale(16), color: colors.text, fontWeight: "500", marginTop: moderateScale(35) }}>Pay Bills</Text>
                    <Text style={{
                        fontSize: moderateScale(14), color: colors.lighterGray, fontWeight: "500", marginTop:
                            (5)
                    }}>Top-up & utilities</Text>
                </View>

            </View>


            <View style={{ marginTop: moderateScale(40) }}>
                <Text style={{ fontSize: moderateScale(18), color: colors.text, fontWeight: "bold" }}>Do more with Shiga</Text>

                <FlatList
                    data={transactions}
                    renderItem={renderTransactionItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ marginTop: moderateScale(15), marginBottom: moderateScale(50) }}
                />

            </View>
        </Layout>
    )
}


export default HomeScreen