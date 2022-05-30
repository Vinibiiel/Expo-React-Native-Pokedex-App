import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Search from './search';
import Home from './home';
import Bottom from './navigation/bottomNavigate'

const Stack = createNativeStackNavigator();

const AUTH = true;

const Routes = () => (
    <NavigationContainer>

        {AUTH ? <Bottom /> : (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        )}
    </NavigationContainer>
)

export default Routes