/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './HomeScreen'
import NotificationScreen from './NotificationScreen'

const Gaveta = createDrawerNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <Gaveta.Navigator>
                <Gaveta.Screen name='Home' component={HomeScreen}/>
                <Gaveta.Screen name='Notifications' component={NotificationScreen}/>
            </Gaveta.Navigator>
        </NavigationContainer>
    )
}

export default Routes
