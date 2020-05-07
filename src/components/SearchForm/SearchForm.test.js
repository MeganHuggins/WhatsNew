import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<SearchForm />', () => {
  it('Should render a input field and a submit button', () => {
    const { getByPlaceholderText, getByText } = render(<SearchForm />);
    const searchInput = getByPlaceholderText('Search for article');

    expect(searchInput).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('Should have placeholder text in input field when empty', () => {
    const { getByPlaceholderText } = render(<SearchForm value='' />);

    expect(getByPlaceholderText('Search for article')).toBeInTheDocument();
  });

  it('Should update the search query with search input value', () => {
    const mockUpdateSearchQuery = jest.fn();
    const { debug, getByPlaceholderText, getByText } = render(<SearchForm
      updateSearchQuery={mockUpdateSearchQuery} value=''/>
    );

    fireEvent.change(getByPlaceholderText('Search for article'), {target: {value: 'Chicken'}});
    fireEvent.click(getByText('Search'));

    expect(mockUpdateSearchQuery).toHaveBeenCalledWith('chicken');
  });
});
