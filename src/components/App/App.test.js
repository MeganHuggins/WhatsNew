import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { cleanup, fireEvent, render } from '@testing-library/react';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a <Header />', () => {
    render(<)

  })
})
