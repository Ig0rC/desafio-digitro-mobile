import React from 'react';
import Background from './src/components/Background';
import AppRoutes from './src/routes/AppRoutes';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import Toast from 'react-native-toast-message';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Background>
        <StatusBar barStyle="dark-content" backgroundColor="#5061fc" />
        <AppRoutes />
        <Toast />
      </Background>
    </NavigationContainer>
  );
}

export default App;
