/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './style';

export default class Sobre extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <Image
        style={styles.imgSize}
        source={{
          uri: 'https://www.meme-arsenal.com/memes/96cb533ad27037917e28a8a576b3f0db.jpg',
        }}
        />

        <Text
          style={styles.texts}>
          {this.props.route.params.texto}
        </Text>

        <TouchableOpacity
            style={styles.backButton}
            onPress={
                () => this.props.navigation.navigate('Home')}
        >
            <Text
                style={styles.buttonText}
            >Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

