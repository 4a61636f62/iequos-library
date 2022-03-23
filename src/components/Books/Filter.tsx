import React from 'react';
import {
  Container, Group, MultiSelect, TextInput,
} from '@mantine/core';
import { Section } from '../../types';

function Filter({
  sections,
  bookFilter,
  setBookFilter,
  sectionFilter,
  setSectionFilter,
}
:
{
  sections: Section[]
  bookFilter: string
  setBookFilter: React.Dispatch<React.SetStateAction<string>>
  sectionFilter: string[]
  setSectionFilter: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const handleBookFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookFilter(event.target.value);
  };

  return (
    <Container>
      <Group direction="column">
        <TextInput
          label="Filter"
          value={bookFilter}
          onChange={handleBookFilterChange}
        />
        <MultiSelect
          data={sections}
          value={sectionFilter}
          onChange={setSectionFilter}
          label="Section Filter"
          width={100}
        />
      </Group>
    </Container>
  );
}

export default Filter;
