/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


export default class Modal extends Component {
    render(){
        return(
            <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{ fontSize:30}}>
                    Isso é um Modal!
                </Text>

                <Button
                    onPress={()=> this.props.navigation.goBack()}
                    title='Leave Modal'
                />
            </View>
        )
    }

}