import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Estilo from './estilo'

export default class TelaVotacao extends Component {
    constructor(props){
        super(props)

        this.state = {
            fortaleza: 0,
            quixada: 0,
            limoeiro: 0,
            juazeiro: 0,
            maisVotada: "",
            menosVotada: ""
        }
        this.votarCidade = this.votarCidade.bind(this);
        this.updateListas = this.updateListas.bind(this);
    }

    updateListas(){
        // retorna o valor maximo do array
        let maisVotos = Math.max(...[
            this.state.fortaleza,
            this.state.quixada,
            this.state.limoeiro,
            this.state.juazeiro,
        ]);
        let menosVotos = Math.min(...[
            this.state.fortaleza,
            this.state.quixada,
            this.state.limoeiro,
            this.state.juazeiro,
        ]);        
        console.log(menosVotos)
        console.log(maisVotos)

        let listaMaisVotada = ""
        let listaMenosVotada = ""

        switch(this.state.fortaleza){
            case maisVotos:
                listaMaisVotada += ', Fortaleza';
                break;
            case menosVotos:
                listaMenosVotada+= ', Fortaleza';
                break;
        }

        switch(this.state.quixada){
            case maisVotos:
                listaMaisVotada += ', Quixadá';
                break;
            case menosVotos:
                listaMenosVotada += ', Quixadá';
                break;
        }

        switch(this.state.limoeiro){
            case maisVotos:
                listaMaisVotada += ', Limoeiro do Norte';
                break;
            case menosVotos:
                listaMenosVotada += ', Limoeiro do Norte';
                break;
        }

        switch(this.state.juazeiro){
            case maisVotos:
                listaMaisVotada += ', Juazeiro';
                break;
            case menosVotos:
                listaMenosVotada += ', Juazeiro';
                break;
        }

        // removendo primeira virgula
        listaMenosVotada = listaMenosVotada.substring(2);        
        listaMaisVotada = listaMaisVotada.substring(2);

        console.log(listaMenosVotada)
        console.log(listaMaisVotada)

        this.setState({
            maisVotada: listaMaisVotada,
            menosVotada: listaMenosVotada
        });        
    }

    votarCidade(nomeCidade){
        
            
        switch(nomeCidade) {
            case 'fortaleza':
                this.setState( { fortaleza: this.state.fortaleza + 1 }, this.updateListas)
              break;
            case 'quixada':
                this.setState( { quixada: this.state.quixada + 1 }, this.updateListas)
              break;
            case 'limoeiro':
                this.setState( { limoeiro: this.state.limoeiro + 1 }, this.updateListas)
                break;
            case 'juazeiro':
                this.setState( { juazeiro: this.state.juazeiro + 1 }, this.updateListas)
                break;
            default:
              // code block
        }
    }

    render(){
        return(
            <View>              
                <Text>
                    <Text style={Estilo.textTitle}>VOTAÇÃO DE CIDADES</Text>
                    {'\n'}
                    Fortaleza: {this.state.fortaleza} votos
                    {'\n'}
                    Quixadá: {this.state.quixada} votos
                    {'\n'}
                    Limoeiro do Norte: {this.state.limoeiro} votos
                    {'\n'}
                    Juazeiro: {this.state.juazeiro} votos
                    {'\n'}{'\n'}

                    MAIS VOTADA: {this.state.maisVotada}
                    {'\n'}
                    MENOS VOTADA: {this.state.menosVotada}

                </Text> 

                <View>
                    <Button
                        title='Fortaleza'
                        onPress={()=> this.votarCidade('fortaleza')}
                        accessibilityLabel='Botão para votar em Fortaleza'
                    />
                    <Button                        
                        title='Quixadá'
                        onPress={()=> this.votarCidade('quixada')}
                        accessibilityLabel='Botão para votar em Quixadá'
                    />
                    <Button                        
                        title='Limoeiro do Norte'
                        onPress={()=> this.votarCidade('limoeiro')}
                        accessibilityLabel='Botão para votar em Limoeiro do Norte'
                    />
                    <Button                        
                        title='Juazeiro'
                        onPress={()=> this.votarCidade('juazeiro')}
                        accessibilityLabel='Botão para votar em Juazeiro'
                    />
                </View>
            </View>
        )
    }
}




