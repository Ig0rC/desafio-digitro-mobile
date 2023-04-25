import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  Card,
  Container,
  Description,
  Title,
  HeaderTitle,
  AddTaskButton,
  HeaderContainer,
  TextButton,
  OptionsCard,
  InfoCard,
  InfoContainer,
} from './styles';
import InputSearch from '../../components/InputSearch';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import ModalConfirm from '../../components/ModalConfirm';

function Home() {
  const [check, setCheck] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleToggleCheck() {
    setCheck(prevState => !prevState);
  }

  const existsTask =
    tasks.length === 0
      ? 'Nenhuma Tarefa'
      : tasks.length === 1
      ? '1 Tarefa'
      : `${tasks.length} tarefas`;

  function handleSearchTermChange(value: string) {
    setSearchTerm(value);
  }

  return (
    <ScrollView>
      <Container>
        <InputSearch
          value={searchTerm}
          onChangeText={handleSearchTermChange}
          placeholder="Pesquisar Tarefa..."
        />

        <HeaderContainer>
          <HeaderTitle>{existsTask}</HeaderTitle>

          <AddTaskButton>
            <TextButton>Nova Tarefa +</TextButton>
          </AddTaskButton>
        </HeaderContainer>

        <Card checkBox={check}>
          <InfoContainer>
            <CheckBox onChange={handleToggleCheck} value={check} />

            <InfoCard>
              <Title checkBox={check}>Arruma a casa</Title>
              <Description checkBox={check}>Usar</Description>
            </InfoCard>
          </InfoContainer>

          {!check && (
            <OptionsCard>
              <Icon
                style={{marginRight: 5}}
                size={32}
                name="edit"
                color="#5061fc"
              />
              <Icon size={32} name="trash" color="red" />
            </OptionsCard>
          )}
        </Card>
      </Container>
      <ModalConfirm visible={false} />
    </ScrollView>
  );
}

export default Home;
