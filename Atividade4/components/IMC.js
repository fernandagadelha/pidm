/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {styles} from './style';

export default class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            peso: 0,
            altura: 0,
        }

    }


  render() {

    return (
      <View
        style={styles.container}>
        <TextInput
            
            placeholder='Peso (kg)'
            onChangeText={(peso) => this.setState({peso:peso})}
        />
        <TextInput
            
            placeholder='Altura (cm)'
            onChangeText={(altura) => this.setState({altura:altura})}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={
                () => this.props.navigation.navigate('Resultado', {peso: this.state.peso, altura: this.state.altura})}
        >
            <Text
                style={styles.buttonText}
            >OK</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.backButton}
            onPress={
                () => this.props.navigation.goBack()}
        >
            <Text
                style={styles.buttonText}
            >Voltar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}