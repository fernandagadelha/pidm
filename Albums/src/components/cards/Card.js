/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';

import {estilo} from '../estilo';

export default class Card extends Component{
    render(){
        return (
            <View style={estilo.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

