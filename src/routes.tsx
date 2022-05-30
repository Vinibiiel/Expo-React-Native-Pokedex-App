import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Bottom from './navigation/bottomNavigate'

import { AuthProvider } from './auth';

const Routes = (): JSX.Element => (
    <NavigationContainer>
        <AuthProvider>
            <Bottom />
        </AuthProvider>
    </NavigationContainer>
)

export default Routes;