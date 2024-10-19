import React from 'react';
import { TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { verticalScale } from '../assets/utils/respSizes';
import { colors } from '../assets/utils/colorTheme';

const CustomTextInput = ({
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    secureTextEntry = false,
    style,
    inputStyle,
    errorMessage,
    prefix, 
    ...rest
}) => {

    const styles = StyleSheet.create({
        container: {
            marginTop: verticalScale(20),
        },
        label: {
            marginBottom: verticalScale(5),
            fontSize: verticalScale(12),
            fontWeight: '600',
            color: colors.lighterGray,
        },
        inputWrapper: {
            flexDirection: 'row',  
            alignItems: 'center',
            borderWidth: 1,
            borderColor: "#1E1F20",
            borderRadius: verticalScale(15),
            backgroundColor: "#1E1F20",
        },
        prefixContainer: {
            paddingLeft: verticalScale(10), 
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            flex: 1,  
            height: verticalScale(35),
            paddingHorizontal: verticalScale(10),
            fontSize: verticalScale(12),
            color: colors.text,
        },
        error: {
            marginTop: verticalScale(5),
            fontSize: verticalScale(12),
            color: 'red',
        },
    });

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                {prefix && (
                    <View style={styles.prefixContainer}>
                        {prefix} 
                    </View>
                )}
                <TextInput
                    style={[styles.input, inputStyle]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor="gray"
                    {...rest}
                />
            </View>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>
    );
};

export default CustomTextInput;
