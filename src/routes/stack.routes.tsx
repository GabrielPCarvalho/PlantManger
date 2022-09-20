import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Welcome,
    UserIdentification,
    Confirmation,
    PlantSelect,
    PlantSave
} from '../pages/';

import { colors } from '../styles';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
    screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen
            name="PlantSelect"
            component={PlantSelect}
        />

        <stackRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        />
        
    </stackRoutes.Navigator>
)

export default AppRoutes;