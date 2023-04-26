import React from 'react';
import FormTask from '../../components/FormTask';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStack} from '../../routes/AppRoutes';
import TasksService from '../../services/TasksService';

type Props = NativeStackScreenProps<AppStack, 'NewTask'>;

function NewTask({navigation}: Props) {
  async function handleCreateTask(title: string, description: string) {
    await TasksService.create(title, description);

    navigation.goBack();
  }

  return <FormTask onSubmit={handleCreateTask} />;
}

export default NewTask;
