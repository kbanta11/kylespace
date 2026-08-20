import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the profile page with the wordmark and nav', () => {
  render(<App />);
  expect(screen.getByText('kylespace')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Kyle Banta' })).toBeInTheDocument();
});

test('renders all five theme pills as a radiogroup', () => {
  render(<App />);
  const group = screen.getByRole('radiogroup', { name: /change theme/i });
  expect(group).toBeInTheDocument();
  expect(screen.getAllByRole('radio')).toHaveLength(5);
});
