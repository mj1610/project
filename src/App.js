import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Service from './Components/Service';
import Contact from './Components/Contact';
import About from './Components/About';
import LogIn from './Components/LogIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [burger,setBurger]=useState(false);
  const [visibility, setVisibility] = useState(false);
  
  function handleBurger() {
        setBurger(true);
        setVisibility(true);
        

  }
  return (
    <Router>
    <div className="App">
      <Nav burger={burger} />
      <div className="content">
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/about'>
        <About/>
        </Route>
        <Route path='/contact'>
        <Contact/>
        </Route>
        <Route path='/service'>
        <Service/>
        </Route>
        <Route path='/login'>
        <LogIn/>
        </Route>
      </Switch>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
