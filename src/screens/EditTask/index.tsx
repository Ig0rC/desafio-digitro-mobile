import React, {useCallback, useEffect, useState} from 'react';
import FormTask from '../../components/FormTask';
import TasksService from '../../services/TasksService';
import {AppStack} from '../../routes/AppRoutes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Task} from '../../interfaces/Task';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import ContainerMain from '../../components/ContainerMain';
import Loader from '../../components/Loader';
import delay from '../../utils/delay';

type Props = NativeStackScreenProps<AppStack, 'EditTask'>;

function EditTask({route}: Props) {
  const {id} = route.params;
  const [task, setTask] = useState<Task | null>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(title: string, description: string | undefined) {
    try {
      setIsLoading(true);
      if (task) {
        await TasksService.updateOne({
          ...task,
          title,
          description: description?.trim(),
        });

        await delay();

        Toast.show({
          type: 'success',
          text1: 'Atualizado com sucesso!',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Algo inesperado aconteceu!',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const getTask = useCallback(async () => {
    try {
      const taskStorage = await TasksService.findOne(id);

      setTask(taskStorage);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    getTask();
  }, [getTask]);

  return (
    <ContainerMain>
      {isLoading && <Loader isLoading={isLoading} />}
      <FormTask key={task?.id} task={task} onSubmit={handleSubmit} />
    </ContainerMain>
  );
}

export default EditTask;
