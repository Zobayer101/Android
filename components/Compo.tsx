

import React from 'react';

import { View,Text,ActivityIndicator,StyleSheet } from 'react-native';


export default function Compo() {
    return (
      <View >
        <Text>Helo Habib</Text>
        <ActivityIndicator
          style={style.spineer}
          size={'large'}
          color={'#0fc'}
            />
      </View>
    );
}

const style = StyleSheet.create({
    spineer: {
        flex: 1,
        alignItems: 'center',
    },

});
