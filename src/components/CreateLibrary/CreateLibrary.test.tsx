import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateLibrary from './CreateLibrary';

it('renders without crashing', () => {
  act(() => {
    render(
      <CreateLibrary setLibrary={() => {}} />,
    );
  });
});

it('renders a welcome page', () => {
  act(() => {
    render(
      <CreateLibrary setLibrary={() => {}} />,
    );
  });
  expect(screen.getByText('Welcome to iEquos Library'));
});

it('takes user to Library name entry field when the next button is pressed from the welcome page', () => {
  act(() => {
    render(
      <CreateLibrary setLibrary={() => {}} />,
    );
  });
  const button = screen.getAllByRole('button')
    .filter((b: HTMLElement) => b.textContent && b.textContent.includes('Next'))[0];
  expect(button).toBeDefined();
  act(() => {
    button.click();
  });
  const textEntry = screen.getByRole('textbox');
  expect(textEntry).toBeDefined();
});

it('allows the user to go back to the welcome page by clicking the back button on the library name page', () => {
  act(() => {
    render(
      <CreateLibrary setLibrary={() => {}} />,
    );
  });
  const nextButton = screen.getAllByRole('button')
    .filter((b: HTMLElement) => b.textContent && b.textContent.includes('Next'))[0];
  act(() => {
    nextButton.click();
  });
  const backButton = screen.getAllByRole('button')
    .filter((b: HTMLElement) => b.textContent && b.textContent.includes('Back'))[0];
  act(() => {
    backButton.click();
  });
  expect(screen.getByText('Welcome to iEquos Library'));
});

it('takes user to the section selection page after the library name form is submitted', () => {
  act(() => {
    render(
      <CreateLibrary setLibrary={() => {}} />,
    );
  });
  const nextButton1 = screen.getAllByRole('button')
    .filter((b: HTMLElement) => b.textContent && b.textContent.includes('Next'))[0];
  act(() => {
    nextButton1.click();
  });
  const textEntry = screen.getByRole('textbox') as HTMLInputElement;
  expect(textEntry).toBeDefined();
  act(() => {
    userEvent.type(textEntry, 'My Library');
  });
  const nextButton2 = screen.getAllByRole('button')
    .filter((b: HTMLElement) => b.textContent && b.textContent.includes('Next'))[0];
  act(() => {
    nextButton2.click();
  });
  expect(screen.getAllByRole('checkbox'));
});

// @todo
//  test to check that createLibrary is called when provided with valid input
//  test to check that invalid input is rejected
