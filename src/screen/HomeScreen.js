import React, { useState } from 'react';
import textStyle from '../styles/textStyles.js'
import normalStyle from '../styles/normalStyles.js'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import DefaultButton from '../components/DefaultButton'

export default function HomeScreen(props) {
  const [userName, setUseName] = useState('Roy')
  const changName = (name) => {
    setUseName(name)
  }
  const pushNameStack = () => {
    props.navigation.push('HomeDetail', {
      name: userName, changUserName: (name) => {
        changName(name)
      }
    })
  }
  return (
    <View style={[normalStyle.container]}>
      <Text style={[textStyle.title]}>Routive</Text>
      <Text style={[textStyle.subTitle, { margin: 10 }]}>React native router helper</Text>
      <TextInput style={[normalStyle.textInput]} value={userName} onChangeText={text => changName(text)}></TextInput>
      <DefaultButton width={300} title="Click me,push name to stack" click={() => { pushNameStack() }}></DefaultButton>
      <DefaultButton backgroundColor="#3b6978" width={300} title="Get Started" click={() => { props.navigation.push('Reative') }}></DefaultButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
