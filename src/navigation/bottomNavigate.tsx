import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';


const Tab = createBottomTabNavigator();
const BottomTabsRow = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Finder"
                component={SearchScreen}
                options={() => ({ title: "Buscar" })}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={() => ({ title: "Home" })}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={() => ({ title: "Busca" })}
            />
        </Tab.Navigator>
    )
}
export default BottomTabsRow;