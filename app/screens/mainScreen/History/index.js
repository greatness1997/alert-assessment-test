import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Layout from '../../../components/Layout';
import { moderateScale } from '../../../assets/utils/respSizes';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../assets/utils/colorTheme';
import CustomTextInput from '../../../components/TextInput';
import useLogic from './index.logic';

const HistoryScreen = () => {
    
    const { 
        searchQuery, 
        setSearchQuery, 
        todayTransactions, 
        julyTransactions 
   } = useLogic()


    const renderTransactionItem = ({ item }) => {
        return (
            <View>
                <View style={{ marginBottom: moderateScale(10), padding: moderateScale(10), borderRadius: moderateScale(10), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ backgroundColor: colors.purple, padding: moderateScale(8), borderRadius: moderateScale(15), marginRight: moderateScale(20), alignItems: "center" }}>
                            <MaterialCommunityIcon name={item.cateIcon} color={colors.text} size={moderateScale(30)} />
                        </View>
                        <View>
                            <Text style={{ color: 'gray', fontSize: moderateScale(16), fontWeight: "500" }}>{item.description}</Text>
                            <Text style={{ color: colors.text, fontSize: moderateScale(16), fontWeight: '500', marginTop: moderateScale(4), }}>{item.name}</Text>
                        </View>
                    </View>

                    <Text style={{ color: item.status === "credit" ? colors.green : "gray", fontSize: moderateScale(16), fontWeight: '500' }}>{item.amount}</Text>
                </View>
            </View>
        );
    }

    return (
        <Layout>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: colors.pink, padding: moderateScale(8), borderRadius: moderateScale(50), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: moderateScale(14), color: colors.black, fontWeight: "bold" }}>CC</Text>
                    </View>
                    <Text style={{ fontSize: moderateScale(24), color: colors.text, fontWeight: "bold", marginLeft: moderateScale(10) }}>Transactions</Text>
                </View>

                <MaterialCommunityIcon name="calendar" color={colors.text} size={moderateScale(25)} />
            </View>

            <CustomTextInput
                placeholder="Search transactions"
                prefix={<Ionicons name="search" size={20} color={colors.gray} />}
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <Text style={{ marginTop: moderateScale(25), fontSize: moderateScale(18), color: colors.text, fontWeight: "500" }}>Today</Text>

            <View>
                <FlatList
                    data={todayTransactions}
                    renderItem={renderTransactionItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ marginTop: moderateScale(15), marginBottom: moderateScale(20) }}
                    ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: moderateScale(20), fontSize: moderateScale(16), color: colors.text }}>No transactions found</Text>}
                />
            </View>

            <Text style={{ fontSize: moderateScale(18), color: colors.text, fontWeight: "500", marginTop: moderateScale(25) }}>July 2023</Text>

            <View>
                <FlatList
                    data={julyTransactions}
                    renderItem={renderTransactionItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ marginTop: moderateScale(15), marginBottom: moderateScale(20) }}
                    ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: moderateScale(20), fontSize: moderateScale(16), color: colors.text }}>No transactions found</Text>}
                />
            </View>
        </Layout>
    );
}

export default HistoryScreen;
