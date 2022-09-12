import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';
import wateringImg from '../../assets/watering.png';
import { Feather } from '@expo/vector-icons';


export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

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
                onPress={handleStart}
            >
                <Text style={styles.buttonText}>
                    <Feather name='chevron-right' style={styles.buttonIcon} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}



export default Welcome;