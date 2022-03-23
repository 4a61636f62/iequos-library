import React, { useState } from 'react';
import {
  Container, Stepper,
} from '@mantine/core';
import { Library, Section } from '../../types';
import LibraryName from './LibraryName';
import LibrarySections from './LibrarySections';
import Welcome from './Welcome';

function CreateLibrary({ setLibrary }: {
  setLibrary: React.Dispatch<React.SetStateAction<Library>>
}) {
  const [active, setActive] = useState(0);
  const next = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prev = () => setActive((current) => (current > 0 ? current - 1 : current));

  const [name, setName] = useState('');

  const createLibrary = (sections: Section[]) => setLibrary({ name, sections, books: [] });

  return (
    <Container size="sm">
      <Stepper
        active={active}
        breakpoint="sm"
        onStepClick={(n) => (n < active ? setActive(n) : null)}
      >
        <Stepper.Step label="Welcome">
          <Welcome
            next={next}
          />
        </Stepper.Step>
        <Stepper.Step label="Library" description="Create a new library">
          <LibraryName
            setName={setName}
            next={next}
            prev={prev}
          />
        </Stepper.Step>
        <Stepper.Step label="LibrarySections" description="Add library sections">
          <LibrarySections
            createLibrary={createLibrary}
            prev={prev}
          />
        </Stepper.Step>
      </Stepper>
    </Container>

  );
}

export default CreateLibrary;
