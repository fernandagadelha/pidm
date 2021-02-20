/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {estilo} from './estilo';

export default class HomeScreen extends Component {
    render(){
        return (
            <View
                style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
            >
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Notifications')}
                    style={estilo.botao}
                >
                    <Text style={estilo.textButton}>Go to Notifications</Text>
                </TouchableOpacity>
            </View>
        )
    }
}