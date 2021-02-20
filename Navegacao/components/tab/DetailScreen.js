/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View } from 'react-native';

function DetailScreen() {
    return (
        <View style={
            { flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <Text>Details!</Text>
        </View>
    );
}

export default DetailScreen