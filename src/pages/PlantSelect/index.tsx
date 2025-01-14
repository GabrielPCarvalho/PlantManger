import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import {
    EnviromentButton,
    Header,
    PlantCardPrimary,
    Load
} from '../../components';

import { PlantProps } from '../../libs/storage';

import api from '../../services/api';

import { colors } from '../../styles';
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler';

interface EnviromentProps {
    key: string;
    title: string;
}

export function PlantSelect(){
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const navigation = useNavigation();

    function handleEnviromentSelected(environment: string){
        setEnviromentSelected(environment);

        if(environment == 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant => 
            plant.environments.includes(environment)
        );

        setFilteredPlants(filtered);
    }

    async function fetchPlants(){
        const { data } = await api
        .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

        if(!data)
            return setLoading(true);

        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else {
            setPlants(data);
            setFilteredPlants(data);
        }
        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if(distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', { plant });
    }

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api
            .get('plants_environments?_sort=title&_order=asc');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fetchEnviroment();

    },[])

    useEffect(() => {
        fetchPlants();
    },[])

    if(loading)
    return <Load />
    

    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <Header />

                    <Text style={styles.title}>Em qual ambiente</Text>
                    <Text style={styles.subTitle}>
                        você quer colocar sua planta?
                    </Text>

                </View>

                <View>
                    <FlatList 
                        data={enviroments}
                        keyExtractor={(item) => String(item.key)}
                        renderItem={({ item }) =>(
                            <EnviromentButton
                            title={item.title}
                            active={item.key === enviromentSelected}
                            onPress={() => handleEnviromentSelected(item.key)}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.enviromentList}
                        />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listCard}
                >
                    <View style={styles.listCard}>
                        <FlatList
                            data={filteredPlants}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => (
                                <PlantCardPrimary
                                    data={item}
                                    onPress={() => handlePlantSelect(item)}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            onEndReachedThreshold={0.1}
                            onEndReached={({ distanceFromEnd }) =>
                                handleFetchMore(distanceFromEnd)
                            }
                            ListFooterComponent={
                                loadingMore
                                ? <ActivityIndicator color={colors.green} />
                                : <></>
                            }
                        />
                    </View>
                </ScrollView>
            
            </View>
    )
}



export default PlantSelect;