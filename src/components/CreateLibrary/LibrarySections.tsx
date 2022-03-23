import React from 'react';
import {
  Button, Checkbox, Container, Group,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { Section } from '../../types';

function LibrarySections({ createLibrary, prev }:
{
  createLibrary: (sections: Section[]) => void
  prev: () => void
}) {
  const form = useForm({
    initialValues: Object.fromEntries(Object.values(Section).map((s) => [s, false])),
  });

  const onSubmit = form.onSubmit((values) => {
    const sections = Object.entries(values)
      .filter((arr) => arr[1])
      .map((arr) => arr[0] as Section);
    createLibrary(sections);
  });

  return (
    <Container size={200}>
      <form onSubmit={onSubmit}>
        <Group direction="column">
          {Object.values(Section).map((s) => (
            <Checkbox
              key={s}
              label={s}
              size="xl"
              value={s}
              onChange={form.getInputProps(s, { type: 'checkbox' }).onChange}
            />
          )) }
        </Group>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prev}>Back</Button>
          <Button type="submit">Create</Button>
        </Group>
      </form>
    </Container>
  );
}

export default LibrarySections;
