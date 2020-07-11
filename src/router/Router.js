import HomeScreen from '../screen/HomeScreen'
import HomeScreenDetail from '../screen/HomeScreenDetail'
import RoutiveInfo from '../screen/RoutiveInfo'

import InfoScreen from '../screen/InfoScreen'

import ProfileScreen from '../screen/ProfileScreen'



export default [
    {
        name: 'Home',
        icon: 'ios-trophy',
        size: 25,
        stack: [
            {
                name: 'Home',
                screen: HomeScreen
            },
            {
                name: 'HomeDetail',
                screen: HomeScreenDetail
            },
            {
                name: 'Reative',
                screen: RoutiveInfo
            }

        ],
        stackScreenOptions: {
            headerStyle: {
                backgroundColor: 'darkcyan'
            },
            headerBackTitle: '返回',
            headerTintColor: 'white'
        },
        initialRouteName: 'Home'

    },
    {
        name: 'Profile',
        icon: 'ios-person',
        size: 25,
        stack: [
            {
                name: 'Info',
                screen: ProfileScreen

            }
        ]

    },
    {
        name: 'Info',
        icon: 'ios-information',
        size: 25,
        stack: [
            {
                name: 'Profile',
                screen: InfoScreen

            }
        ]

    }
]