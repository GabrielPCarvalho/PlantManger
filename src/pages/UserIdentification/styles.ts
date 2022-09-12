import { fonts, colors } from '../../styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    form: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        marginTop: 40,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        margin: 50,
        padding: 10,
        textAlign: 'center',

    },
    emoji: {
        fontSize: 44,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 15,
    }
})