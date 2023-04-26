import React from 'react';
import {
  Button,
  ContainerContent,
  Content,
  Modal,
  OptionsModal,
  Background,
  TextButton,
  Title,
} from './styles';

interface Props {
  visible: boolean;
  onCloseModal: () => void;
  taskTitle?: string;
  onConfirm: () => void;
}

function ModalConfirm({visible, onCloseModal, taskTitle, onConfirm}: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <ContainerContent>
        <Background>
          <Content>
            <Title>
              Tem certeza que deseja remover a tarefa "{taskTitle}" ?
            </Title>

            <Button onPress={onConfirm} type="confirm">
              <TextButton type="confirm">Excluir</TextButton>
            </Button>
            <Button onPress={onCloseModal} type="cancel">
              <TextButton type="cancel">Cancelar</TextButton>
            </Button>
          </Content>

          <OptionsModal />
        </Background>
      </ContainerContent>
    </Modal>
  );
}

export default ModalConfirm;
