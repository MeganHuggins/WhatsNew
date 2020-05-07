import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchQuery: ''
    }
  }

  updateSearchQuery = (e) => {
    this.setState({searchQuery: e.target.value.toLowerCase()})
  }

  searchArticles = (e) => {
    e.preventDefault();
    this.props.updateSearchQuery(this.state.searchQuery);
    this.setState({searchQuery: ''})
  }

  render() {
    return (
      <header className='header'>
        <h1>What's <span>News?</span></h1>
        <form>
          <input
            value={this.state.searchQuery}
            type='search'
            placeholder='Search for article'
            onChange={this.updateSearchQuery}
          />
          <button
            onClick={this.searchArticles}
          >
            Search
          </button>
        </form>
      </header>
    )
  }
}

export default Header;
