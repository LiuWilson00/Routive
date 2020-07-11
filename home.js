


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import appRouter from './src/components/AppRouter'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './src/screen/HomeScreen'
import HomeScreenDetail from './src/screen/HomeScreenDetail'
import ProfileScreen from './src/screen/ProfileScreen'
import InfoScreen from './src/screen/InfoScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'tomato'
                },
                headerBackTitle: '返回',
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="HomeDetail" component={HomeScreenDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default
    function home() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ color }) => {
                            if (route.name == 'Home') return <Ionicons name={'ios-trophy'} size={25} color={color}></Ionicons>
                            if (route.name == 'Profile') return <Ionicons name={'ios-person'} size={25} color={color}></Ionicons>
                            if (route.name == 'Info') return <Ionicons name={'ios-information'} size={25} color={color}></Ionicons>
                        }

                    })
                }
                tabBarOptions={
                    {
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray'
                    }
                }
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Info" component={InfoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
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
