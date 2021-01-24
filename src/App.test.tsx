import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays 20 dishwashers', async () => {
  render(<App />);
  const listItems = screen.getAllByTestId('list-item');
  expect(listItems.length).toBe(20);
});

test('tapping on a dishwasher takes the user to the product details', async () => {
  render(<App />);
  const firstListItem = screen.getAllByTestId('list-item')[0];
  await fireEvent.click(firstListItem)
  screen.getByRole('heading', {
    name: /Bosch SMS24AW01G Freestanding Dishwasher, White/i
  })
});