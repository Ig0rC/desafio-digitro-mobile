import React from 'react';
import {Container, Error, Label, Required} from './styles';

interface Props {
  children: React.ReactNode;
  label: string;
  error?: string;
  required?: boolean;
}

function FormGroup({children, label, error, required}: Props) {
  return (
    <Container>
      <Label>
        {label} {required && <Required>*</Required>}
      </Label>
      {children}

      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default FormGroup;
