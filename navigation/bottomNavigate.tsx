import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../src/home/index';
import Search from '../src/search/index';


const Tab = createBottomTabNavigator();
const BottomTabsRow = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}
export default BottomTabsRow;