import React from "react";
import { Success, Network,  } from "../constants/animation"; 
import { View } from "react-native";
import Lottie from "lottie-react-native"

const LottieView = () => {
    return (
        <Lottie source={Success} autoPlay loop />
    )
}

const LottieNetwork = ({ style }) => {
    return (
        <View style={[style]}>
            <Lottie source={Network} autoPlay loop />
        </View>
    )
}

export { LottieView, LottieNetwork }