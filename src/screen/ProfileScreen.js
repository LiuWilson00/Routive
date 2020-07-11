import React from 'react';
import normalStyle from '../styles/normalStyles.js'
import textStyles from '../styles/textStyles.js'
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={normalStyle.container}>
      <Text style={textStyles.title}>Hello this is your profile</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

