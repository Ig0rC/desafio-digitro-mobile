import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  Card,
  Container,
  Description,
  Title,
  HeaderTitle,
  AddTaskContainer,
  HeaderContainer,
  OptionsCard,
  InfoCard,
  InfoContainer,
  SpaceBottom,
  Status,
  StatusContainer,
  AddTaskText,
} from './styles';
import InputSearch from '../../components/InputSearch';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import ModalConfirm from '../../components/ModalConfirm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStack} from '../../routes/AppRoutes';
import TasksService from '../../services/TasksService';
import {useIsFocused} from '@react-navigation/native';
import ContainerMain from '../../components/ContainerMain';
import {Task} from '../../interfaces/Task';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

type Props = NativeStackScreenProps<AppStack, 'Home'>;

function Home({navigation}: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [taskBeingDeleted, setTaskBeingDeleted] = useState<Task | null>(null);
  const isFocused = useIsFocused();

  const tasksFiltered = tasks.filter(task =>
    task.title.toUpperCase().includes(searchTerm.toUpperCase()),
  );

  const existsTask =
    tasksFiltered.length === 0
      ? 'Nenhuma Tarefa Encontrada'
      : tasksFiltered.length === 1
      ? '1 Tarefa encontrada'
      : `${tasksFiltered.length} tarefas encontradas`;

  const tasksNotCompleted = tasksFiltered.filter(
    task => task.status === false,
  ).length;

  const tasksCompleted = tasksFiltered.filter(
    task => task.status === true,
  ).length;

  function getStatusTasks(open: boolean) {
    if (open) {
      return tasksCompleted === 1
        ? '1 - Concluídas'
        : `${tasksCompleted} - Concluídas`;
    }

    return tasksNotCompleted === 1
      ? '1 - Não Concluídas'
      : `${tasksNotCompleted} - Não Concluídas`;
  }

  function handleSearchTermChange(value: string) {
    setSearchTerm(value);
  }

  function handleToScreenNewTask() {
    setSearchTerm('');
    navigation.push('NewTask');
  }

  function handleToScreenEditTask(id: string) {
    setSearchTerm('');
    navigation.push('EditTask', {
      id,
    });
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteTask() {
    if (taskBeingDeleted) {
      const taskStorage = await TasksService.delete(taskBeingDeleted.id, tasks);
      setTasks(taskStorage);
      setIsDeleteModalVisible(false);
      Toast.show({
        type: 'success',
        text1: 'Excluído com sucesso!',
      });
    }
  }

  async function handleDeleteTask(task: Task) {
    setTaskBeingDeleted(task);
    setIsDeleteModalVisible(true);
  }

  const getTasks = useCallback(async () => {
    if (isFocused) {
      const tasksStorage = await TasksService.findAll();

      setTasks(tasksStorage);
    }
  }, [isFocused]);

  async function handleToggleCheck(task: Task) {
    task.status = !task.status;

    const tasksUpdated = TasksService.updateTasks(task, tasks);

    setTasks(tasksUpdated);
  }

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <ContainerMain>
      <ScrollView keyboardShouldPersistTaps="always">
        <Container>
          <InputSearch
            value={searchTerm}
            onChangeText={handleSearchTermChange}
            placeholder="Pesquisar Tarefa..."
          />

          <HeaderContainer>
            <HeaderTitle>{existsTask}</HeaderTitle>
            <StatusContainer>
              <Status colorStatus="completed">{getStatusTasks(true)}</Status>
              <Status colorStatus="notCompleted">
                {getStatusTasks(false)}
              </Status>
            </StatusContainer>
          </HeaderContainer>

          {tasksFiltered.map(task => (
            <Card key={task.id} checkBox={task.status}>
              <InfoContainer>
                <CheckBox
                  onChange={() => handleToggleCheck(task)}
                  value={task.status}
                />

                <InfoCard>
                  <Title checkBox={task.status}>{task.title}</Title>
                  <Description checkBox={task.status}>
                    {task.description}
                  </Description>
                </InfoCard>
              </InfoContainer>

              <OptionsCard>
                {!task.status && (
                  <Icon
                    onPress={() => handleToScreenEditTask(task.id)}
                    style={{marginRight: 5}}
                    size={28}
                    name="edit"
                    color="#5061fc"
                  />
                )}
                <Icon
                  onPress={() => handleDeleteTask(task)}
                  size={28}
                  name="trash"
                  color="red"
                />
              </OptionsCard>
            </Card>
          ))}
        </Container>

        <ModalConfirm
          onConfirm={handleConfirmDeleteTask}
          taskTitle={taskBeingDeleted?.title}
          onCloseModal={handleCloseDeleteModal}
          visible={isDeleteModalVisible}
        />

        <SpaceBottom />
      </ScrollView>

      <AddTaskContainer>
        <IonicIcons
          onPress={handleToScreenNewTask}
          size={60}
          name="add-circle"
          color="#5061fc"
        />
        <AddTaskText>Nova Tarefa</AddTaskText>
      </AddTaskContainer>
    </ContainerMain>
  );
}

export default Home;
