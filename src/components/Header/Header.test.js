import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Header />', () => {
  it('Should display a logo and a search component', () => {
    const { getByPlaceholderText, getByText } = render(<Header />);

    expect(getByText(/What's/i)).toBeInTheDocument();
    expect(getByText(/Search/i)).toBeInTheDocument();
  });
});
