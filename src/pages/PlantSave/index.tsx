import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    Platform,
    Alert,
} from 'react-native';
import { SvgFromUri } from "react-native-svg";
import { useRoute } from "@react-navigation/core"
import DateTimePicker, { Event } from "@react-native-community/datetimepicker"

import waterdrop from "../../assets/waterdrop.png";

import { Button } from "../../components";

import { styles } from "./styles";
import { format, isBefore } from "date-fns";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loadPlant, PlantProps, savePlant } from "../../libs/storage";

interface Params {
    plant: PlantProps
}

export function PlantSave(){
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    const route = useRoute();
    const { plant } = route.params as Params
    
    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState);
        }

        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰')
        }

        if(dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDatetimePickerForAndroid(){
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave(){
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            });


        }catch {
            Alert.alert('Não foi possível salvar. 😢')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>

                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>

            </View>
            
            <View style={styles.controller}>

                <View style={styles.tipContainer}>

                    <Image 
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        {plant.water_tips} 
                    </Text>

                </View>

                <Text style={styles.alertLabel}>
                    Ecolha o melhor horário para ser lembrado:
                </Text>
                {showDatePicker && (
                    <DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="clock"
                        onChange={handleChangeTime}
                    />
                )}

                {
                    Platform.OS === 'android' && (
                        <TouchableOpacity
                            style={styles.dateTimePickerButton}
                            onPress={handleOpenDatetimePickerForAndroid}
                        >
                            <Text style={styles.dateTimePickerText}>
                                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )
                }

                <Button title="Cadastrar planta" onPress={handleSave}/>
            </View>
        </View>
    )
}

export default PlantSave;