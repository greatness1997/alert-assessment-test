import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { verticalScale } from '../assets/utils/respSizes';
import { colors } from '../assets/utils/colorTheme';

const Button = ({ onPress, title, style, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style, disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.purple,
        padding: verticalScale(15),
        borderRadius: verticalScale(20),
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: "#727AE4",
    },
    buttonText: {
        color: 'white',
        fontSize: verticalScale(12),
        fontWeight: '600',
    },
});

export default Button;
