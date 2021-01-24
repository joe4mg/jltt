import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('displays 20 dishwashers', () => {
  render(<App />);
});

test('tapping on a dishwasher takes the user to the product details', () => {
  render(<App />);
});