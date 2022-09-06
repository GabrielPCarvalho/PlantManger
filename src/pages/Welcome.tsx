import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions 
} from 'react-native';
import wateringImg from '../assets/watering.png';
import { colors, fonts } from '../styles/';

import { Feather } from '@expo/vector-icons';


export function Welcome(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'} 
                suas plantas de{'\n'}
                 forma fácil.
            </Text>

            <Image
                source={wateringImg}
                style={styles.image}
                resizeMode='contain'
            />

            <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
            sempre que precisar.
            </Text>
            
            <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>
                    <Feather name='chevron-right' style={styles.buttonIcon}/>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 28,
        fontWeight: 'bold',
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

export default Welcome;