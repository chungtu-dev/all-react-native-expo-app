import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import ReceipList from '../screens/ReceipList'
import RecipeDetail from '../screens/RecipeDetail'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="ReceipList" component={ReceipList} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator