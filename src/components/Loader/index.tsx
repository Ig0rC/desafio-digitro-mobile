import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, Info} from './styles';

interface Props {
  isLoading: boolean;
}

function Loader({isLoading}: Props): JSX.Element {
  return (
    <Container>
      <ActivityIndicator size="large" color="#fff" animating={isLoading} />
      <Info>Processando, aguarde!</Info>
    </Container>
  );
}

export default Loader;
