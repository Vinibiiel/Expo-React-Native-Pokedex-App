import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './src/search/index';
import Home from './src/home/index';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

