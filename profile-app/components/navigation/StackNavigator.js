import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Todo from '../Todo'
import Profile from '../Profile'
import TopNavigator from './TopNavigator'

const Stack = createStackNavigator()

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "#fff",
    headerBackTitle: "#000",
}

const MainStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Todo' component={Todo}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Contact' component={Contact}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
    )
}

const ContactStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Contact' component={TopNavigator}/>
        </Stack.Navigator>
    )
}

export {MainStackNavigator, ContactStackNavigator}