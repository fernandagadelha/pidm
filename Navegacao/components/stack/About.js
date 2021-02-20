/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Logo from './Logo';


export default class About extends Component {

  //versão 3 de estilizar o cabecalho
  static estiloCabecalho ={

    headerTitle: <Logo titulo='About versao Componente'/>,
    headerRight: () => <Button
                          onPress={
                            () =>alert('Sou um botão!')
                          }
                          title='Press me'
                          color='#c0c0c0'
                        />

  }

  //versão 2 de estilizar o cabecalho
  /*static estiloCabecalho ={
    headerTitle: <Text style={{fontWeight:"bold", color:"black", fontSize:20}}>About</Text>
  }*/

  //versão 1 de estilizar o cabecalho
  /*static estiloCabecalho ={

    title: 'About',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  }*/

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          Sobre - Nome: {this.props.route.params.nome}, Idade: {this.props.route.params.idade}
        </Text>

        <Button title="About"
                onPress={
                    () => this.props.navigation.navigate('About', {...this.props.route.params})}
        />

        <Button
            title="Push"
            onPress={
                () => this.props.navigation.push('About', {...this.props.route.params})}
        />

        <Button
            title="Voltar"
            onPress={
                () => this.props.navigation.goBack()}
        />

        <Button
            title="Abrir Modal"
            onPress={
                () => this.props.navigation.navigate('MeuModal')}
        />

      </View>
    );
  }
}
