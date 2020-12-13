import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from './estilo'

export default class TelaVotacao extends Component {
    constructor(props){
        super(props)

        this.state = {valor:0}
        this.votacao = this.votacao.bind
        
    }

    votacao(){
        console.warn('Apertou o botão')
        this.setState( { valor: this.state.valor + 1 })        

    }


    render(){
        return(
            <View>
                                
                <Text>
                    <Text style={Estilo.textTitle}>VOTAÇÃO DE CIDADES</Text>
                    {'\n'}
                    Fortaleza: 
                    {'\n'}
                    Quixadá:   
                    {'\n'}
                    Limoeiro do Norte:
                    {'\n'}
                    Juazeiro: 
                    {'\n'}{'\n'}

                    MAIS VOTADA: 
                    {'\n'}
                    MENOS VOTADA:

                </Text> 

                <View>
                    <Button
                        
                        title='Fortaleza'
                        onPress={this.votacao}
                        accessibilityLabel='Botão para votar em Fortaleza'
                    />
                    <Button
                        
                        title='Quixadá'
                        
                        accessibilityLabel='Botão para votar em Quixadá'
                    />
                    <Button
                        
                        title='Limoeiro do Norte'
                        
                        accessibilityLabel='Botão para votar em Limoeiro do Norte'
                    />
                    <Button
                        
                        title='Juazeiro'
                        
                        accessibilityLabel='Botão para votar em Juazeiro'
                    />
                </View>
                    

               
            </View>
        )

    }
}




