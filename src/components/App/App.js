import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentCategory: 'local',
      searchQuery: '',
    };
    this.getNewsArticles = this.getNewsArticles.bind(this);
  };

  updateCategory = (e, str) => {
    e.preventDefault();
    this.setState({currentCategory: str})
  };

  updateSearchQuery = (query) => {
   this.setState({ searchQuery: query });
  };

  getNewsArticles = () => {
    if(this.state.searchQuery !== '') {
      let allArticles = this.state[this.state.currentCategory];
      return allArticles.filter(article => {
        return article.headline.toLowerCase().match(this.state.searchQuery) || article.description.toLowerCase().match(this.state.searchQuery)
      })
    } else {
      return this.state[this.state.currentCategory];
    }
  }

  render () {
    const newsArticles = this.getNewsArticles();
    return (
      <div className="app">
        <Header searchQuery={this.state.searchQuery}
          updateSearchQuery={this.updateSearchQuery}
        />
        <Menu updateCategory={this.updateCategory} />
        <NewsContainer news={newsArticles} />
      </div>
    );
  };
}

export default App;
