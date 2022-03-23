import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import Books from './Books';
import { Book, Section } from '../../types';

it('renders without crashing', () => {
  act(() => {
    render(
      <Books books={[]} addBook={() => {}} sections={[]} />,
    );
  });
});

it('renders a list of books', () => {
  const books: Book[] = [];
  books.push({
    title: 'Book 1',
    author: 'Author One',
    section: Section.FICTION,
  });
  books.push({
    title: 'Book 2',
    author: 'Author Two',
    section: Section.NONFICTION,
  });
  books.push({
    title: 'Book 3',
    author: 'Author Three',
    section: Section.MAGAZINE,
  });
  act(() => {
    render(
      <Books
        books={books}
        addBook={() => {}}
        sections={[Section.FICTION, Section.NONFICTION, Section.MAGAZINE]}
      />,
    );
  });
  const table = screen.getByRole('table');
  books.forEach((b) => {
    expect(table.textContent).toContain(b.title);
    expect(table.textContent).toContain(b.author);
    expect(table.textContent).toContain(b.section);
  });
});

// @todo
//  add tests for pagination
// add tests for new book form
