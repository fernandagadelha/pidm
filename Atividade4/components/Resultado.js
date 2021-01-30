/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

export default class Resultado extends Component {


    render() {
        let imc = null;
        let altura = this.props.route.params.altura / 100;
        imc = this.props.route.params.peso / (altura * altura);

        let situacao = "";
        if (imc < 17 && imc != null){
            situacao = "Muito abaixo do peso";
        } else if (imc > 17 && imc < 18.49){
            situacao = "Abaixo do peso";
        } else if (imc > 18.5 && imc < 24.99){
            situacao = "Peso normal";
        } else if (imc > 25 && imc < 29.99){
            situacao = "Acima do peso"
        } else if (imc > 30 && imc < 34.99){
            situacao = "Obesidade I"
        } else if (imc > 35 && imc <39.99){
            situacao = "Obesidade II"
        } else if (imc > 40){
            situacao = "Obesidade III"
        }



        return (
            <View
                style={styles.container}
            >


                <Text
                    style={styles.texts}>
                    Seu IMC é: {imc}
                </Text>

                <Text
                    style={styles.texts}>
                    {situacao}
                </Text>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={
                        () => this.props.navigation.navigate('Home')}
                >
                    <Text
                        style={styles.buttonText}
                    >Home</Text>
                </TouchableOpacity>

            </View>
        );
    }
}