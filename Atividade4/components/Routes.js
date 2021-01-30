/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import Home from './Home';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Resultado from './Resultado';
import Perfil from './Perfil';



import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
            >
                <Stack.Screen
                    name='Home'
                    component={Home}
                />

                <Stack.Screen
                    name='Cadastro'
                    component={Cadastro}
                />

                <Stack.Screen
                    name='IMC'
                    component={IMC}
                />

                <Stack.Screen
                    name='Resultado'
                    component={Resultado}
                />

                <Stack.Screen
                    name='Perfil'
                    component={Perfil}
                />

                <Stack.Screen
                    name='Sobre'
                    component={Sobre}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;