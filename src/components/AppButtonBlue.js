import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from '../constants/color';



const AppButton = ({ onPress, isSubmitting, title, style }) => {


    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            {isSubmitting ? <ActivityIndicator color="white" /> : <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: color.primary2,
        width: "100%",
        borderRadius: 50,
        height: 60,
        justifyContent: "center",
    },
    text: {
        fontWeight: '600',
        // textTransform: 'uppercase',
        fontSize: 16,
        color: "white",
    },
});


export default AppButton