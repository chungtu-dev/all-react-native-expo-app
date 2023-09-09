import {createDrawerNavigator} from '@react-navigation/drawer'
import {ContactStackNavigator, MainStackNavigator} from './StackNavigator'
import TabNavigator from './TabNavigator'
import Profile from '../Profile'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            {/* bottom tab */}
            <Drawer.Screen name="Home-Drawer" options={{ headerShown: false }} component={TabNavigator} />

            {/* single screen */}
            <Drawer.Screen name="Profile-Drawer" component={Profile} />

            {/* stack and top tab */}
            <Drawer.Screen name="Contact-Drawer" component={MainStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator