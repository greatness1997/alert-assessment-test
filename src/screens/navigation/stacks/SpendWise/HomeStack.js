import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../mainScreen/SpendWise/Home';
import Account from '../../../mainScreen/SpendWise/Account';
import Category from '../../../mainScreen/SpendWise/Category';
import AddCategory from '../../../mainScreen/SpendWise/AddCategory';
import EditCategory from '../../../mainScreen/SpendWise/EditCategory';
import Expenses from '../../../mainScreen/SpendWise/Expenses';

import Validate from '../../../mainScreen/Transfer/Validate';
import Summary from '../../../mainScreen/Transfer/Summary';
import PinVerify from '../../../mainScreen/Transfer/TransferPin'
import Completed from '../../../mainScreen/Transfer/Completed';
import Provider from '../../../mainScreen/Electricity/Provider';
import ElectricityValidation from '../../../mainScreen/Electricity/ElectricityValidation';
import SelectNetwork from '../../../mainScreen/Airtime&Data/SlectNetwork';
import AirtimeOrData from '../../../mainScreen/Airtime&Data/AirtimeOrData'
import PaymentMethod from '../../../mainScreen/PaymentMethod'
import AirtimeVerify from '../../../mainScreen/Airtime&Data/AirtimeVerify';
import DataVerify from '../../../mainScreen/Airtime&Data/DataVerify';
import AirtimeSummary from '../../../mainScreen/Airtime&Data/AirtimeSummary'
import AirtimeCompleted from '../../../mainScreen/Airtime&Data/AirtimeCompleted'
import DataSummary from '../../../mainScreen/Airtime&Data/DataSummary';
import DataCompleted from '../../../mainScreen/Airtime&Data/DataCompleted';
import ElectricitySummary from '../../../mainScreen/Electricity/ElectricitySummary';
import ElectricityCompleted from '../../../mainScreen/Electricity/ElectricityCompleted';
import ProviderTV from '../../../mainScreen/Tv/Provider';
import TvValidation from '../../../mainScreen/Tv/TvValidation';
import StartimesValidation from '../../../mainScreen/Tv/Startimes';
import TvSummary from '../../../mainScreen/Tv/TvSummary';
import TvCompleted from '../../../mainScreen/Tv/TvCompleted';
import StartimesSum from '../../../mainScreen/Tv/StartimesSum';
import StartimesCompleted from '../../../mainScreen/Tv/StartimesCompleted';


const Stack = createNativeStackNavigator();

const HomeStack = () => {


    return (
        <Stack.Navigator
            // initialRouteName="Home"
            headerMode={Platform.select({ ios: 'float', android: 'screen' })}
            screenOptions={() => ({
                headerTitle: '',
                headerBackTitleVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SpendWiseAccount' component={Account} />
            <Stack.Screen name='SpendWiseCategory' component={Category} />
            <Stack.Screen name='AddCategory' component={AddCategory} />
            <Stack.Screen name='EditCategory' component={EditCategory} />
            <Stack.Screen name='Expenses' component={Expenses} />

            {/* vas service */}
            <Stack.Screen name='TransferValidate' component={Validate} options={{ tabBarVisible: false }} />
            <Stack.Screen name='TransferSummary' component={Summary} />
            <Stack.Screen name='Completed' component={Completed} />
            <Stack.Screen name='Provider' component={Provider} />
            <Stack.Screen name='ElectricityValidation' component={ElectricityValidation} />
            <Stack.Screen name='Airtime&Data' component={SelectNetwork} />
            <Stack.Screen name='AirtimeOrData' component={AirtimeOrData} />
            <Stack.Screen name='paymentmethod' component={PaymentMethod} />
            <Stack.Screen name='TransferPin' component={PinVerify} />
            <Stack.Screen name='AirtimeVerify' component={AirtimeVerify} />
            <Stack.Screen name='DataVerify' component={DataVerify} />
            <Stack.Screen name='AirtimeSummary' component={AirtimeSummary} />
            <Stack.Screen name='AirtimeCompleted' component={AirtimeCompleted} />
            <Stack.Screen name='DataSummary' component={DataSummary} />
            <Stack.Screen name='ElectricitySummary' component={ElectricitySummary} />
            <Stack.Screen name='DataCompleted' component={DataCompleted} />
            <Stack.Screen name='ElectricityComplete' component={ElectricityCompleted} />
            <Stack.Screen name='ProviderTv' component={ProviderTV} />
            <Stack.Screen name='TvValidation' component={TvValidation} />
            <Stack.Screen name='TvSummary' component={TvSummary} />
            <Stack.Screen name='TvCompleted' component={TvCompleted} />
            <Stack.Screen name='StartimesValidation' component={StartimesValidation} />
            <Stack.Screen name='StartimesSum' component={StartimesSum} />
            <Stack.Screen name='StartimesCompleted' component={StartimesCompleted} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default HomeStack

