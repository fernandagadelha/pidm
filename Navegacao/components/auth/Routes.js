/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../auth/unauthorized/LoginScreen';
import HomeScreen from '../auth/authorized/HomeScreen';
import SettingsScreen from '../auth/authorized/SettingsScreen';

const UnauthorizedStack = createStackNavigator()
const AuthorizedStack = createStackNavigator()
const RootStack = createStackNavigator()


function UnauthorizedStackScreens(){
    return(
        <UnauthorizedStack.Navigator>
            <UnauthorizedStack.Screen name='Login' component={LoginScreen}/>
        </UnauthorizedStack.Navigator>
    )
}

function AuthorizedStackScreens(){
    return(
        <AuthorizedStack.Navigator>
            <AuthorizedStack.Screen name='Home' component={HomeScreen}/>
            <AuthorizedStack.Screen name='Settings' component={SettingsScreen}/>
        </AuthorizedStack.Navigator>
    )
}

export default class Routes extends Component{

    constructor(){
        super()
        this.state={hasToken:true}
    }
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator>
                    {
                        this.state.hasToken? //se for verdade, ou seja, se eu tiver o Token, vamos pra pilha autorizada
                            <RootStack.Screen name='Authorized' component={AuthorizedStackScreens}/>
                            :
                            <RootStack.Screen name='Unauthorized' component={UnauthorizedStackScreens}/>
                    }
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}
