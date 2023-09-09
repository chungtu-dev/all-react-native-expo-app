import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import About from '../About'
import Todo from '../Todo'

const TopTab = createMaterialTopTabNavigator()

const TopNavigator = () => {
    return(
        <TopTab.Navigator>
            <TopTab.Screen name='Todo Top' component={Todo}/>
            <TopTab.Screen name='About Top' component={About}/>
        </TopTab.Navigator>
    )
}

export default TopNavigator