import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../styles';

import { MaterialIcons } from '@expo/vector-icons';

import { MyPlants, PlantSelect } from '../pages';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return(
        <AppTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.green,
                tabBarInactiveTintColor: colors.heading,
                tabBarStyle: {
                    height: 58,
                    paddingBottom: 5
                },
            }}>
                <AppTab.Screen 
                    name= "Nova Planta"
                    component={PlantSelect}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons 
                                name='add-circle-outline'
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <AppTab.Screen 
                    name= "Minhas Plantas"
                    component={MyPlants}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons 
                                name='format-list-bulleted'
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />

        </AppTab.Navigator>
    )
}

export default AuthRoutes;