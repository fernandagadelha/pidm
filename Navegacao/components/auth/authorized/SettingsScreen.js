/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import {estilo} from '../estilo';

export default class SettingsScreen extends Component{
    render(){
        return(
            <View
                style={estilo.container}
            >
                <Text style={estilo.titulo}>Tela de Configurações</Text>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Home')}
                    style={estilo.botaoLogin}
                >
                    <Text style={estilo.textButton}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}