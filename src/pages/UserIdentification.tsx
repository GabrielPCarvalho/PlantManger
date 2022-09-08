import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';

import { fonts, colors } from '../styles';

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


    function handleSubmit(){
        navigation.navigate("Confirmation");
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

const styles = StyleSheet.create({
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

export default UserIdentification;