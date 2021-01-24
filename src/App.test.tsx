import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays 20 dishwashers', async () => {
  render(<App />);
  const listItems = await screen.findAllByTestId('list-item');
  expect(listItems.length).toBe(20);
});

test('tapping on a dishwasher takes the user to the product details', async () => {
  render(<App />);
  const listItems = await screen.findAllByTestId('list-item');
  await fireEvent.click(listItems[0])
  screen.getByRole('heading', {
    name: /Bosch SMS24AW01G Freestanding Dishwasher, White/i,
    level: 1
  })
});