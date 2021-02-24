/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';


import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';





export default class App extends Component {
  render() {
    return(
      <View>
        <Header title='Álbuns'/>
        <AlbumList/>

      </View>

    )
  }
}

