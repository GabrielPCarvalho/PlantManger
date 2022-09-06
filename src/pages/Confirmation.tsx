import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Button } from '../components/Button';

import { colors, fonts } from '../styles'

export function Confirmation(){
    return(
        <View style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.emoji}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas {'\n'}
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title={'Começar'} />
                </View>

            </View>

        </View>
    )
}  // 1:14:17 parou 
    
    const styles = StyleSheet.create({
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

export default Confirmation;