import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<NewsContainer />', () => {
  it('Should display expected content', () => {
    const { getByText, getByTestId } = render(<NewsArticle id={26} headline={'Turing is the best school around'} img={'mockImg'} description={'Especially that cool class of 2001FE'} url={'mockUrl'} />);

    expect(getByText('Turing is the best school around')).toBeInTheDocument();
    expect(getByTestId('mockImg')).toBeInTheDocument();
    expect(getByText('Especially that cool class of 2001FE')).toBeInTheDocument();
    expect(getByTestId('mockUrl')).toBeInTheDocument();
  });
});
