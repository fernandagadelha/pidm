/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import {estilo} from '../estilo';

export default class HomeScreen extends Component{
    render(){
        return(
            <View
                style={estilo.container}
            >
                <Text style={estilo.titulo}>Bem vinda, Fernanda</Text>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Settings')}
                    style={estilo.botaoLogin}
                >
                    <Text style={estilo.textButton}>Go to Settings</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
