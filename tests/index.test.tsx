import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, test } from '@jest/globals';
import Home from '../pages/index';

describe('<Home />', () => {
  test('render home page', () => {
    render(<Home />);
    expect(screen.getByText('جيل فطرة')).toBeInTheDocument();
  });
});
