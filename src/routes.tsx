import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Bottom from './navigation/bottomNavigate'

import { AuthProvider } from './auth';
import { StatusBar } from 'expo-status-bar';

const Routes = (): JSX.Element => (
    <NavigationContainer>
        <AuthProvider>
            <Bottom />
        </AuthProvider>
    </NavigationContainer>
)

export default Routes;