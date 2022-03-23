import React, { useState } from 'react';
import {
  AppShell, Header, Title, Navbar, Drawer, Button, Group,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import CreateLibrary from './CreateLibrary/CreateLibrary';
import { Book, Library } from '../types';
import Books from './Books/Books';
import Filter from './Books/Filter';

function App() {
  const { width } = useViewportSize();
  const [library, setLibrary] = useState<Library>({ name: '', sections: [], books: [] });
  const [bookFilter, setBookFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addBook = (book: Book) => {
    setLibrary({ ...library, books: [...library.books, book] });
  };

  return library.name === ''
    ? (
      <AppShell>
        {library.name === ''
              && (
              <CreateLibrary
                setLibrary={setLibrary}
              />
              )}
      </AppShell>
    )

    : (
      <AppShell
        navbar={width > 800 ? (
          <Navbar
            width={{ base: 300 }}
            height={500}
            p="xs"
          >
            <Filter
              sections={library.sections}
              bookFilter={bookFilter}
              setBookFilter={setBookFilter}
              sectionFilter={sectionFilter}
              setSectionFilter={setSectionFilter}
            />
          </Navbar>
        ) : undefined}
        header={(
          <Header
            height={70}
            p="md"
          >
            <Group>
              <Title>{library.name}</Title>
              {width < 800 && <Button onClick={() => setDrawerOpen(true)}>Filter</Button>}
            </Group>
          </Header>
      )}
      >
        {width < 800
            && (
            <Drawer opened={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Filter
                sections={library.sections}
                bookFilter={bookFilter}
                setBookFilter={setBookFilter}
                sectionFilter={sectionFilter}
                setSectionFilter={setSectionFilter}
              />
            </Drawer>
            )}
        <Books
          books={
              library.books
                .filter((b: Book) => (b.title.toLowerCase().includes(bookFilter.toLowerCase())
                          || b.author.toLowerCase().includes(bookFilter.toLowerCase()))
                      && (sectionFilter.length === 0
                          || sectionFilter.includes(b.section)))
          }
          addBook={addBook}
          sections={library.sections}
        />
      </AppShell>
    );
}

export default App;
