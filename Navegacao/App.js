/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Routes from './components/tab/Routes';
// import Routes from './components/stack/Routes'
// import Routes from './components/drawer/Routes';
// import LoginScreen from './components/auth/unauthorized/LoginScreen';

import Routes from './components/auth/Routes';



const App = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1, //diz que quero usar a tela toda
    flexDirection: 'column', //diz o eixo principal
    justifyContent: 'center', //organiza de acordo com o eixo principal, que no caso é a coluna de cima pra baixo, vai botar no centro da coluna
    alignItems: 'center', //organiza no sentido contrário do flexDirection que, no caso, é horizontal
  },
  texto: {
    fontSize: 24,
    fontFamily: 'Arial',
  },
});

export default App;
