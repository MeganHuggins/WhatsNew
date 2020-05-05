import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from './NewsContainer';
// import { local } from '../../data/local'

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
        <h1>Whats New</h1>
        <NewsContainer news={this.state.local} />
      </div>
    );
  }
}

export default App;


//
// class container extends App {
//   constructor() {
//     super();
//     this.state = {
//       local
//     }
//   }
//
//   render () {
//     return (
//       <div className="app">
//         // YOUR CODE GOES HERE!
//         {local.map(article => (
//           <NewsArticle article={article} />
//         ))}
//       </div>
//     );
//   }
// }
//
// export default App;
//
// // this would be in another file and imorted into here
// class NewsArticle extends Component {
//   constructor() {
//     super();
//     this.state = {}
//   }
//
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.description}</p>
//     )
//   }
// }
