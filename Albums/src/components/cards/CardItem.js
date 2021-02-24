/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export default class CardItem extends Component{
    constructor(props){
    super(props);

    }
    
    render(){
        return (

            <View style={style.containerStyle}>

                {this.props.children}

            </View>
        );

    }
}

const style = StyleSheet.create({
    containerStyle: {
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: 5,
        
    },
    

});