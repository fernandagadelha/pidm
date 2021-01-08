import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import IMCCalc from './IMCCalc'


export class IMCApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            peso: 0,
            altura: 0.0,
            pesoChange:0, //essa aqui vai ser o valor que foi digitado após o clique
            alturaChange:0.0 //essa aqui vai ser o valor que foi digitado após o clique
        }

    }

    calcular(){
        this.setState({
            peso: this.state.pesoChange,
            altura: this.state.alturaChange,
            
        })
    }


    render() {
        return (
            <View>
                
                <TextInput
                    placeholder='Peso (Kg)'
                    onChangeText={(peso) => this.setState({pesoChange:peso})}
                />

                <TextInput
                    placeholder='Altura (m)'
                    onChangeText={(altura) => this.setState({alturaChange:altura})}
                />

                <Button title='Calcular' onPress={() => this.calcular()}/>

                <IMCCalc peso={this.state.peso} altura={this.state.altura}/>               
                
            </View>
        )
    }
}

export default IMCApp
