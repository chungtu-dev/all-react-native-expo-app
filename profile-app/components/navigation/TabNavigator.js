import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'
import Profile from '../Profile'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-sharp'
                            : 'home-outline';
                    } else if (route.name === 'Bookmark') {
                        iconName = focused ? 'md-book' : 'ios-bookmarks-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'pricetags' : 'pricetags-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={MainStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Bookmark" component={ContactStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator