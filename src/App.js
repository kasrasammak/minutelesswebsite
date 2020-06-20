import React from 'react';
import Home from './Home'; 
import About from './About';
import News from './News';
import Releases from './Releases';
import Artists from './Artists';
import NavBar from './NavBar';
import Footer from './Footer';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">




  <NavBar></NavBar>

  <Router history={hashHistory}>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/About" component={About}></Route>
    <Route exact path="/News" component={News}></Route>
    <Route exact path="/Artists" component={Artists}></Route>
    <Route exact path="/Releases" component={Releases}></Route>
  </Router>



    <br></br>
   


    <Footer><script>document.write(new Date().getFullYear())</script></Footer>

    </div>

    

    

    
  );
  
}

export default App;
