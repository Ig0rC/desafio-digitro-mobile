import styled from 'styled-components/native';

interface ButtonProps {
  type: 'cancel' | 'confirm';
}

export const Modal = styled.Modal``;

export const ContainerContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.View`
  background-color: #fff;
  border-radius: 4px;

  shadowcolor: #000;
  shadowoffset: 0 2px;
  shadowopacity: 0.25;
  shadowradius: 2.62px;
  elevation: 5;
`;

export const Content = styled.View`
  padding: 15px 15px;
  display: flex;
  align-items: center;
`;

export const OptionsModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  flex-shrink: 1;
  margin: 15px 0px;
  font-weight: 500;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({type}) =>
    type === 'cancel' ? 'transparent' : '#FC5050'};
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
`;

export const TextButton = styled.Text<ButtonProps>`
  font-weight: bold;
  font-size: 16px;
  color: ${({type}) => (type === 'cancel' ? '#2F80ED' : '#ffff')};
`;
