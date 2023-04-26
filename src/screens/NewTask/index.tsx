import React from 'react';
import FormTask from '../../components/FormTask';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStack} from '../../routes/AppRoutes';
import TasksService from '../../services/TasksService';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

type Props = NativeStackScreenProps<AppStack, 'NewTask'>;

function NewTask({navigation}: Props) {
  async function handleCreateTask(
    title: string,
    description: string | undefined,
  ) {
    await TasksService.create(title, description);

    Toast.show({
      type: 'success',
      text1: 'Cadastrado com sucesso!',
    });

    navigation.goBack();
  }

  return <FormTask onSubmit={handleCreateTask} />;
}

export default NewTask;
