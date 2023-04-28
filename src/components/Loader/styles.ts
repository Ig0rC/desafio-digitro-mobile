import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #5061fc;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 100px;
  margin-bottom: 20px;
`;

export const Info = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
