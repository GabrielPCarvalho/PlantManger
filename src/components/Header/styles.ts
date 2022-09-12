import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 30,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    greeting: {
        color: colors.heading,
        fontSize: 32,
        fontFamily: fonts.text
    },
    userName: {
        color: colors.heading,
        fontSize: 32,
        fontFamily: fonts.heading,
        lineHeight: 40
    }
})