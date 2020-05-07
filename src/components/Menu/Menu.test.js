import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import {fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Menu />', () => {
  it('Should render buttons', () => {
    const { getByText } = render(<Menu/>);

    expect(getByText('Local')).toBeInTheDocument();
    expect(getByText('Health')).toBeInTheDocument();
    expect(getByText('Entertainment')).toBeInTheDocument();
    expect(getByText('Science')).toBeInTheDocument();
    expect(getByText('Technology')).toBeInTheDocument();
  });

  it('Should invoke updateCategory with the correct arguments', () => {
    const mockUpdateCategory = jest.fn();
    const { getByText } = render(<Menu updateCategory={mockUpdateCategory} />);

    fireEvent.click(getByText('Science'));
    expect(mockUpdateCategory).toHaveBeenCalledWith('science');
  });
})
