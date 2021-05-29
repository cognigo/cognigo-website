import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './pic.jpeg';
import './App.css';
import Navbar from './components/Navbar';
import Services from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import You from './pages/you';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Services} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/annual' component={AnnualReport} />
            <Route path='/team' component={You} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </Router>
             
        
      </header>
      <body className="App-body">
        <div >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </body>
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
