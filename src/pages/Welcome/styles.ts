import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from '../../styles/';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        lineHeight: 34
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.body_dark
    },
    image: {
        width: Dimensions.get('window').width * 0.7
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        marginBottom: 10,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    },
    buttonIcon: {
        fontSize: 24,
        color: colors.white,
    }
});