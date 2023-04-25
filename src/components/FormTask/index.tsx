import React, {useState} from 'react';
import Input from '../Input';
import FormGroup from '../FormGroup';
import {Button, Form, TextButton} from './styles';
import useErrors from '../../hooks/useErrors';

function FormTask() {
  const {getErrorMessageByFieldName, setError, removeError, errors} =
    useErrors();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const isFormValid = title && errors.length === 0;

  function handleTitleChange(value: string) {
    setTitle(value);

    if (!value) {
      setError('title', 'Título é obrigatorio!');
    } else {
      removeError('title');
    }
  }

  function handleDescriptionChange(value: string) {
    setDescription(value);
  }

  return (
    <Form>
      <FormGroup
        required
        error={getErrorMessageByFieldName('title')}
        label="Título">
        <Input
          value={title}
          onChangeText={handleTitleChange}
          placeholder="Título"
        />
      </FormGroup>

      <FormGroup label="Descrição">
        <Input
          value={description}
          onChangeText={handleDescriptionChange}
          multiline
          placeholder="descrição"
        />
      </FormGroup>

      <Button disabled={!isFormValid} type="confirm">
        <TextButton type="confirm">Cadastrar</TextButton>
      </Button>
    </Form>
  );
}

export default FormTask;
