/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import {estilo} from './estilo';
import Card from './cards/Card';
import CardItem from './cards/CardItem';


export default class AlbumDetail extends Component {
    

    render() {
        return(
            <Card>
                <CardItem>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image
                                style={{width:50, height:50}}
                                source={{uri:'https://raw.githubusercontent.com/san650/ten/master/apps/music'+this.props.album.image}}
                            
                            />
                        </View>
                        <View>
                            <Text>{this.props.album.name}</Text>
                            <Text>{this.props.album.artist}</Text>
                        </View>

                    </View>

                </CardItem>
                <CardItem>
                    <Image
                        style={{width:100, height:100}}
                        source={{uri:'https://raw.githubusercontent.com/san650/ten/master/apps/music'+this.props.album.image}}
                    
                    />
                </CardItem>
                <CardItem>
                    <TouchableOpacity style={estilo.botao}>
                        <Text style={estilo.textButton}>Ver Músicas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botao}>
                        <Text style={estilo.textButton}>Comprar</Text>
                    </TouchableOpacity>
                </CardItem>
            </Card>

        )


    }
}