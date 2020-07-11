import React from 'react';
import normalStyle from '../styles/normalStyles'
import textStyle from '../styles/textStyles'
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';

export default function RoutiveInfo(props) {

    const routerFolder = require('../images/routerFolder.png')
    const copyCode = require('../images/copyCode.png')
    const settingRouter = require('../images/settingRouter.png')

    return (

        <ScrollView style={normalStyle.scrollView} >
            <View style={{ width: '100%', marginBottom: 50 }}>
                <Text style={{ fontSize: 40, color: 'white' }}>Introduction Routive</Text>
                <Text style={textStyle.subTitle} >Build a react native page transition framework,make you transition page enjoyable!</Text>
                <View style={normalStyle.textGroup}>
                    <Text style={normalStyle.textGroupTitle}>Step 1</Text>
                    <Text style={normalStyle.textGroupSpan}>creat router folder on src,and create AppRouter.js Router.js on router folder:</Text>
                    <Image style={[normalStyle.textGroupImage, { height: 150 }]} source={routerFolder} ></Image>
                </View>
                <View style={normalStyle.textGroup}>
                    <Text style={normalStyle.textGroupTitle}>Step 2</Text>
                    <Text style={normalStyle.textGroupSpan}>copy source code AppRouter.js/ Router.js from github,and paste to src/router/AppRouter.js and src/router/Router.js: </Text>
                    <Text style={normalStyle.hyperlink} onPress={() => { Linking.openURL('https://github.com/LiuWilson00/Routive') }}>https://github.com/LiuWilson00/Routive</Text>
                    <Image style={[normalStyle.textGroupImage, { height: 150 }]} source={copyCode} ></Image>
                </View>
                <View style={normalStyle.textGroup}>
                    <Text style={normalStyle.textGroupTitle}>Step 3</Text>
                    <Text style={normalStyle.textGroupSpan}>setting Router.js on you project:</Text>
                    <Image style={[normalStyle.textGroupImage, { height: 500 }]} source={settingRouter} ></Image>
                </View>

                <Button title="back to home" onPress={() => { props.navigation.pop() }}></Button>

            </View>
            {/* <StatusBar style="auto" /> */}
        </ScrollView>

    );
}

