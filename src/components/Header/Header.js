import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

const Header = (props) => {
  return (
    <header className='header' data-testid='header'>
      <h1>What's
        <span>News?</span>
      </h1>
      <SearchForm
        searchQuery={props.searchQuery}
        updateSearchQuery={props.updateSearchQuery}
      />
    </header>
  )
}

export default Header;
