import { StyleSheet } from "react-native";
import { colors } from '../../styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emoji: {
        fontSize: 96,
        marginBottom: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.heading,
        lineHeight: 30,
        margin: 20,
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 25,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.body_dark,
        marginBottom: 50,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 35,
    },
})