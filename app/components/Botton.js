import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { verticalScale } from '../assets/utils/respSizes';

const Button = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'purple',
        padding: verticalScale(15),
        borderRadius: verticalScale(10),
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: verticalScale(12),
        fontWeight: '600',
    },
});

export default Button;
