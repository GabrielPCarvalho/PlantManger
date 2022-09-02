import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps){
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
                <Text style={styles.buttonText}>
                    { title }
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 56,
        height: 56,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        marginBottom: 10,
        padding: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})