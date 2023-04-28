import styled from 'styled-components/native';

interface Props {
  checkBox: boolean;
}

interface StatusProps {
  colorStatus: 'completed' | 'notCompleted';
}

interface CardProps extends Props {}
interface TitleProps extends Props {}
interface DescriptionProps extends Props {}

export const Container = styled.View`
  margin: 14px 10px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
`;

export const Status = styled.Text<StatusProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${({colorStatus}) => (colorStatus === 'completed' ? 'green' : 'red')};
`;

export const StatusContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

export const AddTaskContainer = styled.View`
  padding: 8px;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 4px;
  right: 4px;
`;

export const AddTaskText = styled.Text`
  color: #5061fc;
  font-weight: bold;
  font-size: 16px;
`;

export const Card = styled.View<CardProps>`
  background-color: ${({checkBox}) => (!checkBox ? '#fff' : '#c3c3c3')};
  border-radius: 4px;
  padding: 16px 16px 16px 8px;

  flex-direction: row;
  align-items: center;

  shadowcolor: #000;
  shadowoffset: 0 2px;
  shadowopacity: 0.25;
  shadowradius: 2.62px;
  elevation: 5;
  margin: 0px 0px 10px 0px;
`;

export const OptionsCard = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const InfoCard = styled.View`
  flex-shrink: 1;
  margin: 6px;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration: ${({checkBox}) => (checkBox ? 'line-through' : 'none')};
`;

export const Description = styled.Text<DescriptionProps>`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;

  text-decoration: ${({checkBox}) => (checkBox ? 'line-through' : 'none')};
`;

export const SpaceBottom = styled.View`
  margin-bottom: 78px;
`;
