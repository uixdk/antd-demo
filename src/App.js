import React from 'react';
//import logo from './logo.svg';
import './App.css';

import PageSwitch from './PageSwitch';

function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */

  return (
    <div className="wrap">
      <h1>Antd 组件demo</h1>
      <PageSwitch />
    </div>
  );
}

export default App;
