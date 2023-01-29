import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Contact from '../screens/Contacts/Contacts';

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Contact'
                component={Contact}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}