import React, { Component } from 'react';
import local from '../../data/local';
import NewsContainer from '../NewsContainer/NewsContainer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <Header />
        <Menu />
        <NewsContainer news={this.state.local} />
      </div>
    );
  }
}

export default App;
