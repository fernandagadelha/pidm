/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import {styles} from './style';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={
                    {
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginLeft: 20,
                        marginRight: 20,
                    }}>
                Tenho fé que vou passar nessa cadeira
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('Cadastro')}
                >
                    <Text
                        style={styles.buttonText}
                    >Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('IMC')}
                >
                    <Text
                        style={styles.buttonText}
                    >IMC</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('Sobre', {texto:'Eu mereço tanto passar nessa cadeira'})}
                >
                    <Text
                        style={styles.buttonText}
                    >Sobre</Text>
                </TouchableOpacity>

            </View>
        );
    }
};