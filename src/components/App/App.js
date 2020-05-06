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
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentCategory: 'local',
    }
  };

  updateCategory = (e, str) => {
    e.preventDefault();
    this.setState({currentCategory: str})
  };

  render () {
    return (
      <div className="app">
        <Header />
        <Menu updateCategory={this.updateCategory} />
        <NewsContainer news={this.state[this.state.currentCategory]} />
      </div>
    );
  };
}

export default App;
