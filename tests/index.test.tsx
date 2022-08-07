import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, test } from '@jest/globals';
import Home from '../pages/index';

describe('<Home />', () => {
 test('render home page', () => {
  render(<Home />);
  expect(screen.getByText(/جيل/)).toBeInTheDocument();
  expect(screen.getByText(/الفطرة/)).toBeInTheDocument();
  expect(screen.getByText(/للمساهمة باقتراح مادة/)).toBeInTheDocument();
  expect(screen.getByText(/للتطوّع في المشروع/)).toBeInTheDocument();
 });
});
