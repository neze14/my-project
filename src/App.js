import React from 'react';// imports react
import './App.css';

import Email from './components/email';
import SMS from './components/sms';
import URL from './components/url';

const App = () => { // creates the constant variable, App
  return (
    <div className = "Container">
      <div className="Column1">
        <Email />
        <button class="button is-info is-rounded" >Refresh</button> 
      </div>

      <div className="Column2">
        <SMS />
      </div>

      <div className="Column3">
        <URL />
      </div>

    </div>
  );
}

export default App;

/* 
  import logo from './logo.svg';
  import './App.css';

  function App() {
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
  }

  export default App;
*/