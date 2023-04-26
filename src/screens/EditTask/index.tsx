import React, {useCallback, useEffect} from 'react';

import FormTask from '../../components/FormTask';
import TasksService from '../../services/TasksService';
import {AppStack} from '../../routes/AppRoutes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AppStack, 'EditTask'>;

function EditTask({route}: Props) {
  const {id} = route.params;

  async function handleSubmit(title: string, description: string) {
    await TasksService.create(title, description);
  }

  const getTask = useCallback(() => {
    try {
      const task = TasksService.findOne(id);

      console.log(task);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    getTask();
  }, [getTask]);

  return <FormTask onSubmit={handleSubmit} />;
}

export default EditTask;
