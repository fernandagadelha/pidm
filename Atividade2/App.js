import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import TelaVotacao from './components/TelaVotacao'
import Estilo from './components/estilo'



export default function App() {
  return (
    
      <View style={Estilo.App}>
        
          <TelaVotacao/>      
          <StatusBar style="auto" />        
        
      </View>   
    
  );
}


