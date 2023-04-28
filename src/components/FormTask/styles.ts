import styled from 'styled-components/native';

interface ButtonProps {
  type: 'cancel' | 'confirm';
}

export const Form = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({disabled}) => (disabled ? '#c3c3c3' : 'blue')};
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
