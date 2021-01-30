/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {styles} from './style';

export default class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            idade: 0,
            email: '',
        }

    }

    navegarPerfil(){
        () => this.props.navigation.navigate('Perfil', {...this.props.route.params})
    }


    render() {
    return (
        <View
        style={styles.container}>
            <Text
                style={styles.texts}>
                Bota aí teus dados, por gentilezas
            </Text>

            <TextInput
                placeholder='Nome'
                onChangeText={(nome) => this.setState({nome:nome})}
            />

            <TextInput
                placeholder='Idade'
                onChangeText={(idade) => this.setState({idade:idade})}
            />

            <TextInput
                placeholder='E-mail'
                onChangeText={(email) => this.setState({email:email})}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={
                    () => this.props.navigation.navigate('Perfil', {nome: this.state.nome, idade: this.state.idade, email: this.state.email})}
            >
                <Text
                    style={styles.buttonText}
                >Próximo</Text>
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