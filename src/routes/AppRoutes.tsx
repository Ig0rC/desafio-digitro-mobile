import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import NewTask from '../screens/NewTask';
import EditTask from '../screens/EditTask';

export type AppStack = {
  Home: undefined;
  NewTask: undefined;
  EditTask: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<AppStack>();

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#5061fc',
        headerTintColor: '#ffff',
        headerStyle: {
          backgroundColor: '#5061fc',
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
      <Stack.Screen
        options={{
          title: 'Editar Tarefa',
        }}
        name="EditTask"
        component={EditTask}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
