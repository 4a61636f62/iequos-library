import React from 'react';
import {
  Button,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Container, Group, Text, Title,
} from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Welcome({ next }: {
  next: () => void
}) {
  return (
    <Container size="xs">
      <Group direction="column" position="center">
        <Title>Welcome to iEquos Library</Title>
        <Text>Click next to get started</Text>
        <Button onClick={next}>Next</Button>
      </Group>
    </Container>
  );
}

export default Welcome;
