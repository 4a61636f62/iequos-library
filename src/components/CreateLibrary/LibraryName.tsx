import React from 'react';
import {
  Button, Container, Group, TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';

function LibraryName({ setName, next, prev }:
{
  setName: (name: string) => void
  next: () => void
  prev: () => void
}) {
  const form = useForm({
    initialValues: {
      name: '',
    },
    validationRules: {
      name: (value: string) => (/[A-Za-z ]+/.test(value)),
    },
  });

  const onSubmit = form.onSubmit((values) => {
    setName(values.name);
    next();
  });

  return (
    <Container size="xs">
      <form onSubmit={onSubmit}>
        <TextInput
          required
          label="Library Name"
          placeholder="My Library"
          onChange={form.getInputProps('name').onChange}
          value={form.getInputProps('name').value}
          error={form.getInputProps('name').error}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prev}>Back</Button>
          <Button type="submit">Next</Button>
        </Group>
      </form>
    </Container>
  );
}

export default LibraryName;
