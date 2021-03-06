import React, { Component } from 'react'
import { Text, View } from 'react-native'
import IMCMsg from './IMCMsg'

export class IMCCalc extends Component {
    constructor(props){
        super(props)        
    }

    render() {
        let imc = ""
        if(this.props.peso){
            imc = this.props.peso/(this.props.altura*this.props.altura)
        }
        
        return (
            <View>
                <Text>
                   Seu IMC é: {imc}   
                </Text>
                <IMCMsg imc={imc}/>
            </View>

        )
    }
}

export default IMCCalc

