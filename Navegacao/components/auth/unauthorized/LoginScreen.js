/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text,TextInput, TouchableOpacity} from 'react-native';

import {estilo} from '../estilo';

export default class LoginScreen extends Component {
    constructor(){
        super()
        this.state = {login: '', password: ''}
        this.acaoBotao = this.acaoBotao.bind(this)
    }

    acaoBotao(){
        alert(this.state.login +'-'+ this.state.password)
    }

    render(){
        return (
            <View
                style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
            >
                <Text style={estilo.titulo}>Faça Login</Text>
            
                
                <Text>Login</Text>
                <TextInput
                    placeholder='Digite seu login'
                    style={estilo.input}
                    onChangeText={
                        (login)=> this.setState({login})
                    }
                />
                <Text>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={estilo.input}
                    onChangeText={
                        (password)=> this.setState({password})
                    }
                />
                <TouchableOpacity
                    onPress={this.acaoBotao}
                    style={estilo.botaoLogin}
                >
                    <Text style={estilo.textButton}>Entrar</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

