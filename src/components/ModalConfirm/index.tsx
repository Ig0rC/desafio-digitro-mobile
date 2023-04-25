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
}

function ModalConfirm({visible}: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <ContainerContent>
        <Background>
          <Content>
            <Title>Tem certeza que deseja remove a tarefa ?</Title>

            <Button type="confirm">
              <TextButton type="confirm">Excluir</TextButton>
            </Button>
            <Button type="cancel">
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
