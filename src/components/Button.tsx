import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest } : ButtonProps){
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 56,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
    },
    buttonText: {
        color: colors.white,
        fontSize: 17,
        fontWeight: '500',
    }
})