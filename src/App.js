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
  const [burgernav,setBurgernav]=useState(false);
  const [visibility, setVisibility] = useState(false);
  const [bur, setBur]= useState('navbar')
  const [click, setClick] = useState(false);
    const [dropdown,setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
  
      function burger() {
        const link = document.getElementsByClassName("visibility");        
          for(let item of link){ 
            if(visibility==true){    
              item.style.display= "contents"
              setVisibility(false)
            }
            else{
              item.style.display= "none"
            setVisibility(true)            
            }
          }
      }

  return (
    <Router>
    <div className="App">
      <Nav burger={burger} click={click} dropdown={dropdown} />
      <div className="content">
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/contact'><Contact/></Route>
        <Route path='/service'><Service/></Route>
        <Route path='/login'><LogIn/></Route>
      </Switch>      
      </div>
    </div>
    </Router>
  );
}

export default App;
