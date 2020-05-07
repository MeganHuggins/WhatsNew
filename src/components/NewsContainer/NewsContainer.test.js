import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<NewsContainer />', () => {
  it('Should display expected content', () => {
    const mockNewArticles = [{
      id:26,
      headline:'Turing is the best school around',
      img:'mockImg',
      description:'Especially that cool class of 2001FE',
      url:'mockUrl',
    }];

    const { getByTestId } = render(<NewsContainer news={mockNewArticles} />);

    expect(getByTestId('card')).toBeInTheDocument();
  });
});
