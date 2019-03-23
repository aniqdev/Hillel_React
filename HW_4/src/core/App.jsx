// import React, { Component } from 'react';
// import logo from '../logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, {Component} from 'react';
import MainContent from '../features/main-content/Main-content-component'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Main Content</h1>
        <MainContent title='MainContent' />
      </div>
    );
  }
}

export default App;

