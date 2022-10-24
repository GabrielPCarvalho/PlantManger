import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { Button } from '../../components';
import { styles } from './styles';
import { useRoute } from "@react-navigation/core"


interface Params {
    title: string;
    subTitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄'
}

export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subTitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn(){
        navigation.navigate(nextScreen);
    }

    return(
        <View style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>

                <View style={styles.footer}>
                    <Button title={buttonTitle} onPress={handleMoveOn}/>
                </View>

            </View>

        </View>
    )
}
    
    

export default Confirmation;