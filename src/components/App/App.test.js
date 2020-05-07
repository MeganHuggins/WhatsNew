import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  const mockUpdateSearchQuery = jest.fn();
  const mockGetMockArticles = jest.fn();

  it('should render a <Header />', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('search-bar')).toBeInTheDocument();
  });

  it('should render a <Menu />', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('nav-bar')).toBeInTheDocument();
  });

  it('should render a <NewsContainer />', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('news-container')).toBeInTheDocument();
  });

  // it('should invoke updateCategory with correct arguments', () => {
  //   const { getByText } = render(<App />);
  //   const mockUpdateCategory = jest.fn();
  //   fireEvent.click(getByText('Local'));
  //
  //   expect(mockUpdateCategory).toHaveBeenCalledWith('science')
  // });

})
