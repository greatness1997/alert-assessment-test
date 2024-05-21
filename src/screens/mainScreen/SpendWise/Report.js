import React, { useRef, useState } from "react"
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryPie } from 'victory-native';
import CategoryProgress from "./CategoryProgress";
import PeriodSummary from "./PeriodSummary";


const Report = ({ navigation }) => {


    const [selectedOption, setSelectedOption] = useState('Reminder');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const data = [
        { x: 'A', y: 30 },
        { x: 'B', y: 25 },
        { x: 'C', y: 20 },
        { x: 'D', y: 15 },
        { x: 'E', y: 10 },
    ];

    const data1 = [
        { x: 'A', y: 30 },
        { x: 'B', y: 25 },
        { x: 'C', y: 20 },
        { x: 'D', y: 15 },
        { x: 'E', y: 10 },
    ];



    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <ScrollView>
                <View style={{ padding: s(10) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: s(10) }}>
                        <MaterialCommunityIcons name="arrow-left" size={s(25)} color="#000000" />
                        <Text style={{ color: "#000000", fontSize: s(14), fontWeight: "600" }}>Reports</Text>
                        <Text></Text>
                    </View>


                    <View style={{ padding: s(10), backgroundColor: "#F7F7F7", flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                        <TouchableOpacity onPress={() => handleOptionSelect('Reminder')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Reminder' ? "#1B2D56" : "#F7F7F7" }]}>
                            <Text style={[styles.optionText, { color: selectedOption === 'Reminder' ? "white" : "#1B2D56" }]}>Expense</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleOptionSelect('Pending')} style={[styles.optionContainer, { backgroundColor: selectedOption === 'Pending' ? "#1B2D56" : "#F7F7F7" }]}>
                            <Text style={[styles.optionText, { color: selectedOption === 'Pending' ? "white" : "#1B2D56" }]}>Income Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {selectedOption === "Reminder" && (<View style={{ padding: s(20) }}>
                    <View style={{ backgroundColor: "#E2E2E2", padding: s(10), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Category Summary</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: s(10) }}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600", marginBottom: s(2) }}>Week</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "#0077FA", fontSize: s(12), fontWeight: "600", marginBottom: s(2) }}>Months</Text>
                        </View>
                        <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600" }}>6 Months</Text>
                        <Text style={{ color: "#959595", fontSize: s(12), fontWeight: "600" }}>Year</Text>
                    </View>

                    <View style={{ alignSelf: "center", marginTop: s(5) }}>
                        <VictoryPie
                            data={data}
                            colorScale={['#57048D', '#EBB246', '#43CD6A', '#006FE2', '#84080C']}
                            innerRadius={90}
                            width={200}
                            height={200}
                            cornerRadius={10}
                            style={{
                                labels: { display: 'none' },
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: s(10) }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: s(8), height: s(8), backgroundColor: "#84080C" }}></View>
                            <Text style={{ color: "black", marginLeft: s(5), fontSize: s(9) }}>FOOD</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: s(8), height: s(8), backgroundColor: "#006FE2" }}></View>
                            <Text style={{ color: "black", marginLeft: s(5), fontSize: s(9) }}>BILLS</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: s(8), height: s(8), backgroundColor: "#43CD6A" }}></View>
                            <Text style={{ color: "black", marginLeft: s(5), fontSize: s(9) }}>FEES</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: s(8), height: s(8), backgroundColor: "#EBB246" }}></View>
                            <Text style={{ color: "black", marginLeft: s(5), fontSize: s(9) }}>FLEX</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: s(8), height: s(8), backgroundColor: "#57048D" }}></View>
                            <Text style={{ color: "black", marginLeft: s(5), fontSize: s(9) }}>CLUB</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: s(10) }}>
                        <MaterialCommunityIcons name="chevron-left" size={s(15)} color="#0074F5" />
                        <Text style={{ color: "#898989", fontSize: s(12), fontWeight: "400" }}>December</Text>
                        <MaterialCommunityIcons name="chevron-right" size={s(15)} color="#0074F5" />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: s(20) }}>
                        <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "600" }}>Total Expenses</Text>
                        <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "600" }}>N12,000,000.00</Text>
                    </View>

                    <View style={{ marginTop: s(15) }}>
                        <View style={{ marginBottom: s(15), flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#84080C", fontSize: s(12), fontWeight: "500" }}>15%</Text>
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>Food</Text>
                            <CategoryProgress value={15} color="#84080C" />
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>N 500,000</Text>
                        </View>
                        <View style={{ marginBottom: s(15), flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#006FE2", fontSize: s(12), fontWeight: "500" }}>35%</Text>
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>Bills</Text>
                            <CategoryProgress value={35} color="#006FE2" />
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>N 500,000</Text>
                        </View>
                        <View style={{ marginBottom: s(15), flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#43CD6A", fontSize: s(12), fontWeight: "500" }}>50%</Text>
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>Fees</Text>
                            <CategoryProgress value={50} color="#43CD6A" />
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>N 500,000</Text>
                        </View>
                        <View style={{ marginBottom: s(15), flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#EBB246", fontSize: s(12), fontWeight: "500" }}>60%</Text>
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>Flex</Text>
                            <CategoryProgress value={60} color="#EBB246" />
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>N 500,000</Text>
                        </View>
                        <View style={{ marginBottom: s(15), flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#57048D", fontSize: s(12), fontWeight: "500" }}>90%</Text>
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>Club</Text>
                            <CategoryProgress value={90} color="#57048D" />
                            <Text style={{ color: "#232323", fontSize: s(12), fontWeight: "500" }}>N 500,000</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: "#E2E2E2", padding: s(10), alignItems: "center", justifyContent: "center", marginTop: s(10) }}>
                        <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Period Summary</Text>
                    </View>

                    <View style={{ backgroundColor: "#1B2D56", borderRadius: s(10), marginTop: s(30), paddingTop: s(60), paddingLeft: s(20), height: s(250) }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginRight: s(10), alignSelf: "flex-end", marginRight: s(20) }}>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "500" }}>1M</Text>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "500", marginTop: s(15) }}>750</Text>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "500", marginTop: s(15) }}>500</Text>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "500", marginTop: s(15) }}>250</Text>
                                <Text style={{ color: "white", fontSize: s(12), fontWeight: "500", marginTop: s(10) }}>50</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: s(15) }}>
                                <PeriodSummary color="white" value={800000} style={{ marginRight: s(50) }} />
                                <PeriodSummary color="white" value={500000} style={{ marginRight: s(50) }} />
                                <PeriodSummary color="white" value={300000} style={{ marginRight: s(50) }} />
                                <PeriodSummary color="white" value={600000} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingLeft: s(20), paddingRight: s(20), marginLeft: s(10) }}>
                            <Text style={{ color: "white", fontSize: s(11), fontWeight: "500", marginTop: s(15) }}>Week 1</Text>
                            <Text style={{ color: "white", fontSize: s(11), fontWeight: "500", marginTop: s(15) }}>Week 2</Text>
                            <Text style={{ color: "white", fontSize: s(11), fontWeight: "500", marginTop: s(15) }}>Week 3</Text>
                            <Text style={{ color: "white", fontSize: s(11), fontWeight: "500", marginTop: s(15) }}>Week 4</Text>
                        </View>
                    </View>

                </View>)}

                {selectedOption === "Pending" && (<View style={{ padding: s(20) }}>
                    {/* <View style={{ flexDirection: "row", marginTop: s(30), alignItems: "center", backgroundColor: "#B4D2FF26", borderRadius: s(5), borderColor: "#0C5ED7", borderWidth: 1, padding: s(15), justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Rent</Text>
                            <View style={{ width: s(100) }}>
                                <Text style={{ fontSize: s(10), fontWeight: "600", color: "#9F9F9F", marginTop: s(5) }}>All expense here are Tag to HOUSE RENT</Text>
                            </View>
                        </View>
                        <View style={{ width: s(100), height: s(40), backgroundColor: "#1B2D56", justifyContent: "center", alignItems: "center", borderRadius: s(20), flexDirection: "row" }}>
                            <MaterialCommunityIcons name="bell" size={s(16)} color="#FFFFFF" />
                            <Text style={{ color: "#FFFFFF", fontSize: s(10), fontWeight: "600" }}>1:46PM</Text>
                        </View>
                    </View> */}

                    {/* <View style={{ flexDirection: "row", marginTop: s(10), alignItems: "center", backgroundColor: "#FFF8F6", borderRadius: s(5), borderColor: "#FE4E1D", borderWidth: 1, padding: s(15), justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: s(14), fontWeight: "600", color: "#000000" }}>Rent</Text>
                            <View style={{ width: s(100) }}>
                                <Text style={{ fontSize: s(10), fontWeight: "600", color: "#9F9F9F", marginTop: s(5) }}>All expense here are Tag to children fees</Text>
                            </View>
                        </View>
                        <View style={{ width: s(100), height: s(40), backgroundColor: "#FE4E1D", justifyContent: "center", alignItems: "center", borderRadius: s(20), flexDirection: "row" }}>
                            <MaterialCommunityIcons name="bell" size={s(16)} color="#FFFFFF" />
                            <Text style={{ color: "#FFFFFF", fontSize: s(10), fontWeight: "600" }}>1:46PM</Text>
                        </View>
                    </View> */}


                    {/* <TouchableOpacity onPress={() => navigation.navigate("AddCategory")}
                        style={{
                            width: s(50),
                            height: s(50),
                            backgroundColor: "#0073F3",
                            borderRadius: s(50),
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            marginTop: "20%",
                            alignSelf: "flex-end",
                        }}>
                        <MaterialCommunityIcons name="plus" size={s(25)} color="white" />
                    </TouchableOpacity> */}
                </View>)
                }
            </ScrollView >
        </View >
    )
}


const styles = StyleSheet.create({
    optionContainer: {
        padding: s(7),
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(10),
    },
    optionText: {
        fontWeight: "600",
    },
});

export default Report