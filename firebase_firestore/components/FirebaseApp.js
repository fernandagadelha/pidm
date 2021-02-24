/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component{
    constructor(props){
        super(props)
        this.getUser()
        this.state = {name: ''}
    }

    getUser = async ()=>{
        const userDocument = await firestore().collection('users').doc('MwOgU47Mu6uc5qdpwwQL').get()  //um linha da minha tabela é um documento. Em doc(''), colocamos o ID de um dos users
        // console.log(userDocument._data)
        this.setState({name:userDocument._data.name})
    }

    render(){
        return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25}}>
                {this.state.name}
            </Text>
        </View>
        )
    }
}
