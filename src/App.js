import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './pic.jpeg';
import './App.css';
import Sidebar from './components/sidebar';


function App() {
  return (
     <div className="App">
       <header >
        
        <Router>
            <Sidebar />
        </Router>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
       </header>
       <div className="App-body">
        <div >
           <img src={logo} className="App-logoStatic" alt="logo" />
         </div>
       </div>
       <footer>
        
         <div className="Right">info@cognigocustoms.com</div>
    
         <p>
         The entirety of this site is protected by copyright © 2000–2021 Cognigo Customs, Inc.
         </p>
       </footer>
     </div>
  );
}

export default App;
