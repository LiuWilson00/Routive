import React from 'react';
import normalStyle from '../styles/normalStyles.js'
import textStyles from '../styles/textStyles.js'
import { StyleSheet, Text, View } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={normalStyle.container}>
      <Text style={textStyles.title}>Hello this is info</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

