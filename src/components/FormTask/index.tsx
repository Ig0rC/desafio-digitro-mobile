import React, {useState} from 'react';
import Input from '../Input';
import FormGroup from '../FormGroup';
import {Button, Form, TextButton} from './styles';
import useErrors from '../../hooks/useErrors';
import {Task} from '../../interfaces/Task';

interface Props {
  onSubmit: (title: string, description: string | undefined) => void;
  task?: Task | null;
}

function FormTask({onSubmit, task}: Props) {
  const {getErrorMessageByFieldName, setError, removeError, errors} =
    useErrors();

  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);

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

  function handleSubmit() {
    if (title) {
      onSubmit(title, description);
    }
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

      <Button onPress={handleSubmit} disabled={!isFormValid} type="confirm">
        <TextButton type="confirm">{task ? 'Salvar' : 'Cadastrar'}</TextButton>
      </Button>
    </Form>
  );
}

export default FormTask;
