import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
const BottomTabsRow = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: () => (<Icon name="magnifying-glass" size={20} color="black" />)
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (<Icon name="home" size={20} color="black" />)
                }}
            />
            <Tab.Screen
                name="Genero"
                component={SearchScreen}
                options={{
                    tabBarIcon: () => (<Icon name="menu" size={20} color="black" />)
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomTabsRow;