import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import NewTask from '../screens/NewTask';

export type AppStack = {
  Home: undefined;
  NewTask: undefined;
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
      <Stack.Screen
        options={{
          title: 'Nova Tarefa',
        }}
        name="NewTask"
        component={NewTask}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
