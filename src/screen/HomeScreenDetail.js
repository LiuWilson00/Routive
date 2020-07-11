import React, { useState } from 'react';
import normalStyle from '../styles/normalStyles'
import textStyle from '../styles/textStyles'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function HomeDetailScreen(props) {
  const [userName, setUseName] = useState(props.route.params.name ? props.route.params.name : '')
  const changName = (name) => {
    setUseName(name)
  }

  return (
    <View style={normalStyle.container}>
      <Text style={textStyle.title}>Hello {props.route.params.name ? props.route.params.name : ''}</Text>
      <Text style={[textStyle.subTitle,{ marginBottom: 10 }]} >this is your stack</Text>
      <TextInput style={[normalStyle.textInput]} value={userName} onChangeText={text => changName(text)}></TextInput>
      <Button title={`pop user name ${userName}`} onPress={() => { props.route.params.changUserName(userName); props.navigation.pop() }}></Button>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

