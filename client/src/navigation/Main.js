import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

//Stacks
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                KeyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="Friends"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Direct Messages"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="comment"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
           
            
            <Tab.Screen
                name="Search"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="search"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
             <Tab.Screen
                name="Feed"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="rss-square"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
             <Tab.Screen
                name="User Settings"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="cog"
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            
            
        </Tab.Navigator>
    )
}

export default Main;