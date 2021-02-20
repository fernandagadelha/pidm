/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{fontWeight: 'bold'}}>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
         <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
