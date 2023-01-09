import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import AddContact from '../screens/Contacts/AddContact'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="AddContact"
                component={AddContact}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

export default function ContactNavigator() {
    return <MyStack />
}

