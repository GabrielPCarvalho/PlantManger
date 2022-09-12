import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { Button } from '../../components';
import { styles } from './styles';

export function Confirmation(){
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }

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
                    <Button title={'Começar'} onPress={handleMoveOn}/>
                </View>

            </View>

        </View>
    )
}
    
    

export default Confirmation;