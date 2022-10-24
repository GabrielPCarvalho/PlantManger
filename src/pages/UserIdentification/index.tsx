import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';


import { Button } from '../../components';

import { styles } from './styles'
import { colors } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function UserIdentification(){
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState<string>();
    
    const navigation = useNavigation();
    
    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true)
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }


    async function handleSubmit(){
        if(!name)
            return Alert.alert('Me diz como chamar você 😰')

        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect',
            });
        }catch{
            return Alert.alert('Não foi possível salvar o seu nome. 😰')
        }
    }

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>

                <View style={styles.form}>
                    
                    <Text style={styles.emoji}>
                        {isFilled ? '😄' : '😀' }
                    </Text>

                    <Text style={styles.title}>Como podemos chamar você?</Text>

                    <TextInput
                        style={[
                            styles.input,
                            {
                                borderColor: 
                                    isFocused || isFilled ? 
                                    colors.green : 
                                    colors.gray
                            }
                        ]}
                        placeholder='Digite um nome'
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />
                    
                    <View style={styles.footer}>
                        <Button title='Confirmar' onPress={handleSubmit} />
                    </View>

                </View>
                
            </TouchableWithoutFeedback>

        </View>
    )
}



export default UserIdentification;