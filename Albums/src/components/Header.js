/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text,View} from 'react-native';

import {estilo} from './estilo'



export default class Header extends Component {
  render() {
    return (
      <View style={estilo.viewStyleHeader}>
        <Text style={estilo.textHeader}>{this.props.title}</Text>

      </View>
      

    ) 
  }
}

