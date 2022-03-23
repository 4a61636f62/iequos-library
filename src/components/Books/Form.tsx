import {
  Button, Center,
  Group, Modal, Select, TextInput, Title,
} from '@mantine/core';
import React from 'react';
import { useForm } from '@mantine/hooks';
import { Book, Section } from '../../types';

function NewBookForm({
  opened, setOpened, addBook, sections,
}:
{ opened: boolean
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  addBook: (book: Book) => void
  sections: Section[]
}) {
  const form = useForm({
    initialValues: {
      title: '',
      author: '',
      section: Section.FICTION,
    },
    validationRules: {
      title: (title: string) => /[A-Za-z0-9 ]+/.test(title),
      author: (author: string) => /[A-Za-z ]+/.test(author),
    },
  });

  const onSubmit = form.onSubmit((values) => {
    addBook({
      title: values.title,
      author: values.author,
      section: values.section,
    });
    setOpened(false);
    form.reset();
  });
  return (
    <Modal
      size="xs"
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <Group>
        <form onSubmit={onSubmit}>
          <Center>
            <Title order={3}>
              New Book
            </Title>
          </Center>
          <Group>
            <TextInput
              required
              label="Title"
              placeholder="Book Title"
              onChange={form.getInputProps('title').onChange}
              value={form.getInputProps('title').value}
              error={form.getInputProps('title').error}
            />
            <TextInput
              required
              label="Author"
              placeholder="Book Title"
              onChange={form.getInputProps('author').onChange}
              value={form.getInputProps('author').value}
              error={form.getInputProps('author').error}
            />
            <Select
              data={sections}
              label="Section"
              onChange={form.getInputProps('section').onChange}
              value={form.getInputProps('section').value}
            />
          </Group>
          <Center p="md">
            <Button type="submit">Add Book</Button>
          </Center>
        </form>
      </Group>
    </Modal>
  );
}

export default NewBookForm;
