import React from 'react';
import Background from './src/components/Background';
import AppRoutes from './src/routes/AppRoutes';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Background>
        <AppRoutes />
      </Background>
    </NavigationContainer>
  );
}

export default App;
