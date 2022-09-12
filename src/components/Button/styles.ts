import { StyleSheet } from "react-native";
import { colors } from "../../styles";


export const styles = StyleSheet.create({
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