import logo from './pic.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
        <p>info@cognigocustoms.com</p>
      </body>
      <footer>
        <p>
        The entirety of this site is protected by copyright © 2000–2021 Cognigo Customs, Inc.
        </p>
      </footer>
    </div>
  );
}

export default App;
