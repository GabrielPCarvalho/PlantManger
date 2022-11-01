import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    Alert
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Header, Load, PlantCardSecundary } from "../../components";
import { PlantProps, loadPlant, removePlant } from "../../libs/storage";
import waterdrop from '../../assets/waterdrop.png';
import { styles } from './styles';


function MyPlants() {
    const [] = useState<PlantProps[]>([]);
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWatered] = useState<string>();

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
            {
                text: 'Não 🍃',
                style: 'cancel',
            },
            {
                text: 'Sim 🍂',
                onPress: async () => {
                    try {
                        await removePlant(plant.id);
                        setMyPlants((oldData) => (
                            oldData.filter((item) => item.id !== plant.id)
                        ));

                    } catch (error) {
                        Alert.alert('Não foi possível remover! 😭')
                    }
                }
            }
        ])
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}} horas.`
            )
            
            setMyPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    },[])

    if(loading)
    return <Load />

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image 
                    source={waterdrop}
                    style={styles.spotlightImage} 
                />
                <Text style={styles.spotlightText}>
                    {nextWaterd}
                </Text>

            </View>
            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.plants}>
                    <Text style={styles.plantsTitle}>
                        Proximas regadas
                    </Text>
                    <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardSecundary 
                        data={item} 
                        handleRemove={() => {handleRemove(item)}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                    />
                </View>
            </ScrollView>

        </View>
    )
}

export default MyPlants;
