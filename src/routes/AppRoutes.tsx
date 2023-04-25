import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

export type AppStack = {
  Home: undefined;
  NewStack: undefined;
};

const Stack = createNativeStackNavigator<AppStack>();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0D6050',
        },
      }}>
      <Stack.Screen
        options={{
          title: 'Tarefas',
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
