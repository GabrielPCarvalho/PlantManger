import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Header, PlantCardSecundary } from "../../components";
import { PlantProps, loadPlant } from "../../libs/storage";
import waterdrop from '../../assets/waterdrop.png';
import { styles } from './styles';


function MyPlants() {
    const [] = useState<PlantProps[]>([]);
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWatered] = useState<string>();

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

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Proximas regadas
                </Text>

                <FlatList
                data={myPlants}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                    <PlantCardSecundary data={item} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
                />
            </View>

        </View>
    )
}

export default MyPlants;
