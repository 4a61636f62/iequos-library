import React, { useState } from 'react';
import {
  Button,
  Container, Group, Pagination, Table, Title,
} from '@mantine/core';
import { Book, Section } from '../../types';
import NewBookForm from './Form';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Books({ books, addBook, sections }: {
  books: Book[]
  addBook: (book: Book) => void
  sections: Section[]
}) {
  const [page, setPage] = useState(1);
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <Group direction="row">
        <Title order={2}>Books</Title>
        <Button
          size="xs"
          onClick={() => setOpened(true)}
        >
          New
        </Button>
      </Group>
      <NewBookForm
        opened={opened}
        setOpened={setOpened}
        addBook={addBook}
        sections={sections}
      />
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {books.slice((page - 1) * 10, page * 10).map((book) => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.section}</td>
              </tr>
            ))}
            {}
          </tbody>
        </Table>
      </Container>
      {books.length > 10
            && (
            <Pagination
              page={page}
              total={Math.ceil(books.length / 10)}
              onChange={setPage}
            />
            )}
    </Container>
  );
}

export default Books;
