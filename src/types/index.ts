export enum Section {
  FICTION = 'Fiction',
  NONFICTION = 'Non-Fiction',
  MAGAZINE = 'Magazine',
}

export type Library = {
  name: string
  sections: Section[]
  books: Book[]
};

export type Book = {
  title: string
  author: string
  section: Section
};
