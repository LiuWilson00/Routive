import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import router from './Router'

import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const tabBarOptions = {
    activeTintColor: 'darkcyan',
    inactiveTintColor: 'gray'
}

const defaultStackScreenOptions = {
    headerStyle: {
        backgroundColor: 'darkcyan'
    },
    headerBackTitle: '返回',
    headerTintColor: 'white'
}

function stackMaker(routerObject) {
    const __initialRouteName = routerObject.initialRouteName ? routerObject.initialRouteName : routerObject.stack[0].name
    const __stackScreenOptions = routerObject.stackScreenOptions ? routerObject.stackScreenOptions : defaultStackScreenOptions
    let stackList = []
    routerObject.stack.forEach(s => {
        stackList.push(<Stack.Screen
            key={s.name}
            name={s.name}
            component={s.screen}
        ></Stack.Screen>)
    })
    return () => (<Stack.Navigator
        initialRouteName={__initialRouteName}
        screenOptions={__stackScreenOptions}
    >
        {stackList}
    </Stack.Navigator>)


}


function tabRender() {
    let tabList = []
    router.forEach((item,index) => {
        tabList.push(<Tab.Screen key={index} name={item.name} component={stackMaker(item)} />)
    })
    return tabList
}
const test = tabRender()

export default function appRouter() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={

                    ({ route }) => ({
                        tabBarIcon: ({ color }) => {
                            let target = router.find(item => route.name == item.name)
                            return <Ionicons name={target.icon} size={target.size} color={color} ></Ionicons>
                        }
                    })
                }
                tabBarOptions={tabBarOptions}
            >
                {
                    tabRender()
                }


            </Tab.Navigator>

        </NavigationContainer>
    )
}



