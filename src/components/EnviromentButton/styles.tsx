import { colors, fonts } from '../../styles'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        fontFamily: fonts.text,
        color: colors.heading
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark
    }
})