/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button } from 'react-native';

export default class Navegacao extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={
            {
                fontWeight: 'bold',
                fontSize: 20,
            }}>
          Home
        </Text>
        <Button
            title="Ir para About"
            onPress={
                () => this.props.navigation.navigate('About', {nome:'Fernanda Gadêlha de Souza', idade: '27'})
            }

        />


      </View>
    );
  }
}
