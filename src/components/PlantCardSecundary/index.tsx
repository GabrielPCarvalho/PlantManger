import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg"

import { styles } from './styles'

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    }
}

export const PlantCardSecundary = ({ data, ...rest}: PlantProps) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <SvgFromUri uri={data.photo} width={50} height={50} />
            <Text style={styles.title}> {data.name} </Text>
            <View style={styles.details} >
                <Text style={styles.timeLabel}>
                    Regar ás
                </Text>
                <Text style={styles.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    );
}



export default PlantCardSecundary;
