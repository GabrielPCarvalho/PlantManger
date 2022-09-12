import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native'

import userImg from '../../assets/fotoPerfil.png';
import { styles } from './styles'

export function Header() {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Gabriel</Text>
            </View>

            <Image source={userImg}  style={styles.img}/>

        </View>
    )
}



export default Header;
